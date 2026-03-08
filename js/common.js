function getCurrentUser() {
  return localStorage.getItem("currentUser");
}

function getUserKey(keyName) {
  let currentUser = getCurrentUser();
  if (!currentUser) return keyName;
  return currentUser + "_" + keyName;
}

function saveUserData(keyName, data) {
  localStorage.setItem(getUserKey(keyName), JSON.stringify(data));
}

function loadUserData(keyName) {
  return JSON.parse(localStorage.getItem(getUserKey(keyName))) || [];
}

function checkLogin() {
  let currentUser = getCurrentUser();
  let currentPage = window.location.pathname.split("/").pop();

  if (!currentUser && currentPage !== "login.html") {
    window.location.href = "login.html";
  }

  if (currentUser && currentPage === "login.html") {
    window.location.href = "index.html";
  }
}

function logoutUser() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

function applySavedTheme() {
  let savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.remove("light-theme", "dark-theme");
  document.body.classList.add(savedTheme + "-theme");
}

function toggleTheme() {
  let isDark = document.body.classList.contains("dark-theme");
  let newTheme = isDark ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  applySavedTheme();
}

checkLogin();
applySavedTheme();
