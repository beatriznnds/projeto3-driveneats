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
    let nomeComida = comidaSelecionada.querySelector(".produto-individual h4").innerHTML;
    precoComida = comidaSelecionada.querySelector("span").innerHTML.replace(",", ".");    
    sobremesaSelecionada = document
     .querySelector(".sobremesa-escolhida")
     .querySelector(".prato-selecionado");
    let nomeSobremesa = sobremesaSelecionada.querySelector(".produto-individual h4").innerHTML;
    precoSobremesa = sobremesaSelecionada.querySelector("span").innerHTML.replace(",", ".");
    bebidaSelecionada = document
        .querySelector(".bebida-escolhida")
        .querySelector(".prato-selecionado");
    let nomeBebida = bebidaSelecionada.querySelector(".produto-individual h4").innerHTML;
    precoBebida = bebidaSelecionada.querySelector("span").innerHTML.replace(",", ".");
    if (comidaSelecionada && bebidaSelecionada && sobremesaSelecionada) {       
        let precoTotal = ((Number(precoComida) + Number(precoBebida) + Number(precoSobremesa)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace(",", "."));
        let nome = prompt("Qual é seu nome?");
        let endereco = prompt("Qual é seu endereço?")
        let str = `Olá, gostaria de fazer o pedido:\n- Prato: ${nomeComida}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\nTotal: ${precoTotal}\n\nNome: ${nome}\nEndereço: ${endereco}`;
        
        window.open("https://wa.me/5592994939981?text=" + encodeURIComponent(str));
    }
}
