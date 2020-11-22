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
        request.open('POST', 'server.php‪'); //для отправки на сервер
        request.setRequestHeader('Content-Type',
            'application/x-www-form-urlencoded'); //???????????????????СЕРВЕР


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

});