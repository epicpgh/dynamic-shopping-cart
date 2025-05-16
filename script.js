const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");

let totalPrice = 0;

// Function to update the total price
function updateTotalPrice(amount) {
  if (isNaN(amount)){
    alert('Invalid Input:  You Gotta Use This Number Format, Chief: 00.00');
    return;
  }

  
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

//Function to add an item

addProductButton.addEventListener("click", () => {
  addItem();
  updateTotalPrice(Number(productPriceInput.value));
  
});

//Offers validation feedback if invalid product is entered






function addItem() {

  const productPrice = productPriceInput.value;
  const productName =productNameInput.value;

  if (isNaN(productPrice) || !/^\d+\.\d{2}$/.test(productPrice)) {
    alert('You Gotta Use This Number Format, Friend: 00.00. Numbers and decimals only.');
    return;
  }


  const addProduct = document.createElement("li");
  addProduct.dataset.price = productPriceInput.value;
  addProduct.innerHTML = `<span>${productNameInput.value} - ${productPriceInput.value}</span> <button class="remove-product">Remove</button>`;
  cart.appendChild(addProduct);
}

cart.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-product")) {
    removeItem(event);
  }
});

function removeItem(event) {
  const item = event.target.closest("li");
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}
