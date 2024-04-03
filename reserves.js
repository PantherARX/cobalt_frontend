const reserves = document.querySelectorAll(".property_img");
const buttonReserve = document.querySelector(".button-input");

reserves.forEach((e) => {
    e.addEventListener("click", () => {
        const test = e.querySelector(".reserves")
        test.classList.toggle("hidden");
    });
});

buttonReserve.addEventListener("click", () => {
    const reserve = document.querySelector(".property_img");
    reserve.classList.toggle("hiddden");
    
});