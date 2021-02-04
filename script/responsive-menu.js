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