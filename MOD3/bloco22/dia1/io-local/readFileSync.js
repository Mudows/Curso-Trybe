const fs = require('fs')

const nomeDoArquivo = 'meu-arquivo.txt'

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf-8')
  console.log(data);
} catch (err) {
  console.error(`Algo de errado não está certo no arquivo: ${err.path}`)
}
