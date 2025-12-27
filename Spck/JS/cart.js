const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const emptyText = document.getElementById("empty-text");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function formatVND(amount) {
  return amount.toLocaleString("vi-VN") + " ₫";
}

function renderCart() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    emptyText.style.display = "block";
    cartTotal.innerText = formatVND(0);
    return;
  }

  emptyText.style.display = "none";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img src="${item.image}">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatVND(item.price)}</div>
      </div>
      <div class="cart-item-controls">
        <input 
          type="number" 
          class="quantity-input" 
          value="${item.quantity}" 
          min="1" 
          data-index="${index}"
        />
        <button class="remove-btn" onclick="removeItem(${index})">×</button>
      </div>
    `;

    cartItemsContainer.appendChild(div);
  });

  document.querySelectorAll(".quantity-input").forEach((input) => {
    input.addEventListener("change", (e) => {
      const index = parseInt(e.target.dataset.index);
      const newQuantity = parseInt(e.target.value);

      if (newQuantity > 0) {
        cart[index].quantity = newQuantity;
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      } else {
        e.target.value = cart[index].quantity;
      }
    });
  });

  cartTotal.innerText = formatVND(total);
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
