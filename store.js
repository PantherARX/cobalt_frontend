const decrease = document.querySelector("#decrease_quantity");
const quantity = document.querySelector("#product_quantity");
const increase = document.querySelector("#increase_quantity");

const shoppingCart = document.querySelector("#shoppingCart");
const checkout = document.querySelector("#checkoutContainer");

shoppingCart.addEventListener("click", () => {
    checkout.classList.toggle("hidden")
})

console.log(typeof Number(quantity.innerText ));

decrease.addEventListener("click", () => {
    let decreasedN = Number(quantity.innerText);
    if (Number(quantity.innerText) > 0) {
        decreasedN--;
        quantity.innerText = decreasedN;
    }

});

increase.addEventListener("click", () => {
    let increasedN = Number(quantity.innerText);
    increasedN++;
    quantity.innerText = increasedN;
})