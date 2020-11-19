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
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval); //останавливает таймер!
            }
        }
    }

    setClock('timer', deadline);




});