let livros = []
const endpointDaAPI = 'https://geissonchagas.github.io/Minhas-API-s/api-gbooks.json'
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    livros = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}







