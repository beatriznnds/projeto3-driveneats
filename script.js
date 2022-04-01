function selecionarComida(comida) {
 let comidaSelecionada = document.querySelector(".prato-selecionado");
 if (comidaSelecionada !== null) {
     comidaSelecionada.classList.toggle("prato-selecionado");
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