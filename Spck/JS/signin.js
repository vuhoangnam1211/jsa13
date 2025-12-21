function togglePassword() {
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("showPass");

  passwordInput.type = checkbox.checked ? "text" : "password";
}

function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  console.log("Stored users:", users);
  console.log("Login attempt:", email, password);

  const user = users.find((u) => {
    return u.email.trim().toLowerCase() === email && u.password === password;
  });

  if (user) {
    alert("Welcome back");
    window.location.href = "index.html";
  } else {
    alert("Incorrect email or password.");
  }
}
