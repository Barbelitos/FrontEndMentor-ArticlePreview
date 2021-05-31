const shareButton = document.querySelector(".author__share");
const authorPicture = document.querySelector(".author__picture");
const authorInfo = document.querySelector(".author__info");
const authorArea = document.querySelector(".card__author");
const shareMenu = document.querySelector(".share__menu");
const shareButtonArrow = document.querySelector(".share__path");

shareButton.addEventListener("click", () => {
  authorPicture.classList.toggle("remove");
  authorInfo.classList.toggle("remove");

  authorArea.classList.toggle("bg__change");
  shareMenu.classList.toggle("share__menu");
  shareMenu.classList.toggle("show__menu");

  shareButton.classList.toggle("button__change");
  shareButtonArrow.classList.toggle("share__fill");
});
