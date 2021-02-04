var slideIndex = 1;
var slideClass = "";
var dotClass = "";
//showSlides(slideIndex);

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
  var slides = document.getElementsByClassName(slideClass);
  var dots = document.getElementsByClassName(dotClass);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}

//showSlides(slideIndex);



function to_warxuaroz () {

slideClass = "slidesWarxuaroz";
dotClass = "dot-warx";
slideIndex = 1;
showSlides(slideIndex);

document.getElementById("portfolio-picker").style.display = "none";
document.getElementById("slide-container").style.display = "flex";
document.getElementById("slide-container").style.justifyContent = "center";

// var slides = document.getElementsByClassName(slideClass);
// slides[1].style.display = "flex";

document.getElementById("portfolio-introduction").style.display = "none";
document.getElementById("warx-desc").style.display = "flex";
document.getElementById("warx-desc").style.flexDirection = "column";

document.getElementById("return").animate([
  // keyframes
  { transform: 'rotate(-360deg)' }
], {
  // timing options
  duration: 500
});

}

function to_wyjec () {

  slideClass = "slidesWyjec";
  dotClass = "dot-wyjec";
  slideIndex = 1;
  showSlides(slideIndex);

  document.getElementById("portfolio-picker").style.display = "none";
  document.getElementById("slide-container2").style.display = "flex";

  // var slides = document.getElementsByClassName(slideClass);
  // slides[slideIndex-1].style.display = "flex";
  
  document.getElementById("portfolio-introduction").style.display = "none";
  document.getElementById("wyjec-desc").style.display = "flex";
  document.getElementById("wyjec-desc").style.flexDirection = "column";

  document.getElementById("return").animate([
    // keyframes
    { transform: 'rotate(-360deg)' }
  ], {
    // timing options
    duration: 500
  });
  
  }

  function to_websites () {

    slideClass = "slidesWebsites";
    dotClass = "dot-margo";
    slideIndex = 1;
    showSlides(slideIndex);

    document.getElementById("portfolio-picker").style.display = "none";
    document.getElementById("slide-container3").style.display = "flex";

    // var slides = document.getElementsByClassName(slideClass);
    // slides[slideIndex-1].style.display = "flex";
    
    document.getElementById("portfolio-introduction").style.display = "none";
    document.getElementById("websites-desc").style.display = "flex";
    document.getElementById("websites-desc").style.flexDirection = "column";

    document.getElementById("return").animate([
      // keyframes
      { transform: 'rotate(-360deg)' }
    ], {
      // timing options
      duration: 500
    });
    
    }

  function to_portfolio_picker () {
    
    document.getElementById("portfolio-picker").style.display = "flex";
    document.getElementById("slide-container").style.display = "none";
    document.getElementById("slide-container2").style.display = "none";
    document.getElementById("slide-container3").style.display = "none";
    
    document.getElementById("portfolio-introduction").style.display = "block";
    document.getElementById("warx-desc").style.display = "none";
    document.getElementById("wyjec-desc").style.display = "none";
    document.getElementById("websites-desc").style.display = "none";

    slideIndex = 1;
  }