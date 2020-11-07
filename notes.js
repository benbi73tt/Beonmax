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

var a = ['a', 'b', 'c'];
var b = [1, 2, 3];

//Вариант 1:
var c = a.concat(b);

//! push добавить элементы в массив
a.push(1, 2, 3);

//! reverse развернуть массив
a.reverse();
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