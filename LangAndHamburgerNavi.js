const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    burger.addEventListener('click', () => {
        //Toggle navigation
        nav.classList.toggle('nav-active');
        //Aimate nav links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `fadeNavLinks 0.5s ease forwards ${index / 5 + 0.4}s`;
            }
        });
        //Coss close sign
        burger.classList.toggle('toggle');

    });
}

navSlide();

//lang check

window.onload = function () {

    var en =  document.querySelectorAll('.eng');
    var pl =  document.querySelectorAll('.pl');
    var link = document.getElementById("lan-href");

    if (window.location.href.indexOf("eng") != -1) {
      
              for (let i of en) {
                  i.classList.toggle('visible');
      
                  if (i.classList.contains('visible')) {
                      link.setAttribute('href', "#eng");
                  }
      
                  else {
                      link.setAttribute('href', "#pl");
                  }
              }
      
              for (let j of pl){
                  j.classList.toggle('in-visible');
              }
      

      }

}

//language change

const langChange = () => {
      const Toeng = document.querySelector('.language-contianer');
      var en =  document.querySelectorAll('.eng');
      var pl =  document.querySelectorAll('.pl');
      var link = document.getElementById("lan-href")

    Toeng.addEventListener('click', () => {

        for (let i of en) {
            i.classList.toggle('visible');

            if (i.classList.contains('visible')) {
                link.setAttribute('href', "#eng");
            }

            else {
                link.setAttribute('href', "#pl");
            }
        }

        for (let j of pl){
            j.classList.toggle('in-visible');
        }

    });
}

langChange();