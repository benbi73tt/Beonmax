'use strict'
//! Числа, которые начинаются на ...
// let arr = [10, 20, 30, 500, 235, 3000, 7432, 41, 42, 300, 64, 11];
// console.log(arr.filter(num => ['1', '4', '7'].includes(num.toString()[0])));

// //! Для записи на страницу
// let out = document.querySelector('.out');

// let a = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// for (let i = 0; i < a.length; i++) {
//     out.innerHTML = `${a.slice(0, 5)},<strong>${a.slice(5, 7)}</strong>`
// }

//! Округление
// Math.round--округление к ближнему (до 0.499)
// Math.ceil--округление к большему
// Math.floor--округление к меньшему
// toFixed(n)--до n знака после запятой
// toPrecision(n)--общая длина элемента
//Math.min(a,b,c,e)--минимальное число из предложенных
//Math.max(a,v,d,r)--максимальное...
//Math.abs--модуль


//!Найти рандомное число
// console.log(Math.round(Math.random(min, max) * (max - min + 1)) + min);
// Math.round(Math.random() * 100);

//! замена и поиск
// var str = 'aaa bbb ccc';
// alert(str.substr(4, 3)); //substr(откуда отрезать, сколько отрезать)
// alert(str.substring(4, 7)); //substring(откуда отрезать, докуда отрезать)
// alert(str.slice(4, 7)); //slice(откуда отрезать, докуда отрезать)

//! Работа с регистром
// str.toLowerCase()--делает всё в нижнем регистре
// str.toUpperCase()--делает всё в верхнем регистре
// let str = 'Я учу учу Javascript';
// console.log(str.indexOf('учу', 5));//вернет 6, откуда начинается второе 'учу'

//! Repalce
// let str = 'я-учу-javascript';
// str.replace(/-/g, '!'); //глобальная замена '-' на '!'

//! Split
// var str = '2025-12-31';
// var arr = str.split('-');
// var newStr = arr[2] + '/' + arr[1] + '/' + arr[0];
// alert(newStr); //получим строку '31/12/2025'

//! concat Объединение массивов

// var a = ['a', 'b', 'c'];
// var b = [1, 2, 3];
// var c = a.concat(b);

//! push добавить элементы в массив
// a.push(1, 2, 3);

//! reverse развернуть массив
// a.reverse();
//! push - добавить элемнеты в коней
//! unshift - добавить элементы в начало
//! shift/pop - удалить первый/последний элемент или присвоить чему то

//!splice - удаляет элементы массива
// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(1, 3);              //(1,3,'1','k','m')
// console.log(arr);//['a','e']  //['a','e','1','k','m']

//! Массив ключей объекта Object.keys(obj)
// let obj = {
//     a: 123,
//     b: 13,
//     c: 'hi'
// };
// console.log(Object.keys(obj));

//!.style.cursor = ''//для изменения курсора при наведении на объект

//! innerHTML
{ /* <p id="elem">text</p> */ }
// let elem = document.querySelector('#elem');
// console.log(elem.innerHTML);//'text'
// console.log(elem.outerHTML);//'<p id="elem">text</p>'

//! onkeyup - выводится сразу при записи в input
{ /* <input id="test" onkeyup="go(this)"> */ }

//! ДАТА
// getFullYear -- год
// getMonth -- месяц
// getDate -- день
// getday - день недели
//Date.parse('YYYY-MM-DDTHH:mm:ss.sssZ'); --возвращает количество миллисекунд до даты переданной в параметре от 1970г

//! Таймер
let n;
setInterval((timer) => {

}, n); //Функция, которая будет происходить с цикличностью в n миллисекунд
//Остноновка таймера
window.timerId = window.setInterval(timer, 1000);
window.clearInterval(window.timerId);
//Задержка перед запускам(код выполнится только 1 раз)
window.setTimeout((func) => {
    alert('!');
}, 3000);
//setTimeout как таймер(с рукерсией)
function timer() {
    var elem = document.getElementById('test');
    elem.value = parseInt(elem.value) + 1;

    window.setTimeout(timer, 1000); //рекурсия
} //отменить такой таймер можно через if

//! Onload - скрипт запускается сразу при загрузке страницы

//!Фокусировка
//проверка на количество символов в input проверяется тегом data-length='n'
// ?if (this.dataset.length == this.value.length) {//правильное количество==вбитое количество
//     this.style.color = 'green';
// } else {
//     this.style.color = 'red';

//! Classlist - псевдомассив, помогает узнать количество классов, 
//! добавить и удалить классы элемента(атрибут (class) и css классов)
const elem = document.querySelector('#elem');
// добавление элементу класс "foo"
elem.classList.add("ggg");
// удаление класса "bar"
elem.classList.remove("bar");
// переключение класса "foo"
elem.classList.toggle("foo");
// возвращает "true" если у класса есть класс "foo", в противном случае "false"
console.log(elem.classList.contains("ggg"));
// добавление нескольких классов
elem.classList.add("foo", "bar");
console.log(elem.classList); //.length - для количества

//! cssText - для записывания или добавления стилей 
elem.style.cssText += 'color: red; font-size: 20px;';
//! tagName
console.log(elem.tagName.toLowerCase()); //'div'