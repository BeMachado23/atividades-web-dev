// Funções que não dependem do DOM
//Alteração de estilo
function changeBackground(){
    const newParagrafo = document.getElementById("paragrafoQueMuda");
    newParagrafo.classList.toggle("btnBackColor")
    console.log("Button cliked");
}

// Função de inicialização que contém todo o código que precisa do DOM
function init() {
    // Alteração de texto
    document.getElementById("paragrafoQueMuda").textContent = "Olá, Mundo";

    // Manipulaçãp de classe
    const paragrafoTransform = document.querySelector('.paragrafoWeight')
    function changeColorAndWeight() {
        if(paragrafoTransform.classList.contains("changeWeight")){
            paragrafoTransform.classList.remove("changeWeight")
            paragrafoTransform.classList.add("changeColor")
        }else if (paragrafoTransform.classList.contains("changeColor")){
            paragrafoTransform.classList.remove("changeColor")
            paragrafoTransform.classList.add("changeWeight")
        }else{
            paragrafoTransform.classList.add("changeWeight")
        }
    }
    paragrafoTransform.addEventListener('click', changeColorAndWeight);
}

// Um único DOMContentLoaded para inicializar tudo
document.addEventListener('DOMContentLoaded', init);