// preload animation

window.addEventListener('load', () => {
  const preload = document.querySelector('.preload');
  preload.classList.add('preload-finish');
  document.querySelector('.imgbox').style.animation = 'hello 2s ease-out';
});

// Button Glow animation

document.getElementById("btn1").addEventListener("mouseover", mouseOverbtn1);
document.getElementById("btn1").addEventListener("mouseout", mouseOutbtn1);

document.getElementById("btn2").addEventListener("mouseover", mouseOverbtn2);
document.getElementById("btn2").addEventListener("mouseout", mouseOutbtn2);

function mouseOverbtn1() {
    document.getElementById("btn1").classList.add("glow");
  }
  
  function mouseOutbtn1() {
    document.getElementById("btn1").classList.remove("glow");
  }

  function mouseOverbtn2() {
    document.getElementById("btn2").classList.add("glow");
    
  }

  function mouseOutbtn2() {
    document.getElementById("btn2").classList.remove("glow");    
  }

  // about me slide in

  function bookAnimation() {
    document.getElementById("book-box").classList.add("bookSlide");
    document.getElementById("selfie-book").style.opacity = 0;
    document.getElementById("selfie-book").classList.add("selfie-fade-in-book");
  }

  function reset_animation() {
    let skills = document.querySelectorAll(".progress-value");
    for (let i of skills) {
    i.style.animation = 'none';
    i.offsetHeight; /* trigger reflow */
    i.style.animation = null;
    }
  }



  