var numeroSecreto = parseInt(Math.random() * 11);

function chutar() {
    var elementoResultado = document.getElementById("resultado")
    console.log(elementoResultado)
    var chute = parseInt(document.getElementById("valor").value);
    if (numeroSecreto == chute) {
        elementoResultado.innerHTML = "você acertou"
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Digite um valor entre 0 e 10"
    } else {
        elementoResultado.innerHTML = "Você errou"
    }
}