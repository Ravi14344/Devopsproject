'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".card-action-btn");

  addToCartButtons.forEach(button => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      // Add logic here to add the product to the cart
      const productTitle = this.closest(".product-card").querySelector(".card-title").textContent;
      const productPrice = this.closest(".product-card").querySelector(".card-price").getAttribute("value");
      console.log("Product added to cart:");
      console.log("Title:", productTitle);
      console.log("Price:", productPrice);
      // You can replace the console.log statements with actual code to add the product to the cart
    });
  });
});

////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const cartButton = document.querySelector(".action-btn[aria-label='cart']");
  const cartContainer = document.getElementById("cartContainer");
  const closeButton = document.createElement("button");
  closeButton.innerHTML = '<ion-icon name="close-outline" aria-hidden="true"></ion-icon>';
  closeButton.className = "close-cart-btn";

  // Function to toggle the cart visibility
  const toggleCart = function () {
    cartContainer.classList.toggle("active");
  };

  // Event listener for cart button click
  cartButton.addEventListener("click", function () {
    toggleCart();
  });

  // Event listener for close button in the cart
  closeButton.addEventListener("click", function () {
    toggleCart();
  });

  // Add close button to the cart container
  cartContainer.appendChild(closeButton);

  // Example of adding items to the cart
  const addProductToCart = function (productName, productPrice) {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <span>${productName}</span>
      <span>${productPrice}</span>
    `;
    cartContainer.insertBefore(cartItem, closeButton);
  };

  // Example usage: adding a product to the cart
  addProductToCart("Sample Product", "$19.99");
});

