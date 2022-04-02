let comidaSelecionada;
let bebidaSelecionada;
let sobremesaSelecionada;
let vetor;
let precoComida;
let precoBebida;
let precoSobremesa;


function selecionarComida(comida) {    
 comidaSelecionada = document
    .querySelector(".comida-escolhida")
    .querySelector(".prato-selecionado");
 vetor = document.querySelector(".vetor-selecionado");
 if (comidaSelecionada !== null) {
     comidaSelecionada.classList.toggle("prato-selecionado");
     comidaSelecionada.querySelector("svg").classList.toggle("vetor-selecionado");     
 }
 comida.classList.add("prato-selecionado", "vetor-funcionando");
 precoComida = Number(comida.document.querySelector(".produto-individual h5"));
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
    precoBebida = Number(bebida.document.querySelector(".produto-individual h5"));
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
    precoSobremesa = Number(sobremesa.document.querySelector(".produto-individual h5"));
}

function finalizarPedido () {
    if (comidaSelecionada && bebidaSelecionada && sobremesaSelecionada) {
        document.querySelector("button").classList.add("botao-selecionado")
        document.querySelector(".mensagem-pedido").innerHTML = `Fechar pedido`;    
    }
    let nome = prompt("Qual é seu nome?");
    let endereco = prompt("Qual é o seu endereço?");
    let str = `Olá, gostaria de fazer o pedido:
    - Prato: ${comidaSelecionada}
    - Bebida: ${bebidaSelecionada}
    - Sobremesa: ${sobremesaSelecionada}
    Total: ${precoComida + precoBebida + precoSobremesa}
    Nome: ${nome}
    Endereço: ${endereco}`;
    window.open("https://wa.me/55219631235636?=text" + encondeURIComponent(str));
}