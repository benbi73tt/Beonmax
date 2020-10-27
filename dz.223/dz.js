'use strict';

let menu = document.getElementsByClassName('menu')[0],
    menuIt = document.getElementsByClassName('menu-item'),
    menuItLi = document.createElement('li'),
    title = document.getElementById("title"),
    adv = document.querySelector(".adv"),
    pro = document.querySelector(".prompt");

menu.insertBefore(menuIt[2], menuIt[1]);

menuItLi.classList.add('menu-item');
menuItLi.textContent = "Пятый пункт";
menu.appendChild(menuItLi);


document.body.style.backgroundImage = "url(apple_true.jpg)";

title.textContent = "Мы продаем только подлинную технику Apple";

adv.remove();

let a = prompt(`Ваше отношение к продукции Apple`, " ");

pro.textContent = a;