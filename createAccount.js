const form = document.querySelector('.form');
const h1 = document.querySelector('#title_info');
const p_message = document.querySelector('#onBoard_Message');

const optionButton = document.querySelector("#option_button");

let windowSize = window.matchMedia("(max-width: 800px)");

let welcomeMessage = document.createElement('p');


function mediaQuery(size) {
    if (size.matches) {
        
        h1.textContent = "Crea una cuenta";
        p_message.classList.add("textCenter");
        p_message.textContent = "¿Eres residente o administrador de conjunto residencial?\nPuedes iniciar creando tu cuenta aquí."
        // document.getElementById("onBoard_Message").style.textAlign = "center";

    } else {
        console.log(h1);
    }
}

mediaQuery(windowSize);

windowSize.addEventListener("change", () => {
    mediaQuery(windowSize);
})


