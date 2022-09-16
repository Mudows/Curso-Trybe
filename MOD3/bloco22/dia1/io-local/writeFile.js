const fs = require('fs').promises

const nomeDoArquivo = 'meu-arquivo.txt'

const main = async () => {
  try {
    const data = await fs.writeFile(nomeDoArquivo, 'Bagulho é doido, mano!')
    console.log('Deu bom!')
  } catch (err) {
    console.error(`Algo de errado não está certo no arquivo: ${err.path}`)
  }
}

main()
