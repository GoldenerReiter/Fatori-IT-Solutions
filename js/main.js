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

const servicesQS = document.querySelector(".services");

  // Esta función muestra los servicios en la página web.
  // Itera a través de cada servicio en el arreglo `services` y agrega
  // un elemento `div` con la información del servicio a la sección `.services`.
  // También agrega un botón `Get me!` a cada elemento `div` que llama
  // a la función `addToCart()` cuando se hace clic.
function displayServices() {
  services.forEach((service) => {
    servicesQS.innerHTML += `<div class="grid-item">
    <div class="img-container">
      <img src="${service.img}" alt="${service.nomen}">
    </div>
    <h3>
      ${service.nomen}
    </h3>
    <p>
    ${service.description}
    </p>
    <div class="priceTagBuy">
      <p id="price">
      ${service.price}$
      </p>
      <button type="button" class="getMeButton" id="id-${service.mininomen}" onclick="addToCart(${service.id})">Get me!</button>
    </div>
  </div>`;
    
  let displayCart = JSON.parse(localStorage.getItem("cart"));
    if (displayCart) {
      renderUnitsOfCart();
    }
  });
}

  // Esta función agrega un elemento `item` al arreglo `arr` y lo guarda
  // en el almacenamiento local. También llama a la función `renderUnitsOfCart()`
  // para actualizar el número de elementos en el carrito.
function saveToStorage(arr, item) {
  arr.push(item);
  let arrJSON = JSON.stringify(arr);
  localStorage.setItem("cart", arrJSON);
  renderUnitsOfCart();
}

  // Esta función genera un color aleatorio para el texto de la notificación.
  // Utiliza la función `Math.floor()` para obtener un número entero entre 0 y 8,
  // y luego utiliza un `switch` para asignar el color correspondiente.
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

  // Esta función muestra una notificación de error utilizando la biblioteca
  // `Toastify`. La notificación indica que el producto ya está en el carrito.
function toastifyError() {
  Toastify({
    text: "Ya tienes ese producto en tu carrito!",
    duration: 3000,
    className: "toastifyError",
    style: {
      background: "rgb(12, 12, 12)",
      color: colourRandomizer(),
      padding: "1%",
      margin: "auto",
    },
  }).showToast();
}

  // Esta función verifica si el servicio con el ID `id` ya está en el arreglo
  // `arr`. Si es así, muestra una notificación de error. Si no, agrega el servicio
  // al arreglo y lo guarda en el almacenamiento local.
function disjunction(arr, id) {
  arr.some((service) => service.id === id) ? toastifyError() : saveToStorage(arr, services.find((item) => item.id === id));
}

  // Esta función obtiene el número de elementos en el carrito del almacenamiento local.
  // Luego, agrega un elemento `span` con el número de elementos al elemento `#cartNumberOfItems`.
function renderUnitsOfCart() {
  let displayCart = JSON.parse(localStorage.getItem("cart"));
  const cartNumberOfItemsQS = document.querySelector("#cartNumberOfItems");
  let value = 0;
  displayCart.forEach((service) => {
      value = value + service.numberOfUnits;
      cartNumberOfItemsQS.innerHTML = `<span style="color:${colourRandomizer()};">${value}</span>`;
  })
  return;
}

  // Esta función llama a la función `disjunction()` para agregar el servicio con el ID
  // `id` al carrito. Luego, llama a la función `renderUnitsOfCart()` para actualizar
  // el número de elementos en el carrito.
function addToCart(id) {
  let displayCart = JSON.parse(localStorage.getItem("cart"));
  displayCart ? disjunction(displayCart, id) : disjunction(cart, id);
  renderUnitsOfCart();
}

displayServices();
