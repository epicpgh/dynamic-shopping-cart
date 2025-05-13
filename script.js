const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const removeProductbutton = document.getElementById('remove-product')
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

//Function to add an item

addProductButton.addEventListener('click', () => {
//check if price and name were provided
  
 addItem();
 updateTotalPrice(Number(productPriceInput.value))
}); 

function addItem(){
  const addProduct = document.createElement('li');
  addProduct.dataset.price = productPriceInput.value
  addProduct.innerHTML = `<span>${productNameInput.value} - ${productPriceInput.value}</span> <button id="remove-product">Remove</button>` 
  cart.appendChild(addProduct);
  
}

removeProductButton.addEventListener('click', () => {
   removeItem();
   updateTotalPrice(Number(productPriceInput.value))
  }); 


  function removeItem(){
    const addProduct = document.createElement('li');
    addProduct.dataset.price = productPriceInput.value
    addProduct.innerHTML = `<span>${productNameInput.value} - ${productPriceInput.value}</span> <button id="remove-product">Remove</button>` 
    cart.appendChild(removeProduct);
    