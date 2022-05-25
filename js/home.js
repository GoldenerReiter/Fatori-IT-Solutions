function colourRandomizer() {
    let value = Math.floor(Math.random() * 9);
    if (value > 6) {
      return "yellow";
    } else if (value >= 3 && value <= 6) {
      return "cyan";
    } else if (value < 3) {
      return "magenta";
    }
  }

function renderUnitsOfCart() {
    let displayCart = JSON.parse(localStorage.getItem("cart"));
    const cartNumberOfItemsQS = document.querySelector("#cartNumberOfItems");
    let value = 0;
    displayCart.forEach((service) => {
        value = value + service.numberOfUnits;
        cartNumberOfItemsQS.innerHTML = `<span style="color:${colourRandomizer()};">${value}</span>`;
    })
}

renderUnitsOfCart();