let btn = document.getElementById("menu");
let btn2 = document.getElementById("close");
let slide = document.getElementById("optionmenu");

btn.addEventListener("click", function () {
  slide.style.transform = "translate(0.1px)";
});
btn2.addEventListener("click", function () {
  slide.style.transform = "translate(-700px)";
});
