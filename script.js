const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const removeProductButton = document.getElementById('remove-product')
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

//Function to add an item

addProductButton.addEventListener('click',() => {
  
 addItem();
 updateTotalPrice(Number(productPriceInput.value));
})

 
//Offers validation feedback if invalid product is entered
/* if (!name || isNaN(price)) {
  alert("Not a valid price.");
  return;
} */

function addItem(){
  const addProduct = document.createElement('li');
  addProduct.dataset.price = productPriceInput.value
  addProduct.innerHTML = `<span>${productNameInput.value} - ${productPriceInput.value}</span> <button class="remove-product">Remove</button>` 
  cart.appendChild(addProduct);
  
}

// function removeItem(){
//   const removeProduct = document.removeElement('li');
//   removeProduct.dataset.price = productPriceInput.value
//   removeProduct.innerHTML = `<span>${productNameInput.value} - ${productPriceInput.value}</span> <button id="remove-product">Remove</button>` 
//   cart.appendChild(removeProduct);
// }

cart.addEventListener('click', (event) => {
  if(event.target.classList.contains("remove-product")){
  removeItem(event);
  }

}) 


function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}   