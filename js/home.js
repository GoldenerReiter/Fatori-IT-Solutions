function renderUnitsOfCart() {
    let displayCart = JSON.parse(localStorage.getItem("cart"));
    const cartNumberOfItemsQS = document.querySelector("#cartNumberOfItems");
    let value = 0;
    displayCart.forEach((service) => {
        value = value + service.numberOfUnits;
        cartNumberOfItemsQS.innerHTML = value;
    })
}

renderUnitsOfCart();