const img = document.querySelector("#option_image");
const messageOpt = document.querySelector("#option_message");
const userName = document.querySelector("#user_name-input");

const loginOpt = document.querySelector("#logIn_option");



window.addEventListener('load', () => {
    //console.log("hey");
    img.src = "img/phoneKeyboard_logo.svg";
    messageOpt.textContent = "numero telefónico";

});

loginOpt.addEventListener("click", () => {
    if (messageOpt.textContent.includes("telefónico")) {
        console.log("debug");
        img.src = "img/email_logo.svg";
        messageOpt.textContent = "correo electrónico";
        userName.placeholder = "Numero telefonico"
        userName.type = "number";
        console.log(userName.type)
    } else {
        img.src = "img/phoneKeyboard_logo.svg";
        messageOpt.textContent = "Correo electrónico";
        userName.type = "text";
        console.log(userName.type);
    }
    
})