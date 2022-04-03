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
 }
 comida.classList.add("prato-selecionado");
 comida.querySelector("svg").classList.toggle("vetor-selecionado");
 precoComida = Number(comida.querySelector(".produto-individual h5"));
 SelecionouComida = true;
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
    }
    bebida.classList.add("prato-selecionado");
    bebida.querySelector("svg").classList.toggle("vetor-selecionado");
    precoBebida = Number(bebida.querySelector(".produto-individual h5"));
    SelecionouBebida = true;
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
    }
    sobremesa.classList.add("prato-selecionado");
    sobremesa.querySelector("svg").classList.toggle("vetor-selecionado");
    precoSobremesa = Number(sobremesa.querySelector(".produto-individual h5"));
    SelecionouSobremesa = true;
    mudarBotao ();
}

function mudarBotao() {
    if (SelecionouComida && SelecionouBebida && SelecionouSobremesa) {
        document.querySelector("button").disabled = false
        document.querySelector("button").classList.add("botao-selecionado");
        document.querySelector(".mensagem-pedido").innerHTML = `Fechar pedido`;
    } else {
        document.querySelector("button").disabled = true;
    }
}

function finalizarPedido () {
   comidaSelecionada = document
      .querySelector(".comida-escolhida")
      .querySelector(".prato-selecionado");
    sobremesaSelecionada = document
     .querySelector(".sobremesa-escolhida")
     .querySelector(".prato-selecionado");
    bebidaSelecionada = document
        .querySelector(".bebida-escolhida")
        .querySelector(".prato-selecionado");
    if (comidaSelecionada && bebidaSelecionada && sobremesaSelecionada) {
        let precoTotal = Number(precoComida + precoBebida + precoSobremesa);
        let nome = prompt("Qual é seu nome?");
        let endereco = prompt("Qual é seu endereço?")
        let str = `Olá, gostaria de fazer o pedido:
        - Prato: ${comidaSelecionada}
        - Bebida: ${bebidaSelecionada}
        - Sobremesa: ${sobremesaSelecionada}
        Total: ${precoTotal}
        Nome: ${nome}
        Endereco: ${endereco}`;
        
        window.open("https://wa.me/5592994939981?text=" + encodeURIComponent(str));
    }
}
