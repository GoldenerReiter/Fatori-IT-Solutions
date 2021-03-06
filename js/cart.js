"use strict";

let services = [
  {
    id: 1,
    nomen: "Servicio Mini",
    mininomen: "Mini",
    img: "../images/concept-construction-page-site.jpg",
    price: 300,
    numberOfUnits: 1,
    description: `Nuestro servicio fundamental. Este está diseñado para toda persona
    que desee ingresar al mundo digital de manera personal. Se te
    diseñará una página con CSS, SASS, JavaScript para el diseño de tu
    web. Da un paso adelante en el mundo digital y crea tu propio
    espacio digital, el cual poseerá un potencial inconmesurable en tu
    experiencia digital.`,
  },

  {
    id: 2,
    nomen: "Servicio Complex",
    mininomen: "Complex",
    img: "../images/developing-screen.jpg",
    price: 375,
    numberOfUnits: 1,
    description: `Nuestro servicio para todo aquel que quiera tener un alcance
    inconmesurable. Se te diseñará una página con CSS, SASS,
    JavaScript para la construcción de tu web, además de utilización
    de Frameworks como Bootstrap y React. Con la apariencia
    inigualable, moderna y universalizable que permiten nuestras
    tecnologías, aseguraremos que tengas un espacio digital digno de
    tu tamaño.`,
  },

  {
    id: 3,
    nomen: "Servicio Supreme",
    mininomen: "Supreme",
    img: "../images/wormhole-time-travel-portal-vortex.jpg",
    price: 420,
    numberOfUnits: 1,
    description: `Nuestro servicio para todo aquel que quiera tener un alcance
    inconmesurable y además la posibilidad de seguir desarrollandote.
    Tu página será diseñada con todas las tecnologías que poseemos,
    además de crear un modelo exclusivo construído a partir de tus
    necesidades. Ya no sólo poseerás un espacio en el mundo digital,
    sino que también este será capaz cambiar constantemente.`,
  },
];

let cart = [];

const cartQS = document.querySelector(".shoppingCart");

function saveToStorage(arr, item) {
  arr.push(item);
  let arrJSON = JSON.stringify(arr);
  localStorage.setItem("cart", arrJSON);
  renderCart();
}

function calcCart() {
  let displayCart = JSON.parse(localStorage.getItem("cart"));
  const total = document.querySelector("#total");
  let value = 0;
  if (displayCart) {
    displayCart.forEach((service) => {
      value = value + service.price * service.numberOfUnits;
      total.innerHTML = `Total a pagar: ${value}$`;
    });
  }
}

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

function renderCart() {
  cartQS.innerHTML = "";
  let displayCart = JSON.parse(localStorage.getItem("cart"));
  if (displayCart) {
    displayCart.forEach((service) => {
        cartQS.innerHTML += `<div class="item-container"><div class="cart-item">
      <div class="mainItems">
    <div class="img-container">
      <img src="${service.img}" alt="${service.nomen}">
    </div>
    <h3>
      ${service.nomen}
    </h3>
    <p id="price">
      ${service.price}$
    </p>
    </div>
    <div class="priceTagBuy">
      <p class="units">
      <button type="button" class="plusButton button" id="id-${service.mininomen}" onclick="unitChange('plus', ${service.id})">+</button>
      <div class="numberOfUnits">${service.numberOfUnits}</div>
      <button type="button" class="minusButton button" id="id-${service.mininomen}" onclick="unitChange('minus', ${service.id})">-</button>
      </p>
    </div>
  </div>
  </div>`;
    });
  } else {
    cartQS.innerHTML += "No hay nada aquí.";
  }
    calcCart();
    renderUnitsOfCart();
}

function unitChange(action, id) {
  cart = [];
  JSON.parse(localStorage.getItem("cart"));
  let displayCart = JSON.parse(localStorage.getItem("cart"));
  let foundItem = displayCart.find((item) => item.id === id);
  displayCart = displayCart.filter((displayCart) => displayCart !== foundItem);
  if (action === "minus" && foundItem.numberOfUnits > 0) {
    foundItem.numberOfUnits--;
    saveToStorage(displayCart, foundItem);
  } else if (action === "plus") {
    foundItem.numberOfUnits++;
    saveToStorage(displayCart, foundItem);
  } else if (foundItem.numberOfUnits === 0) {
    displayCart.filter((displayCart) => displayCart !== foundItem);
    let cartJSON = JSON.stringify(displayCart);
    localStorage.setItem("cart", cartJSON);
    renderCart();
  }
}

renderCart();
