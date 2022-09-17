var listaFilmesFavo = []

function adicionarFilmes() {
    var filme = document.getElementById("filme").value
    if (filme.endsWith(".jpg")) {
        listaFilmesFavo.push(filme)
        listarFilmesTela1()
    }
}

function listarFilmesTela(filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">"
    var elementoListaFilmes = document.getElementById("listaFilmes")
    listaFilmesFavo.push(filme)
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito
}

function listarFilmesTela1() {
    var elementoListaFilmes = document.getElementById("listaFilmes")
    for (var i = 0; i < listaFilmesFavo.length; i++) {
        elementoListaFilmes.innerHTML = i + elementoListaFilmes.innerHTML
    }

}

var listaFilmes = ["https://media.fstatic.com/DKmhSWvPDGJDIa5GnXAgjC8WrgM=/290x478/smart/media/movies/covers/2012/01/c584817a3f3ff3ca88317829ea987aa9.jpg", "https://acheicinema.com/wp-content/uploads/2020/12/hZB9NvNLcxdmoiAh58ZfG8vdXjf.jpg", "https://media.fstatic.com/fdEPygBHXYFo1X_aFZCRiIGmMTY=/290x478/smart/media/movies/covers/2013/01/b60d4271ad016efa53bdd583cfa46abb.jpg"]