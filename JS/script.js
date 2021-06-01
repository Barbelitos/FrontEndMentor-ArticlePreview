const shareButton = document.querySelector(".author__share");
const shareMenu = document.querySelector(".share__menu");
const shareButtonArrow = document.querySelector(".share__path");

shareButton.addEventListener("click", () => {
  shareMenu.classList.toggle("share__menu");
  shareMenu.classList.toggle("show__menu");

  shareButton.classList.toggle("button__change");
  shareButtonArrow.classList.toggle("share__fill");
});
