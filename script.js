let comidaSelecionada;
let bebidaSelecionada;
let sobremesaSelecionada;
let vetor;


function selecionarComida(comida) {    
 comidaSelecionada = document
    .querySelector(".comida-escolhida")
    .querySelector(".prato-selecionado");
 vetor = document.querySelector(".vetor-selecionado");
 if (comidaSelecionada !== null) {
     comidaSelecionada.classList.toggle("prato-selecionado");
     comidaSelecionada.querySelector("svg").classList.toggle("vetor-selecionado");     
 }
 comida.classList.add("prato-selecionado", "vetor-funcionando")
}

function selecionarBebida(bebida) {
    bebidaSelecionada = document
     .querySelector(".bebida-escolhida")
     .querySelector(".prato-selecionado");
    vetor = document.querySelector(".vetor-selecionado");
    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.toggle("prato-selecionado");
        bebidaSelecionada.querySelector("svg").classList.toggle("vetor-selecionado");
    }
    bebida.classList.add("prato-selecionado", "vetor-funcionando");
}

function selecionarSobremesa(sobremesa) {
    sobremesaSelecionada = document
        .querySelector(".sobremesa-escolhida")
        .querySelector(".prato-selecionado");
    vetor = document.querySelector(".vetor-selecionado");
    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.toggle("prato-selecionado");
        sobremesaSelecionada.querySelector("svg").classList.toggle("vetor-selecionado");
    }
    sobremesa.classList.add("prato-selecionado", "vetor-funcionando");
}

function finalizarPedido () {
    if (comida && bebida && sobremesa) {
        document.querySelector("button").classList.remove("fechar-pedido")
    }
}