let nav_open = document.getElementById("nav-menu");
nav_open.addEventListener("click", () => {
  let style = document.getElementById("nav-list").style.display;
  style === "none"
    ? (document.getElementById("nav-list").style.display = "flex")
    : (document.getElementById("nav-list").style.display = "none");
});

let modal_open = document.getElementById("modalopen");

modal_open.addEventListener("click", () => {
  document.getElementById("modal").style.display = "block";
});

let modal_close = document.getElementById("modalclose");

modal_close.addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});
//------------
let side_open = document.getElementById("sidebar-open");

side_open.addEventListener("click", () => {
  document.getElementById("side-bar").style.display = "flex";
});

let side_close = document.getElementById("sidebar-close");

side_close.addEventListener("click", () => {
  document.getElementById("side-bar").style.display = "none";
});
