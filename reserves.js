const reserves = document.querySelectorAll(".property_img");
const buttonReserve = document.querySelector(".button-input");

reserves.forEach((e) => {
    
    e.addEventListener("click", () => {
        const test = e.querySelector(".reserves")
        test.classList.toggle("hidden");
        e.parentElement.parentElement.setAttribute("disabled", "");
        console.log(e.innerHTML);
        // e.setAttribute("disabled", "");
        
    });

});

buttonReserve.addEventListener("click", () => {
    const reserve = document.querySelector(".property_img");
    console.log("click")
    reserve.classList.toggle("hiddden");
    
});