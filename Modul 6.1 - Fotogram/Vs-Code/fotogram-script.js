
function openDialog(dialogId) {
  document.getElementById(dialogId).classList.add("sichtbar");
  document.getElementById("body-overlay").classList.add("sichtbar");
} 

function closeDialog(dialogId) {
  document.getElementById(dialogId).classList.remove("sichtbar");
  document.getElementById("body-overlay").classList.remove("sichtbar");
}




let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  let i;

  let slides = document.getElementsByClassName("mySlides");


  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
}




// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


