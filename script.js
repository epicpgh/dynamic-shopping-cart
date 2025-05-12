
let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let removeItemButton = document.getElementById("removeItemButton");
let cartList = document.getElementById("cart");

let cart = [];
 
addItemButton.addEventListener("click", function () {
  let item = itemInput.value;
 
  if (item === "") {
    alert("Please enter an item.");
    return;
  }
 
  cart.push(item); // Add item to cart array
  renderCart();
  itemInput.value = ""; // Clear the input field
});

const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
li.appendChild(checkbox);
 
removeItemButton.addEventListener("click", function () {
  cart.pop(); // Remove last item from cart array
  renderCart();
});
 
function renderCart() {
  cartList.innerHTML = ""; // Clear existing list
  for (let i = 0; i < cart.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerText = cart[i];
    cartList.appendChild(listItem);
  }
}