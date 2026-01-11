function updateNav() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const username = localStorage.getItem("username");

  const nav = document.querySelector("nav");

  if (isLoggedIn && username) {
    nav.innerHTML = `
      <a href="index.html">Home</a>
      <a href="cart.html">Cart</a>
      <a href="signin.html">Sign Out</a>
    `;

    document.getElementById("signout-btn").addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");
      window.location.href = "signin.html";
    });
  } else {
    nav.innerHTML = `
      <a href="index.html">Home</a>
      <a href="signin.html">Sign In</a>
      <a href="signup.html">Sign Up</a>
    `;
  }
}

updateNav();
