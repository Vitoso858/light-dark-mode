let body = document.getElementById("corpo");
let btn = document.getElementsByTagName("button")[0];
let footer = document.getElementsByTagName("footer")[0];
let p = document.getElementById("pdark");

function darkMode() {
  body.classList.toggle("dark-mode");
  btn.classList.toggle("btn-dark");
  btn.classList.toggle("txt-dark");
  footer.classList.toggle("footer-dark");
  p.classList.toggle("p-dark");
}
