const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://6922d0ba09df4a4923236110.mockapi.io/api/product/${id}`)
  .then((res) => res.json())
  .then((product) => {
    document.getElementById("product-img").src = product.img;
    document.getElementById("product-img").alt = product.name;
    document.getElementById("product-name").textContent = product.long_name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-desc").textContent = product.long_des;
  })
  .catch((err) => console.error("Error loading product:", err));
