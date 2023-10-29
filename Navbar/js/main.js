const navToggle = document.querySelector(".hamburger");
const links = document.querySelector("#navbar");

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-menu");
});
