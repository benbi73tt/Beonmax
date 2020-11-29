window.addEventListener('DOMContentLoaded', function() { //событие срабатывает, когда полностью прогрузился DOM дерево;
    'use strict';

    const tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) { //УБИРАЕТ все Табы
        for (let i = a; i < tab.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1); //Оставляет первый Таб открытым

    function showTabContent(b) { //Добавляет выбранный Таб
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', event => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) { //Если кликнутый нами Taб вообще принадлежит к нашему классу
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) { //Ищем Номер Таба, который мы кликнули
                    hideTabContent(0); //все табы прячем
                    showTabContent(i); //показываем кликнутый нами Таб
                    break;
                }
            }
        }
    });
    //!timer

    let deadline = '2020-11-30';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            // hours = Math.floor(t / (1000 * 60 * 60));
            hours = Math.floor(t / (1000 * 60 * 60) % 24),
            days = Math.floor(t / (1000 * 60 * 60 * 24));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }

    function setClock(id, endtime) { //сздает элементы, берет со страницы
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(upDateClock, 1000);

        function upDateClock() { //функция вызывается каждую секунду для правильно отображения времени
            let t = getTimeRemaining(endtime); //разница между временем
            days.textContent = t.days;

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval); //останавливает таймер!
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);


    //!modal - Модальное окно

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');


    //style css
    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        //запрещает прокручить страницу при открытом модальном окне
        document.body.style.overflow = 'hidden';
    });

    //Закрыть модальное окно
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });


    //!Функция вызова модального окна в табах
    let BtnDescription = document.querySelectorAll('.description-btn');
    for (let i = 0; i < BtnDescription.length; i++) {
        BtnDescription[i].addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    }


    //Form 

    let message = {
        loading: "Загрузка",
        success: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status'); //css style

    form.addEventListener('submit', function(event) {
        event.preventDefault(); //отменить стандартное поведение браузера
        //(чтобы страница не перезагружалась)
        form.appendChild(statusMessage);


        let request = new XMLHttpRequest();
        request.open('POST', 'server.php'); //для отправки на сервер
        request.setRequestHeader('Content-type',
            'application/json; charset=utf-8'); //???????????????????СЕРВЕР


        let formData = new FormData(form);


        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json); //send - открывает запрос(отправляет на сервер)

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });

    //!SLIDER

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

    //!Cacl

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.querySelector('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons = addEventListener('change', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == '') { //если второй инпут не заполнен,результат должен быть равен 0
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });
    restDays = addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (persons.value == '') { //если первый инпут не заполнен,результат должен быть равен 0
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });


});