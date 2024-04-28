const fs = require('fs').promises;
const { XMLParser, XMLBuilder } = require('fast-xml-parser');
const { SingleBar } = require('cli-progress');

// Função para limpar nós de veículos
async function cleanVehicleNodes() {
  console.log("Start cleaning vehicle nodes");
  const data = await fs.readFile("nodes.xml", "utf-8");
  const parser = new XMLParser();
  const builder = new XMLBuilder();

  let jsonObj = parser.parse(data);

  // Inicializar barra de progresso
  const progressBar = new SingleBar({});
  progressBar.start(jsonObj.objects.object.length, 0);

  jsonObj.objects.object = jsonObj.objects.object.filter((node, index) => {
    // Remover atributos desnecessários
    delete node['@_version'];
    delete node['@_filename'];
    delete node['@_timestamp'];
    delete node['@_user'];

    // Lógica de limpeza aqui...

    // Atualizar barra de progresso
    progressBar.update(index + 1);
    return true; // Mantenha o nó ou retorne false para removê-lo
  });

  progressBar.stop();

  const xml = builder.build(jsonObj);
  await fs.writeFile("nodes.xml", xml);
  console.log("End cleaning vehicle nodes");
}

// Função para limpar links de veículos
async function cleanVehicleLinks() {
  console.log("Start cleaning vehicle links");
  const data = await fs.readFile("links.xml", "utf-8");
  const parser = new XMLParser();
  const builder = new XMLBuilder();

  let jsonObj = parser.parse(data);

  // Inicializar barra de progresso
  const progressBar = new SingleBar({});
  progressBar.start(jsonObj.objects.object.length, 0);

  jsonObj.objects.object = jsonObj.objects.object.filter((node, index) => {
    // Remover atributos desnecessários
    delete node['@_version'];
    delete node['@_filename'];
    delete node['@_timestamp'];
    delete node['@_user'];

    // Lógica de limpeza aqui...

    // Atualizar barra de progresso
    progressBar.update(index + 1);
    return true; // Mantenha o nó ou retorne false para removê-lo
  });

  progressBar.stop();

  const xml = builder.build(jsonObj);
  await fs.writeFile("links.xml", xml);
  console.log("End cleaning vehicle links");
}

// Executar as funções de limpeza
(async () => {
  await cleanVehicleNodes();
  await cleanVehicleLinks();
})();
