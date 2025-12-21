fetch("https://6922d0ba09df4a4923236110.mockapi.io/api/product")
  .then((res) => {
    if (res.ok) return res.json();
  })
  .then((tasks) => {
    console.log(tasks);

    const list = document.querySelector("#product_list");

    // Clear old dummy HTML
    list.innerHTML = "";

    // Insert API data
    tasks.forEach((item) => {
      list.innerHTML += `
              <div class="box_item">
                <img src="${item.image}" width="250"height="300">
                <h2>${item.name}</h2>
                <p>${item.des}</p>
              </div>`;
    });
  })
  .catch((err) => console.error("Error fetching:", err));
