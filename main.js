const body = document.body;
const loginBox = document.querySelector(".login-box");
const h1 = document.getElementsByTagName("h1")[0];
const inputs = document.querySelectorAll("input");
const loginButton = document.getElementById("login-button");
const h2 = document.getElementsByTagName("h2")[0];

function switchTheme() {
  loginBox.classList.toggle("dark-mode");
  body.classList.toggle("dark-mode");
  h1.classList.toggle("dark-mode");
  inputs.forEach(input => {
    input.classList.toggle("dark-mode");
  });
  loginButton.classList.toggle("dark-mode");
  h2.classList.toggle("dark-mode");
}