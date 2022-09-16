const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt'

async function main() {
  try {
    const data = await fs.readFile(nomeDoArquivo, 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(`Algo de errado não está certo no arquivo: ${err.path}`);
  }
}

main()
