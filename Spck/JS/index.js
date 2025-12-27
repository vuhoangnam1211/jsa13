let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (slides.length === 0) return;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

setInterval(() => {
  plusSlides(1);
}, 4000);

fetch("https://6922d0ba09df4a4923236110.mockapi.io/api/product")
  .then((res) => res.json())
  .then((products) => {
    const container = document.querySelector(".products");
    container.innerHTML = "";

    const grouped = products.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});

    Object.keys(grouped).forEach((category) => {
      const section = document.createElement("section");

      section.innerHTML = `
        <h2>${category}</h2>
        <div class="product-grid"></div>
      `;

      const grid = section.querySelector(".product-grid");

      grouped[category].forEach((item) => {
        grid.innerHTML += `
          <div class="product">
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <p>${item.short_des}</p>
            <button class="view-btn" data-id="${item.id}">
              View Details
            </button>
          </div>
        `;
      });

      container.appendChild(section);
    });
  })
  .catch((err) => console.error("Error fetching:", err));

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-btn")) {
    const id = e.target.dataset.id;
    window.location.href = `product.html?id=${id}`;
  }
});

function handleEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchProduct();
  }
}

function searchProduct() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const products = document.querySelectorAll(".product");
  let found = false;

  products.forEach((product) => {
    const title = product.querySelector("h3").innerText.toLowerCase();
    product.classList.remove("highlight");

    if (!found && title.includes(input) && input !== "") {
      found = true;
      product.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      product.classList.add("highlight");
      product.addEventListener("mouseenter", removeHighlightOnce);
    }
  });
}

function removeHighlightOnce(e) {
  e.currentTarget.classList.remove("highlight");
  e.currentTarget.removeEventListener("mouseenter", removeHighlightOnce);
}
