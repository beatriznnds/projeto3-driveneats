let comidaSelecionada;
let bebidaSelecionada;
let sobremesaSelecionada;
let vetor;
let precoComida = 0;
let precoBebida = 0;
let precoSobremesa = 0;
let SelecionouComida = false;
let SelecionouBebida = false;
let SelecionouSobremesa = false;

function selecionarComida(comida) {    
 comidaSelecionada = document
    .querySelector(".comida-escolhida")
    .querySelector(".prato-selecionado");
 vetor = document.querySelector(".vetor-selecionado");
 if (comidaSelecionada !== null) {
     comidaSelecionada.classList.toggle("prato-selecionado");
     comidaSelecionada.querySelector("svg").classList.toggle("vetor-selecionado");
     SelecionouComida = true;
 }
 comida.classList.add("prato-selecionado");
 comida.querySelector("svg").classList.toggle("vetor-selecionado");
 precoComida = Number(comida.querySelector(".produto-individual h5"));
 mudarBotao ();
}

function selecionarBebida(bebida) {
    bebidaSelecionada = document
     .querySelector(".bebida-escolhida")
     .querySelector(".prato-selecionado");
    vetor = document.querySelector(".vetor-selecionado");
    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.toggle("prato-selecionado");
        bebidaSelecionada.querySelector("svg").classList.toggle("vetor-selecionado");
        SelecionouBebida = true;
    }
    bebida.classList.add("prato-selecionado");
    bebida.querySelector("svg").classList.toggle("vetor-selecionado");
    precoBebida = Number(bebida.querySelector(".produto-individual h5"));
    mudarBotao ();
}

function selecionarSobremesa(sobremesa) {
    sobremesaSelecionada = document
        .querySelector(".sobremesa-escolhida")
        .querySelector(".prato-selecionado");
    vetor = document.querySelector(".vetor-selecionado");
    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.toggle("prato-selecionado");
        sobremesaSelecionada.querySelector("svg").classList.toggle("vetor-selecionado");
        SelecionouSobremesa = true;
    }
    sobremesa.classList.add("prato-selecionado");
    sobremesa.querySelector("svg").classList.toggle("vetor-selecionado");
    precoSobremesa = Number(sobremesa.querySelector(".produto-individual h5"));
    mudarBotao ();
}

function mudarBotao () {
    if (SelecionouComida && SelecionouBebida && SelecionouSobremesa) {
        botaoFinalizado = document
            .querySelector("button").disabled = false
            .querySelector("button").classList.add("botao-selecionado")
            .querySelector(".mensagem-pedido").innerHTML = `Fechar pedido`;
    }
    else {
        document.querySelector("button").disabled = true;
    }
}

function finalizarPedido () {
    if (comidaSelecionada && bebidaSelecionada && sobremesaSelecionada) {
        let nome = prompt("Qual é seu nome?");
        let endereco = prompt("Qual é seu endereço?")
        let str = `Olá, gostaria de fazer o pedido:
        - Prato: ${comidaSelecionada}
        - Bebida: ${bebidaSelecionada}
        - Sobremesa: ${sobremesaSelecionada}
        Total: ${precoComida + precoBebida + precoSobremesa}
        Nome: ${nome}
        Endereço: ${endereco}`;
        window.open("https://wa.me/5592994939981?text=");
    }
}

