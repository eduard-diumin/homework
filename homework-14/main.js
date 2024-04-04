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
const submitBtn = document.querySelector('form button[type="submit"]');
const orderDetails = document.querySelector("#order-details");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const formData = new FormData(orderForm);
  const orderData = {};

  for (const [key, value] of formData.entries()) {
    orderData[key] = value;
  }

  const { fullname, city, post_office, payment_method, quantity, comment } =
    orderData;

  if (!fullname || !city || !post_office || !payment_method || !quantity) {
    e.preventDefault(); 
    showError("Будь ласка, заповніть всі обов'язкові поля!");
    return;
  }

  const fullnamePattern = /^[А-ЯЁа-яёІіЇїҐґA-Za-z]+\s[А-ЯЁа-яёІіЇїҐґA-Za-z]+\s[А-ЯЁа-яёІіЇїҐґA-Za-z]+$/;
  if (!fullnamePattern.test(fullname)) {
    e.preventDefault();
    showError("Будь ласка, введіть ПІБ у форматі 'Прізвище Ім'я По батькові' (наприклад, 'Іванов Іван Іванович').");
    return;
  }

  if (!/^\d+$/.test(quantity)) {
    e.preventDefault();
    showError("Кількість товару повинна бути цілим числом!");
    return;
  }
  console.log(orderData);
  const productInfo = `Товар: ${productName}, Кількість: ${quantity}, Сума до сплати: $ ${productPrice.replace("$", "") * quantity
  }`;
  const deliveryInfo = `Покупець: ${fullname},Місто: ${city}, Склад Нової пошти: ${post_office}, Спосіб оплати: ${payment_method}`;

  productDetails.innerHTML = `<img src="${productImage.src}" width="75" alt="Product Image"><p>${productInfo}</p><p>${deliveryInfo}</p>`;
  checkout.classList.remove("active");
  orderDetails.classList.add("active");
});

function showError(text) {
  error.textContent = `${text}`;
  setTimeout(() => {
    error.textContent = "";
  }, 4000);
}
