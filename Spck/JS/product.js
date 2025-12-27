const params = new URLSearchParams(window.location.search);
const id = params.get("id");

let currentProduct = null;

fetch(`https://6922d0ba09df4a4923236110.mockapi.io/api/product/${id}`)
  .then((res) => res.json())
  .then((product) => {
    currentProduct = product;

    document.getElementById("product-img").src = product.img;
    document.getElementById("product-img").alt = product.name;
    document.getElementById("product-name").textContent = product.long_name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-desc").textContent = product.long_des;
  })
  .catch((err) => console.error("Error loading product:", err));

document.getElementById("add-to-cart").addEventListener("click", () => {
  if (!currentProduct) {
    alert("Product not loaded yet!");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const priceString = currentProduct.price.replace(/[^\d]/g, "");
  const priceNumber = parseInt(priceString);

  const existingIndex = cart.findIndex((item) => item.id === currentProduct.id);

  if (existingIndex !== -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      id: currentProduct.id,
      name: currentProduct.long_name || currentProduct.name,
      image: currentProduct.img,
      price: priceNumber,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  const btn = document.getElementById("add-to-cart");
  const originalText = btn.textContent;
  btn.textContent = "✓ Added to Cart!";
  btn.style.backgroundColor = "#28a745";

  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.backgroundColor = "";
  }, 1000);
});
