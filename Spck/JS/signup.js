
function togglePassword() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const checkbox = document.getElementById("showPass");

  const type = checkbox.checked ? "text" : "password";
  password.type = type;
  confirmPassword.type = type;
}

function register() {
  const fullName = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();

  if (!fullName || !email || !password || !confirmPassword) {
    alert("Please fill in all boxes");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.some((user) => user.email === email);
  if (exists) {
    alert("Email already registered");
    return;
  }

  users.push({
    fullname: fullName,
    email,
    password,
  });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created successfully");
  window.location.href = "signin.html";
}
