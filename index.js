
const menuBtn = document.getElementById("menu-btn");
const menuId = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menuId.classList.toggle("active");
});