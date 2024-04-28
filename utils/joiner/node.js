const fs = require('fs');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();

// Função para calcular a distância euclidiana entre dois pontos
function calculateDistance(x1, y1, z1, x2, y2, z2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    let dz = z2 - z1;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

// Função para processar o arquivo nodes.xml e retornar um mapa de nós
function processNodes(nodes) {
    let nodesMap = {};
    let guidToIdMap = {};
    let nextId = 0;

    // Verificando se os caminhos esperados existem
    if (!nodes.scene || !nodes.scene.objects || !nodes.scene.objects[0].object) {
        console.error('A estrutura do XML nodes.xml não é como esperado.');
        return { nodesMap, guidToIdMap };
    }

    nodes.scene.objects[0].object.forEach(obj => {
        const guid = obj.$.guid;
        const position = obj.position[0].$;
        nodesMap[nextId] = {
            x: parseFloat(position.x),
            y: parseFloat(position.y),
            z: parseFloat(position.z),
            edges: []
        };
        guidToIdMap[guid] = nextId;
        nextId++;
    });
    return { nodesMap, guidToIdMap };
}

// Função para processar o arquivo links.xml e atualizar o mapa de nós com as arestas
function processLinks(links, nodesMap, guidToIdMap) {
    // Verificando se os caminhos esperados existem
    if (!links.scene || !links.scene.objects || !links.scene.objects[0].object) {
        console.error('A estrutura do XML links.xml não é como esperado.');
        return;
    }
    
    links.scene.objects[0].object.forEach(obj => {
        // Adicionando verificação adicional aqui
        if (!obj.references || !obj.references[0].ref) {
            console.error('Referências não encontradas para o objeto: ', obj);
            return;
        }
        const refGuids = obj.references[0].ref.map(ref => ref.$.guid);
        // Verificando se encontramos dois guids antes de proceder
        if (refGuids.length === 2 && refGuids.every(guid => guidToIdMap.hasOwnProperty(guid))) {
            const id1 = guidToIdMap[refGuids[0]];
            const id2 = guidToIdMap[refGuids[1]];
            const node1 = nodesMap[id1];
            const node2 = nodesMap[id2];
            const distance = calculateDistance(node1.x, node1.y, node1.z, node2.x, node2.y, node2.z);
            node1.edges.push({ id: id2, distance });
            node2.edges.push({ id: id1, distance });
        } else {
            console.error('Par de nós inválido ou nós não encontrados para os guids: ', refGuids);
        }
    });
}

// Função para criar o arquivo JSON de saída
function createJSONOutput(nodesMap, outputPath) {
    let nodesArray = Object.keys(nodesMap).map(key => {
        const node = nodesMap[key];
        return {
            id: parseInt(key),
            x: node.x,
            y: node.y,
            z: node.z,
            edges: node.edges.map(edge => [edge.id, edge.distance])
        };
    });
    fs.writeFile(outputPath, JSON.stringify(nodesArray, null, 4), err => {
        if (err) throw err;
        console.log('JSON file has been saved.');
    });
}

// Leitura e processamento dos arquivos XML
fs.readFile('nodes.xml', (err, data) => {
    if (err) throw err;
    parser.parseString(data, (err, nodesResult) => {
        if (err) throw err;
        console.log('Estrutura do nodes.xml após o parse:', nodesResult);  // Log para verificar a estrutura
        const { nodesMap, guidToIdMap } = processNodes(nodesResult);
        fs.readFile('links.xml', (err, data) => {
            if (err) throw err;
            parser.parseString(data, (err, linksResult) => {
                if (err) throw err;
                console.log('Estrutura do links.xml após o parse:', linksResult);  // Log para verificar a estrutura
                processLinks(linksResult, nodesMap, guidToIdMap);
                createJSONOutput(nodesMap, 'output_path.json');
            });
        });
    });
});
