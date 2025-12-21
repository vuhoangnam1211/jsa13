// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }
// setInterval(() => {
//   plusSlides(1);
// }, 4000);

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
      section.classList.add("products");

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
            <button class="view-btn">View Details</button>
          </div>
        `;
      });

      container.appendChild(section);
    });
  })
  .catch((err) => console.error("Error fetching:", err));
