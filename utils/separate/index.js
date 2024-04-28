const fs = require("fs");

// Abre o arquivo .lua
const luaFile = fs.readFileSync("nodes.lua", "utf-8");

// Separa cada linha em um array
const luaLines = luaFile.split("\n");

// Divide os dados em grupos de 200 linhas
const groups = [];
for (let i = 0; i < luaLines.length; i += 200) {
    groups.push(luaLines.slice(i, i + 200).join("\n"));
}

// Escreve as subtabelas em um arquivo Lua (output.lua)
let conteudoOutputLua = 'Nodes = {}\n';

groups.forEach((grupo, index) => {
    conteudoOutputLua += `Nodes[${index + 1}] = {\n${grupo}\n}\n\n`;
});

fs.writeFileSync('output.lua', conteudoOutputLua, 'utf8');
