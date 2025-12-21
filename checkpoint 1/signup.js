function togglePassword() {
  const passwordInput = document.getElementById("password");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

function register(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    alert("Please fill in all boxes");
    return;
  }

  if (password !== confirmPassword) {
    alert("Password not match");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const newUser = {
    fullname: `${firstName} ${lastName}`,
    email,
    password,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Created successfully");
  window.location.href = "signin.html";
}

document.querySelector("form").addEventListener("submit", register);
