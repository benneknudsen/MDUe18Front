"use strict";

// =========== Single Page Application functionality =========== //

// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
  location.href = `#${pageId}`;
  setActiveTab(pageId);
}

// sets active tabbar/ menu item
function setActiveTab(pageId) {
  let pages = document.querySelectorAll(".tabbar a");
  for (let page of pages) {
    if (`#${pageId}` === page.getAttribute("href")) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }

  }
}

// set default page
function setDefaultPage() {
  let page = "products";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}

setDefaultPage();

// =========== Product functionality =========== //

let products = [{
    brand: 'Apple',
    model: 'Macbook Pro 13',
    price: 12000,
    img: 'https://www.elgiganten.dk/image/dv_web_D18000100259061/MACBPMPXQ2DKA/macbook-pro-13-mpxq2-space-grey.jpg?$prod_all4one$'



  },

  {
    brand: 'Apple',
    model: 'Macbook Pro 15',
    price: 15000,
    img: 'https://www.elgiganten.dk/image/dv_web_D18000100259061/MACBPMPXQ2DKA/macbook-pro-13-mpxq2-space-grey.jpg?$prod_all4one$'

  },

  {
    brand: 'Asus',
    model: 'Zenbook 14',
    price: 4500,
    img: 'https://media.power.dk/images/h-7f45c2a55ddb117ac5356153c12b4e3b/products/951450/951450_1_600x600_w_g.jpg'
  },

  {
    brand: 'Lenovo',
    model: 'Thinkpad L480',
    price: 6850,
    img: 'https://www.elgiganten.dk/image/dv_web_D18000100294639/20LSS0ED00/lenovo-thinkpad-l480-14-baerbar-computer-3y-on-site.jpg?$prod_all4one$'

  }
]

console.log(products);

function appendProducts(productArray) {
  let htmlTemplate = "";

  for (let product of productArray) {
    console.log(product);
    htmlTemplate += `
    <img src="${product.img}">
    <h2>${product.model}</h2>
    <h3>${product.brand}</h3>
    <p>${product.price}</p>`;

  }

  document.querySelector("#products-container").innerHTML = htmlTemplate;

}

appendProducts(products);

function addNewProduct() {
  let model = document.querySelector("#model").value;
  let brand = document.querySelector("#brand").value;
  let price = document.querySelector("#price").value;
  let img = document.querySelector("#img").value;

  let NewProduct = {
    model: model,
    brand: brand,
    price: price,
    img: img
  };

  console.log(NewProduct);
  products.push(NewProduct);
  console.log(products);
  appendProducts(products);
  document.querySelector("#model").value = "";
  document.querySelector("#brand").value = "";
  document.querySelector("#price").value = "";
  document.querySelector("#img").value = "";
  showPage("products");
}

function search(value) {
  console.log(value);
  let searchQuery = value.toLowerCase();
let filteredProducts = [];
  for (let product of products) {
    let model = product.model.toLowerCase();
    let brand = product.brand.toLowerCase();

    if(model.includes(searchQuery) || brand.includes(searchQuery)){
      filteredProducts.push(product);
    }
  }
  console.log(filteredProducts);
  appendProducts(filteredProducts);
}
