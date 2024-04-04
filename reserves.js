// const reserves = document.querySelectorAll(".property_img");
const reserveImg = document.querySelectorAll(".property_photo");

reserveImg.forEach((e, i, arr) => {
    const main = document.querySelector("main");
    e.addEventListener("click", (element) => {
        const popUp = e.parentElement.querySelector(".reserves");
        const btn = e.parentElement.querySelector(".button-input");

        popUp.classList.toggle("hidden");

        
        for (let ind = 0; ind < arr.length; ind++){
            if(element.currentTarget != arr[ind]){
                arr[ind].classList.add("hide-all");
            }
        }

        btn.addEventListener("click", () => {
            for (let f = 0; f < arr.length; f++){
                arr[f].classList.remove("hide-all");
                popUp.classList.add("hidden");
            }
        })

        
    })
})