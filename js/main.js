"use strict";

function basketAdd(item) {
  basket.push(item);
}

function basketCounter() {
  let basketValue = 0;
  for (const i of basket) {
    basketValue = basketValue + i.price;
  }
  return basketValue;
}

let services = [
  {
    id: "Servicio Mini",
    img: '<img src="../images/concept-construction-page-site.jpg"/>',
    price: 300,
  },

  {
    id: "Servicio Complex",
    img: '<img src="../images/developing-screen.jpg"/>',
    price: 375,
  },

  {
    id: "Servicio Supreme",
    img: '<img src="../images/wormhole-time-travel-portal-vortex.jpg"/>',
    price: 420,
  },
];

document.querySelector("#precioMini").innerHTML = services[0].price + "$";
document.querySelector("#precioMass").innerHTML = services[1].price + "$";
document.querySelector("#precioSupreme").innerHTML = services[2].price + "$";

let basket = [];
let htmlBasket = document.querySelector("#basket");

let idMini = document.querySelector("#idMini");
let idMass = document.querySelector("#idMass");
let idSupreme = document.querySelector("#idSupreme");
let total = document.querySelector("#total");

let counter = 0;
idMini.onclick = () => {
  basketAdd(services[0]);
  counter++;
  htmlBasket.innerHTML += `<div class="basket-item">
            <p class="basket-text"> Item ${counter} </p>
            <div class ="img-container-basket">${services[0].img} </div>
            <p class="basket-text"> Producto: ${services[0].id} </p>
            </div>`;

  total.innerHTML = `Total: ${basketCounter()}$`;
};
idMass.onclick = () => {
  basketAdd(services[1]);
  counter++;
  htmlBasket.innerHTML += `<div class="basket-item">
            <p class="basket-text"> Item ${counter} </p>
            <div class ="img-container-basket">${services[1].img} </div>
            <p class="basket-text"> Producto: ${services[1].id} </p>
            </div>`;

  total.innerHTML = `Total: ${basketCounter()}$`;
};
idSupreme.onclick = () => {
  basketAdd(services[2]);
  counter++;
  htmlBasket.innerHTML += `<div class="basket-item">
        <p class="basket-text"> Item ${counter} </p>
        <div class ="img-container-basket">${services[2].img} </div>
        <p class="basket-text"> Producto: ${services[2].id} </p>
        </div>`;

  total.innerHTML = `Total: ${basketCounter()}$`;
};
