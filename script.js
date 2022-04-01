function selecionarComida(comida) {    
 let comidaSelecionada = document.querySelector(".prato-selecionado");
 let vetor = document.querySelector(".vetor-selecionado");
 if (comidaSelecionada !== null ) {
     comidaSelecionada.classList.toggle("prato-selecionado");
     vetor.classList.toggle("vetor-funcionando");
     comdi
 }
 comida.classList.add("prato-selecionado");
}

function selecionarBebida(bebida) {
    let bebidaSelecionada = document.querySelector(".prato-selecionado");
    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.toggle("prato-selecionado");
    }
    bebida.classList.add("prato-selecionado");
}

function selecionarSobremesa(sobremesa) {
    let sobremesaSelecionada = document.querySelector(".prato-selecionado");
    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.toggle("prato-selecionado");
    }
    sobremesa.classList.add("prato-selecionado");
}