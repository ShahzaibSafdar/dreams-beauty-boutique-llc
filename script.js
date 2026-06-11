let cartCount = 0;

function addToCart() {
    cartCount++;

    document.getElementById("cart-count").innerText = cartCount;
}

document.addEventListener("DOMContentLoaded", () => {

let cartCount = localStorage.getItem("cartCount") || 0;

const counter = document.getElementById("cart-count");

if(counter){
counter.textContent = `(${cartCount})`;
}

const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(button => {

button.addEventListener("click", () => {

cartCount++;

localStorage.setItem("cartCount", cartCount);

if(counter){
counter.textContent = `(${cartCount})`;
}

alert("Product Added To Cart!");

});

});

});