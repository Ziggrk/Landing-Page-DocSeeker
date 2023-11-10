const start = () => {
    const menu = document.querySelector(".menu");
    const menu__links = document.querySelector(".menuLinks");

    // SELECTING menu items
    const links__menu = document.querySelectorAll(".menuItem");

    links__menu.forEach(link => link.addEventListener("click", (e) => {
        menu__links.classList.toggle("hamburgerActive");
    }));

    menu.addEventListener("click", (e) => {
        menu__links.classList.toggle("hamburgerActive");
    });

    // Slider functionality
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let counter = 1;
    const size = slides[0].clientWidth;

    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

    nextBtn.addEventListener('click', () => {
        if (counter >= slides.length - 1) return;
        slider.style.transition = 'transform 0.5s ease-in-out';
        counter++;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        slider.style.transition = 'transform 0.5s ease-in-out';
        counter--;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    slider.addEventListener('transitionend', () => {
        if (slides[counter].id === 'last-clone') {
            slider.style.transition = 'none';
            counter = slides.length - 2;
            slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if (slides[counter].id === 'first-clone') {
            slider.style.transition = 'none';
            counter = slides.length - counter;
            slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });
};

window.onload = () => start();