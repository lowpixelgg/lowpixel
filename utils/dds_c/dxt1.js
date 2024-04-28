const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const directoryPath = 'source'; // Altere para o caminho do seu diretório

// Função para listar todas as subpastas
function getSubfolders(dir) {
    return fs.readdirSync(dir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => path.join(dir, dirent.name));
}

// Função para deletar arquivo
function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(`Erro ao deletar arquivo: ${err}`);
            return;
        }
        console.log(`Arquivo deletado: ${filePath}`);
    });
}

// Função para converter arquivos
function convertFiles(folderPath) {
    fs.readdirSync(folderPath).forEach(file => {
        const ext = path.extname(file).toLowerCase();
        if (ext === '.png' || ext === '.jpeg') {
            const filePath = path.join(folderPath, file);
            const outputName = path.basename(file, ext) + '.dds';
            const outputPath = folderPath; // Define o diretório de saída para a mesma pasta

            const command = `texconv -pow2 -f BC1_UNORM -o "${outputPath}" "${filePath}"`;

            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Erro ao converter arquivo: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.error(`Erro no STDERR: ${stderr}`);
                    return;
                }
                console.log(`Arquivo convertido: ${filePath} -> ${path.join(outputPath, outputName)}`);
                
                // Deletar o arquivo original após a conversão
                deleteFile(filePath);
            });
        }
    });
}

// Executando a conversão
getSubfolders(directoryPath).forEach(subfolder => {
    convertFiles(subfolder);
});
