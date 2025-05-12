// Funções que não dependem do DOM
function changeBackground() {
    const newParagrafo = document.getElementById("paragrafoQueMuda");
    newParagrafo.classList.toggle("btnBackColor");
    console.log("Botão clicado");
    
}
  
// Função principal executada após o carregamento do DOM
function init() {
    // Altera o texto do parágrafo principal
    document.getElementById("paragrafoQueMuda").textContent = "Olá, Mundo";

    // Manipulação de classes no clique do segundo parágrafo
    const paragrafoTransform = document.querySelector('.paragrafoWeight');
    paragrafoTransform.addEventListener('click', () => {
        if (paragrafoTransform.classList.contains("changeWeight")) {
            paragrafoTransform.classList.remove("changeWeight");
            paragrafoTransform.classList.add("changeColor");
        } else if (paragrafoTransform.classList.contains("changeColor")) {
            paragrafoTransform.classList.remove("changeColor");
            paragrafoTransform.classList.add("changeWeight");
        } else {
            paragrafoTransform.classList.add("changeWeight");
        }
    });

    //Manipulação de elementos
    const btnChangerId = document.getElementById("btnChangerId");
    btnChangerId.addEventListener("click", () => {
        const input = document.querySelector(".inputInsert");
        const inputText = input.value.trim();
        if (inputText === "") return;

        const newParagraph = document.createElement("p");
        newParagraph.textContent = inputText;

        document.querySelector(".areaNewP").appendChild(newParagraph);
        input.value = "";
    });
    //Remoção de Elementos
    const list = document.querySelectorAll(".removeElement li");
    list.forEach(element => {
        element.addEventListener('click', () =>{
            element.remove();
        })
    });
    //Manipulação de Atributo
    const transition = document.querySelector('.attributeManipulation img')
    transition.addEventListener('mouseover', () =>{
        transition.src = 'https://static7.depositphotos.com/1007066/766/i/950/depositphotos_7661375-stock-photo-scared-baby-girl.jpg'
    })
    transition.addEventListener("mouseout", () =>{
        transition.src = "https://conteudo.imguol.com.br/c/noticias/9a/2016/08/03/bebe-crianca-surpresa-crianca-assustada-bebezinho-1470229177224_615x300.jpg"
        
    })
    //Criação de elementos Dinâmicos
    const select = document.getElementById('cores')
    const colorArea = document.querySelector('.colorSelected')
    select.addEventListener('change', () =>{
        selectedValue = select.value;
        selectedText = select.options[select.selectedIndex].text;
        
        const newParagraph = document.createElement('p');
        newParagraph.textContent = selectedText;

        switch (selectedValue) {
            case "vermelho":
                newParagraph.style.backgroundColor = 'red'
                break;
            case "verde":
                newParagraph.style.backgroundColor = 'green'
                break;
            case "amarelo":
                newParagraph.style.backgroundColor = 'yellow'
                break;
            case "roxo":
                newParagraph.style.backgroundColor = 'purple'
                break;
            case "preto":
                newParagraph.style.backgroundColor = 'black'
                newParagraph.style.color = 'white'
                break;

                default:
                    newParagraph.style.backgroundColor = 'gray'
        }
        colorArea.appendChild(newParagraph)
    })
    //Animação simples
    const animation = document.querySelector('.animatedButton');
    const img = document.getElementById("babyImg");
    
    let posX = 0;
    let animationId;

    let movingFoward = true;
    animation.addEventListener('click', () =>{
        cancelAnimationFrame(animationId)

        function animate() {
            if(movingFoward){
                if (posX < 500){
                    posX += 2;
                }else{
                    movingFoward = false
                }   
            }else{
                if(posX > 0){
                    posX -= 2;
                } else{
                    cancelAnimationFrame(animationId);
                    return;
                }
            }
            img.style.transform = `translateX(${posX}px)`;
            animationId = requestAnimationFrame(animate);
        }
        movingFoward = true;
        animate();
    } )
    //Validação de formulário
    const form = document.querySelector('.formValidation')
    const messageErro = document.querySelector(".erroMessage")
    form.addEventListener("submit", (event)=>{
        event.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message')

        if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === ''){
            messageErro.textContent = "Por favor, preencha todos os campos";
        }else{
            messageErro.textContent = ""
            form.reset();
        }
    })
}

// Executa init quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", init);
