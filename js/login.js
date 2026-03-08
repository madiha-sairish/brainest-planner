function signupUser() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = document.getElementById("loginMessage");

  if (username === "" || password === "") {
    message.textContent = "Please enter both username and password.";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let existingUser = users.find(user => user.username === username);

  if (existingUser) {
    message.textContent = "Username already exists.";
    return;
  }

  users.push({
    username: username,
    password: password
  });

  localStorage.setItem("users", JSON.stringify(users));
  message.textContent = "Account created successfully. Now login.";
}

function loginUser() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = document.getElementById("loginMessage");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let validUser = users.find(user => user.username === username && user.password === password);

  if (!validUser) {
    message.textContent = "Invalid username or password.";
    return;
  }

  localStorage.setItem("currentUser", username);
  window.location.href = "index.html";
}
