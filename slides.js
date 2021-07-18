let slideIndex = 0;
let ul = document.querySelector(".popover .content .dinamic-ul")
let nav = document.querySelector(".AboutMe-des");
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    setTimeout(carousel, 2500);
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  ul.addEventListener("click", () => {
    setTimeout(carousel, 3000);
  })
  // setTimeout(carousel, 500); // Change image every 2 seconds
}
