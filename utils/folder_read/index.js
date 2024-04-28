const fs = require('fs');
const path = require('path');

const diretorio = 'D:/all-dev/dev-server/mods/deathmatch/resources/[lowpixel]/[gamemode]/pixel_characters/assets/genders/icons'; // Substitua pelo caminho do seu diretório

fs.readdir(diretorio, (err, arquivos) => {
  if (err) {
    console.error('Erro ao ler o diretório:', err);
    return;
  }

  console.log('Arquivos no diretório:');
  arquivos.forEach(arquivo => {
    const caminhoArquivo = path.join(diretorio, arquivo);
    const ehDiretorio = fs.statSync(caminhoArquivo).isDirectory();
    if (ehDiretorio) {
      console.log(arquivo, '(diretório)');
    } else {
      console.log(` <html src="assets/genders/icons/${arquivo}" default="false" raw="true"/>`);
    }
  });
});