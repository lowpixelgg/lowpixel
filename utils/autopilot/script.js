const fs = require('fs');
const path = require('path');
const { copyFile } = require('fs/promises');
const {parse} = require('csv-parse');

const csvFilePath = 'INPUT.ide';
const sourceDirectory = 'D:/img_console/separe/txddffcol';
const destinationDirectory = 'D:/img_console/CIDADE/ints';


fs.createReadStream(csvFilePath)
.pipe(parse({ delimiter: ',' }))
.on('data', (row) => {
    const originalFileName = row[1];
    const fileName = originalFileName.replace(/\s/g, '') + '.dff'; 
    const sourceFile = path.join(sourceDirectory, fileName);
    const destinationFile = path.join(destinationDirectory, fileName);
    
    copyFile(sourceFile, destinationFile)
    .then(() => {
        console.log(`Arquivo ${fileName} copiado com sucesso.`);
    })
    .catch((err) => {
        console.error(`Erro ao copiar o arquivo ${fileName}: ${err.message}`);
    });
})
.on('end', () => {
    console.log('Processo de cópia concluído.');
});