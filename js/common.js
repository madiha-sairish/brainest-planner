function checkLogin() {
  let currentUser = localStorage.getItem("currentUser");
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

checkLogin();
