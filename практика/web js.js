'use strict'
//!ЗАДАНИЕ 1
// var num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num++;
// num--;
// alert(num);

//!Задание 2
// let arr = ['a', 'b', 'c', 'd'];
// for (let i = 0; i < arr.length; i += 2) {
//     console.log(arr[i] + arr[i + 1]);
// }

//!3
// let a = [2, 5, 3, 9];
// let result = a[0] * a[1] + a[2] * a[3];
// console.log(result);
//!4
// var obj = { a: 1, b: 2, c: 3 };
// console.log(obj['c']);
// console.log(obj.c);
//!5
// var obj = { Коля: '1000', Вася: '500', Петя: '200' };
// console.log(obj.Коля);
// console.log(obj.Петя);
//!6
// let week = {
//     1: 'Monday',
//     2: "Tuesday",
//     3: "Wednesday",
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//     7: 'Sunday',
// };

// let day = prompt('введите цифрой какой сегодня день недели');
// alert("Today is " + week[day]);
//!7
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(arr[1][0]);
//!8
// let obj = {
//     js: ['jQuery', 'Angular'],
//     php: 'hello',
//     css: 'world'
// };
// console.log(obj.js[1]);
//!9
// let arr = {
//     ru: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
//     en: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
// };
// console.log(arr.ru[0], arr.en[3]);
//!10
// let lang = prompt('На каком языке?');
// let day = prompt('введите цифрой какой сегодня день недели');
// if (lang == 'ru') {
//     alert(arr.ru[day])
// } else
//     alert(arr.en[day]);
//!11
// function getRandomFloat(min, max) {
//     return Math.random() * (max - min) + min;
// }
// let a = getRandomFloat(1, 31);
// if (a < 11) {
//     alert("первая декада");
//     console.log(a.toFixed(1));
// } else if (a >= 11 && a <= 21) {
//     alert("вторая декада");
//     console.log(a.toFixed(1));
// } else if (a > 21) {
//     alert("третья декада");
//     console.log(a.toFixed(1));
// }
//!12
// let str = 'dbcdc';
// if (str[0] == 'a')
//     alert('nice');
// else alert('bad');
//!13
// let str = '144324';
// let a = +str[0] + +str[1] + +str[2];
// let b = +str[3] + +str[4] + +str[5];
// console.log(a, b);
// if (a == b)
//     alert('good');
// else
//     alert('bad');
//!While/for
//!14
// let i = 0,
//     sum = 0;
// while (i < 100) {
//     if (i % 2 == 0)
//         console.log(i);
//     sum += i;
//     i++;
// }
// console.log("sum = " + sum);
//!15
// let arr = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     result += arr[i];
// }
// console.log(result);
//!16
// var obj = {
//     green: 'зеленый',
//     red: 'красный',
//     blue: 'голубой'
// };
// for (let color in obj) {
//     console.log(color + ":" + obj[color]);
// }
//!17
// let obj = {
//     Коля: 200,
//     Вася: 500,
//     Петя: 1000,
// };
// for (let name in obj) {
//     console.log(name + " зарплата " + obj[name] + " долларов");
// }
//!18
// let arr = [10, 20, 30, 500, 235, 3000, 7432, 41, 42, 300, 64, 11];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toString()[0] == '1' || arr[i].toString()[0] == '2' || arr[i].toString()[0] == '5') {
//         console.log(arr[i]);
//     }
// }
//ANCHOR
// console.log(arr.filter(num => ['1', '2', '5'].includes(num.toString()[0])));//функция определяющая с какой цифры начинается число
//!19
// let str = ' ';
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//     str += arr[i] + "-";
// }
// console.log(str);
//!20
let out = document.querySelector('.out');

let a = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < a.length; i++) {
    // out.innerHTML = `${a.slice(0, 5)},<strong>${a.slice(5, 7)}</strong>`
    if (i > 4)
        out.innerHTML += a[i].bold();
    else
        out.textContent += a[i];
}