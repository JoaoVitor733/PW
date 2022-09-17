var joao = { nome: "joao", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
var vitor = { nome: "vitor", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
var amanda = { nome: "amanda", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
var vanessa = { nome: "vanessa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }

joao.pontos = calcularPontos(joao)
vitor.pontos = calcularPontos(vitor)
amanda.pontos = calcularPontos(amanda)
vanessa.pontos = calcularPontos(vanessa)

function calcularPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates
    return pontos
}

var jogadores = [joao, vitor, amanda, vanessa]

function exibirJogadores(jogadores) {
    var elemento = ""

    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" +
            jogadores[i].nome + "</td>"
        elemento += "<td>" +
            jogadores[i].vitorias + "</td>"
        elemento += "<td>" +
            jogadores[i].empates + "</td>"
        elemento += "<td>" +
            jogadores[i].derrotas + "</td>"
        elemento += "<td>" +
            jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick = 'adicionarVitoria(" + i + ")'> Vitória</button></td>"
        elemento += "<td><button onClick = 'adicionarEmpate(" + i + ")'> Empate </button></td>"
        elemento += "<td><button onClick = 'adicionarDerrota(" + i + ")'> Derrota </button></td >"
        elemento += "</tr>"
    }
    var tabela = document.getElementById("tabelaJogadores")
    tabela.innerHTML = elemento
}

exibirJogadores(jogadores)

function adicionarVitoria(i) {
    jogadores[i].vitorias++;
    for (var j = 0; j < jogadores.length; j++) {
        if (j != i) {
            jogadores[j].derrotas++;
        }
    }
    jogadores[i].pontos = calcularPontos(jogadores[i])
    exibirJogadores(jogadores)
}

function adicionarDerrota(i) {
    var ganhador = 0
    do {
        ganhador = Math.floor(Math.random() * jogadores.length) + 0;
    } while (ganhador == i)
    adicionarVitoria(ganhador)

    exibirJogadores(jogadores)
}

function adicionarEmpate(i) {
    for (var j = 0; j < jogadores.length; j++) {
        jogadores[j].empates++;
        jogadores[j].pontos++;
    }
    exibirJogadores(jogadores)
}