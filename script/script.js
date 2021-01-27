const navButton = document.getElementById("navi-toggle");
const navLinks = document.querySelectorAll(".navigation__link");
const popup = document.getElementById("popup");
const popupButton = document.getElementById("popup__button");
const popupContent = document.getElementById("popup__content");
const popupClose = document.getElementById("popup__close");

//Email JS functionality

(function() {
  emailjs.init("user_gR32ps9dmNPqW342JhbUp");
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // Send form information to email JS api.
      emailjs.sendForm('service_2zfeihg', 'template_lhf9757', 'contact-form')
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}

//Navigation
Array.from(navLinks).forEach(link =>
  link.addEventListener("click", () => {
    navButton.checked = false;
  })
);

//Pop up functions
function showPopup(){
    popup.style.opacity = 1;
    popup.style.visibility = "visible";
    popupContent.style.transform = "translate(-50%, -50%) scale(1)";
    popupContent.style.opacity = 1;
}

function closePopup(){
    popup.style.opacity = 0;
    popup.style.visibility = "hidden";
    window.location.hash = "#projects";
}

//Event Listeners
popupButton.addEventListener('click', showPopup);
popupClose.addEventListener('click', closePopup);
popup.addEventListener('click', closePopup);



