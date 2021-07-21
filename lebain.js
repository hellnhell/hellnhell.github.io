let title = document.querySelector(".gallery__item--1");
let content = document.querySelector(".gallery__item--2");

title.addEventListener("click", () => {
    title.style.color = "blue";
    content.style.visibility = "visible";
})
