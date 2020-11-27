const navButton = document.getElementById("navi-toggle");
const navLinks = document.querySelectorAll(".navigation__link");
const popup = document.getElementById("popup");
const popupButton = document.getElementById("popup__button");
const popupContent = document.getElementById("popup__content");
const popupClose = document.getElementById("popup__close");


Array.from(navLinks).forEach(link =>
  link.addEventListener("click", () => {
    navButton.checked = false;
  })
);

function showPopup(){
    popup.style.opacity = 1;
    popup.style.visibility = "visible";
    popupContent.style.opacity = 1;
    popupContent.style.transform = "translate(-50%, -50%) scale(1)";
}

function closePopup(){
    popup.style.opacity = 0;
    popup.style.visibility = "hidden";
}

popupButton.addEventListener('click', showPopup);
popupClose.addEventListener('click', closePopup);
popup.addEventListener('click', closePopup);



