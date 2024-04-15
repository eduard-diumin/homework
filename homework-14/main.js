"use strict";
const addToCart = document.querySelector("#addToCartBtn");
const checkout = document.querySelector(".checkout");
const closeCheckoutBtn = document.querySelector(".close-checkout");
const productDetails = document.querySelector("#product-details");
const productName = document.querySelector(".featured_text h1").innerText;
const productImage = document.querySelector(".image img");
const productPrice = document.querySelector(".price").innerText;
const error = document.querySelector(".error");

addToCart?.addEventListener("click", (e) => {
  e.stopPropagation();

  checkout.classList.add("active");
  window.addEventListener("click", clickOutsideHandler);
});

closeCheckoutBtn.addEventListener("click", () =>
  checkout.classList.remove("active")
);

function clickOutsideHandler(e) {
  if (!checkout.contains(e.target)) {
    checkout.classList.remove("active");
    window.removeEventListener("click", clickOutsideHandler);
  }
}

const orderForm = document.querySelector("#order-form");
const orederInput = orderForm.querySelectorAll('input');
const submitBtn = document.querySelector('form button[type="submit"]');
const orderDetails = document.querySelector("#order-details");

const patterns = {
  fullname: /^[А-ЯҐЄІЇ][а-яґєії']+\s[А-ЯҐЄІЇ][а-яґєії']+\s[А-ЯҐЄІЇ][а-яґєії']+$/,
  phone: /^[\d()+\-]{10,13}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
};

function validateInputs() {
  let isValid = true;

  orederInput.forEach(item => {
    const key = item.getAttribute('name');
    const pattern = patterns[key];
    if (!pattern) return; 
    if (!pattern.test(item.value)) {
      isValid = false;
    }
  });

  return isValid;
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const formData = new FormData(orderForm);
  const orderData = {};

  formData.forEach((value, key) => {
    orderData[key] = value;
  });

  const { fullname, city, post_office, payment_method, quantity, comment } =
    orderData;

  if (!fullname || !city || !post_office || !payment_method || !quantity) {
    e.preventDefault();
    showError("Будь ласка, заповніть всі обов'язкові поля!");
    return;
  }

  if (!validateInputs()) {
    showError("Будь ласка, заповніть всі обов'язкові поля коректно!");
    return;
  }

  console.log(orderData);
  const productInfo = `Товар: ${productName}, Кількість: ${quantity}, Сума до сплати: $ ${
    productPrice.replace("$", "") * quantity
  }`;
  const deliveryInfo = `Покупець: ${fullname},Місто: ${city}, Склад Нової пошти: ${post_office}, Спосіб оплати: ${payment_method}`;

  const productImg = document.createElement("img");
  const infoText = document.createElement("p");
  const deliveryText = document.createElement("p");
  productImg.classList.add('product__img-details');
  productImg.src = productImage.src;
  deliveryText.textContent = deliveryInfo;
  infoText.textContent = productInfo;

  productDetails.innerHTML = "";
  productDetails.append(productImg);
  productDetails.append(infoText);
  productDetails.append(deliveryText);

  checkout.classList.remove("active");
  orderDetails.classList.add("active");
});

function showError(text) {
  error.textContent = `${text}`;
  orederInput.forEach(item => {
    item.addEventListener('input', () => {
      error.textContent = "";
    }) 
  })
}
