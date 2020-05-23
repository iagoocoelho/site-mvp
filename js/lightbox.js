// Open the Modal 


// GameLab1
function openModalGamelab1() {
  document.getElementById("modal-gamelab1").style.display = "block";

  var ModalSlides = document.querySelectorAll("div#modal-gamelab1 .modal-content > div.slides");
  
  for (var i = 0; i < ModalSlides.length; i++) {
    ModalSlides[i].classList.add('currentModal');
  }
}

// eFEST
function openModalEfest() {
  document.getElementById("modal-efest").style.display = "block";

  var ModalSlides = document.querySelectorAll("div#modal-efest .modal-content > div.slides");
  
  for (var i = 0; i < ModalSlides.length; i++) {
    ModalSlides[i].classList.add('currentModal');
  }
}

// CPUE 2019
function openModalCpue2019() {
  document.getElementById("modal-cpue2019").style.display = "block";

  var ModalSlides = document.querySelectorAll("div#modal-cpue2019 .modal-content > div.slides");
  
  for (var i = 0; i < ModalSlides.length; i++) {
    ModalSlides[i].classList.add('currentModal');
  }
}
  
  // Close the Modal
function closeModal() {
  var modal = document.querySelectorAll("div.modal");
  var modalSlides = document.querySelectorAll("div.modal div.slides");

  for (var i = 0; i < modal.length; i++) {
    modal[i].style.display = "none";
  }

  for (var i = 0; i < modalSlides.length; i++) {

    modalSlides[i].classList.remove("currentModal");
    modalSlides[i].style.display = "none";
  }
}

  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides currentModal");
    // var dots = document.getElementsByClassName("demo");
    // var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className += " active";
    // captionText.innerHTML = dots[slideIndex-1].alt;
  }
