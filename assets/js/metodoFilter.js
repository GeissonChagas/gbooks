const btnFiltrarLivros = document.querySelectorAll('.btn')


function filtrarLivros(){
    let livrosFiltrados = livros.filter(livro => livro.categoria == 'Finanças')
    console.table(livrosFiltrados)
}


