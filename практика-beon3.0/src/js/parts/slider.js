function slider() {
    let slideIndex = 1, //парамаетр текущего слайда
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) { //n-переключатель слайдов

        if (n > slides.length) { //при клике на последнем слайде 'далее' возвращает на первый слайд
            slideIndex = 1;
        }
        if (n < 1) { //и наоборот
            slideIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = 'none');
        //? Одно и тоже
        // for(let i=0;i<slides.length;i++){
        //     slides[i].style.display='none';
        // }

        dots.forEach((item) => item.classList.remove('dot-active')); //удаляет класс dot-active

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) { //перелистывание слайдрв
        showSlides(slideIndex += n);
    }

    function currentSlides(n) {
        showSlides(slideIndex = n);
    }
    prev.addEventListener('click', () => plusSlides(-1));
    next.addEventListener('click', () => plusSlides(1));


    //клик по кнопкам для быстрого перехода на нужный слайд
    dotsWrap.addEventListener('click', (event) => {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) { //проверить есть ли у элемента класс dot
                currentSlides(i);
            }
        }
    });
}

module.exports = slider;