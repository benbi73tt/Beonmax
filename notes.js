'use strict'
//!1 Числа, которые начинаются на ...
let arr = [10, 20, 30, 500, 235, 3000, 7432, 41, 42, 300, 64, 11];
console.log(arr.filter(num => ['1', '4', '7'].includes(num.toString()[0])));
//! Для записи на страницу
let out = document.querySelector('.out');

let a = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < a.length; i++) {
    out.innerHTML = `${a.slice(0, 5)},<strong>${a.slice(5, 7)}</strong>`
}