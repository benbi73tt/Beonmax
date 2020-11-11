'use strict'
//!http://old.code.mu/tasks/javascript/
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
//!18 Вывести только числа начинающиеся с определенного
// let arr = [10, 20, 30, 500, 235, 3000, 7432, 41, 42, 300, 64, 11];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toString()[0] == '1' || arr[i].toString()[0] == '2' || arr[i].toString()[0] == '5') {
//         console.log(arr[i]);
//     }
// }
//ANCHOR
// console.log(arr.filter(num => ['1', '2', '5'].includes(num.toString()[0])));//функция определяющая с какой цифры начинается число
//!19 Вывести числа через '-'
// let str = ' ';
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//     str += arr[i] + "-";
// }
// console.log(str);
//!20 Выходные дни выделить жирным
// let out = document.querySelector('.out');

// let a = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// for (let i = 0; i < a.length; i++) {
//     // out.innerHTML = `${a.slice(0, 5)},<strong>${a.slice(5, 7)}</strong>`
//     if (i > 4)
//         out.innerHTML += a[i].bold() + " ";
//     else
//         out.textContent += a[i] + " ";
// }
//!21 Выделить сегодняшний день курсивом
// let out = document.querySelector('.out');

// let a = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];


// let day = prompt("Какой сегодня день?");

// for (let i = 0; i < a.length; i++) {
//     if (a[i] == day)
//         out.innerHTML += a[i].italics() + " ";
//     else out.innerHTML += a[i] + " ";
// }

//!21
// let n = 1000,
//     num;
// for (let i = 0; n > 50; i++) {
//     n /= 2;
//     num = n;
// }
// console.log(num);

//!22 Математические функции

// let a = 99,
//     b = 99;
// let result = Math.pow(a, b);
// let result1 = a ** b;
// console.log(result);
// console.log(result1);
// console.log(Math.sqrt(245));

//!23
// let sum = 0,
//     sum2 = 0,
//     count = 0;
// let arr = [4, 2, 5, 19, 13, 0, 10];
// for (let i = 0; i < arr.length; i++) {
//     sum += Math.pow(arr[i], 3);
//     console.log(sum);
// }
// console.log(Math.sqrt(sum));
// console.log(Math.sqrt(379).toFixed(3));
// console.log(Math.max(91, 35, 43, 23, 12, 53, 134, 112, 43, 99));
// console.log(Math.min(91, 35, 43, 23, 12, 53, 134, 112, 43, 99));
// let min = 0,
//     max = 500;
// console.log(Math.round(Math.random(min, max) * (max - min + 1)) + min);

// let a = 17,
//     b = 52,
//     c = 0;
// c = a - b;
// console.log(Math.abs(c));

// for (let i = 0; i < arr.length; i++) {
//     sum2 += arr[i];
// }
// console.log(sum2 / arr.length);

//!24 
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr[i] = Math.round(Math.random() * 100);
//     console.log(arr[i]);
// }

//!25 Найти факториал числа
// let fact = 1;
// let a = +prompt('Введите число');
// let count = a;
// for (let i = 1; i < a; i++) {
//     fact *= count--;
//     console.log('fact: ' + fact + ' count: ' + count);
// }

// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }
// alert(factorial(a));

//!26 Работа с регистром
// let str = "javascript";
// alert(str.toUpperCase());
// alert(str.toLowerCase());

//!27 Количество символов + вырежьте
// let str = 'я учу javascript!';
// console.log(str.length); //17
// console.log(str.substr(2, 3));
// console.log(str.substring(6, 16));
// console.log(str.slice(5, -7));

// let result;
// if (str.length > 10) {
//     result = str.slice(0, 10) + "...";
//     console.log(result);
// }
//!28 replace, split
// let str = 'я-учу-javascript';
// console.log(str.replace(/-/g, '!')); //глобальная замена '-' на '!'
// let arr = str.split("-");
// console.log(arr);
// let arr1 = str.split("");
// console.log(arr1);
// //
// let data = '2025-12-31';
// data = data.split('-');
// let newdata = data[2] + '.' + data[1] + '.' + data[0];
// console.log(newdata);
// //
// console.log(arr.join('+'))

//!29 каждый элемент массива с большой буквы
// let str = 'hello my friend';
// console.log(str[0].toUpperCase() + str.slice(1, 6) + str[6].toUpperCase() + str.slice(7, 9) + str[9].toUpperCase() + str.slice(10));
// //
// let st = 'var_new_dsa_dsa_fs_fgr';
// st = st.split('_');
// console.log(st);
// for (let i = 0; i < st.length; i++) {
//     let res = st[i];
//     res = res[0].toUpperCase() + res.slice(1);
//     st[i] = res;
//     console.log(st[i]);
// }
// let a = st.join('');
// console.log(a);

//!30 Объдинить массивы
// let a = ['1', '2', '3'];
// let b = ['6', '5', '4'];
// let c = b.concat(a);
// console.log(c);
// c.reverse();
// console.log(c); //3 2 1 4 5 6

// a.push(1, 2, 3);
// b.unshift(9, 8, 7);
// console.log(a, b);

// let arr = ['js', 'css', 'jq'];
// let first = arr.shift();
// console.log(first);
// let last = arr.pop();
// console.log(last);

// let d = c.slice(0, 3);
// console.log(d);
// c.splice(1, 4);
// console.log(c);

// let arr1 = [1, 2, 3, 4, 5];
// arr1.splice(3, 4, 'a', 'b', 'c'); //удаляет + добавляет
// console.log(arr1);

// let arr2 = [4, 2, 5, 1, 3, 7];
// arr2.sort();
// console.log(arr2); //?сортируется по первой цифре 1=13=154; 2=233=24

// let obj = {
//     a: 123,
//     b: 13,
//     c: 'hi'
// };
// console.log(Object.keys(obj)); //массив ключей объекта

//!31
// let str = 'hello my friend';
// str = str[0].toUpperCase() + str.slice(1);
// console.log(str);

// let str1 = '123456';
// // str1 = str1.split('');
// // str1 = str1.reverse();
// // str1 = str1.join("");
// let result = str1.split('').reverse().join('');
// console.log(result);
// //
// let str2 = 'http://vk.com.html';
// if (str2.slice(0, 7) == 'http://') {
//     alert('true');
// }
// if (str2.slice(-5) == '.html') {
//     alert('true1');
// }
// console.log(str2.slice(-5));

//!32 
// function cube($num) {
//     return $num * $num;
// }
// let a = 10;
// let b = cube(a);
// console.log(b);

//!33
// let arr = [1, 24, 2, 25, 23, 6, 4, 27, 5, 4, 87];

// function search() {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 7) {
//             return true;
//         }
//         console.log(arr[i]);
//     }
//     return false;
// }
// alert(search());

//!34
// function comparison($a, $b) {
//     if ($a == $b || $a + $b > 10 || $a < 0 || $b < 0) {
//         return true;
//     }
//     return false;
// }
// alert(comparison(1, 5));

//!35 Пирамида (1,22,333);
// for (let i = 1; i < 10; i++) {
//     let x = '';
//     for (let j = 1; j < i + 1; j++) {
//         x += i;
//     }
//     console.log(x);
// }

//!36 Заполнение массива
// function arrayFill(value, len) {
//     let a = [];
//     for (let i = 0; i < len; i++) {
//         a.push(value); //a[i]=value;
//     }
//     return a;
// }
// console.log(arrayFill('ф', 4));

//!37 Рекурсия
// let arr = [1, 2, 4, 32, 4, 3, 5, 5, 8, 3, 2, 55, 4, 78, 9, 0, 4, ];

// function InSeries(a) {
//     console.log(a[0]);
//     a.splice(0, 1);
//     return (0 < a.length) ? InSeries(a) : 1;
// }
// InSeries(arr);

//!38 Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
// let a = prompt('введите число');

// function summa(a) {
//     let arr = a.split('');
//     let sum = 0;
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         sum += +arr[i];
//         console.log(sum);
//     }
//     sum = sum.toString();
//     console.log(sum);
//     return (+sum > 10) ? summa(sum) : sum;
// }
// summa(a);

//!39
// let text1 = document.getElementById('text1');
// let text = document.getElementById('text');
// let but = document.getElementById('but');
// let but1 = document.getElementById('but1');

// function inp() { //возводит в квадрат число
//     let number = text.value;
//     alert(number * number);
// }

// function swap() { //меняет содержимое input
//     //+Отблокировка input
//     let buf = text.value;
//     text.value = text1.value;
//     text1.value = buf;
//     text1.disabled = false;
//     text.disabled = false;
// }

// function changeBut(but) { //меняет надпись button //?changeBut(this) прописываем THIS
//     but.innerHTML = 'Новый текст';
// }

// function ChangeColor() { //+Блокировка input
//     // document.getElementById('text1').style.color = 'black';
//     text.style.color = 'black';
//     text1.style.color = "green";
//     text1.disabled = true;
//     text.disabled = true;
// }
//!40
// let but = document.querySelector('.but');
// let text1 = document.querySelector('.text1');
// let text2 = document.querySelector('.text2');

// function box() {
//     let number = text1.value;
//     text2.value = number * number;
// }

// function cursor() {
//     but.disabled = true;
//     but.style.cursor = 'not-allowed';
// }

//!41 innerHTML outherHTML
// let but = document.querySelector('but');
// let font = document.querySelector('.font');
// let text1 = document.querySelector('.text1');
// let text2 = document.querySelector('.text2');

// function ChangeTitle() {
// font.innerHTML = 'Ку-ку! А я <b>Жирный</b>';
// font.outerHTML = '<p><b>' + font.innerHTML + '</b></p>';
// font.innerHTML = +text1.value + +text2.value;
// }

// function go(elem) { //?Сразу отображается в font
//     font.innerHTML = elem.value;
// }

// let date = new Date();
// alert(date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear());

//! 42 Date
// //сколько прошло минут с 1.1.1970
// let date = new Date();
// let result = Math.round(date.getTime() / (1000 * 60));
// alert(result);
// //сколько прошло часов с 1 марта 1988
// let date1 = Date.parse('1988-03-01T00:00:00');
// let now = date.getTime();

// result = Math.round((now - date1) / (1000 * 60 * 60));
// alert(result);
// //от начала дня до конца дня по фиксированной дате
// let data = Date.parse('2020-11-08T00:00:00');
// let data2 = Date.parse('2020-11-08T16:00:00');
// console.log(data);
// let result = (data2 - data) / (1000 * 60 * 60);
// alert(result);
// //от начала до конца сегодняшнего дня
// let date = new Date();
// let now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
// let result = Math.round((date.getTime() - now.getTime()) / (1000 * 60));
// alert(result);

//! 43 создайте таймер
// let but = document.querySelector('.but1');

// function start() {
//     window.timerId = window.setInterval((timer) => {
//         let text = document.querySelector('.font');
//         text.value = +(text.value) + 1;
//     }, 1000);
//     but.disabled = true;
//     but.style.cursor = 'not-allowed';
// }

// function stop() {
//     window.clearInterval(window.timerId);
//     but.disabled = false;
//     but.style.cursor = "default";
// }
//! 44 Часы

function addTime(num) {
    if (num < 10) { return ('0' + num); } else {
        return num;
    }
}

function start() {
    window.timerId = window.setInterval((timer) => {
        let clock = document.querySelector('.clock');
        let date = new Date();
        clock.innerHTML = addTime(date.getHours()) + ":" + addTime(date.getMinutes()) + ":" + addTime(date.getSeconds());
    }, 500);
}

//! 45 ссылки
// let elems = document.getElementsByTagName('a');
// for (let i = 0; i < elems.length; i++) {
//     elems[i].addEventListener('mouseover', mouseOver); //function() {
//     //     this.innerHTML = this.innerHTML + '(' + this.href + ')';
//     //});
// }

// function mouseOver() {
//     this.innerHTML = this.innerHTML + '(' + this.href + ')';
//     this.removeEventListener('mouseover', mouseOver);
// }

//!46 фокусировка blur
let inp = document.querySelectorAll('input');
let test = document.querySelector('#test');
for (let i = 0; i < inp.length; i++) {
    inp[i].addEventListener('blur', function() {
        test.innerHTML = this.value;
        // var correctLength = this.dataset.length; //правильное количество
        // var inputDataLength = this.value.length; //вбитое в инпут количество
        // if (correctLength == inputDataLength) {
        if (this.dataset.length == this.value.length) {
            this.style.color = 'green';
        } else {
            this.style.color = 'red';
        }
    });
}


//!47 Смена цветов div
let div = document.querySelectorAll('.col1');

for (let i = 0; i < div.length; i++) {
    div[i].addEventListener('click', function setRed() { //setRed);
        //?
        this.style.background = "red";
        this.removeEventListener('click', setRed);
        this.addEventListener('click', function setGreen() {
            this.style.background = "green";
            this.removeEventListener('click', setGreen);
            this.addEventListener('click', setRed);
        });
    });
}

// function setRed() {
//     this.style.background = "red";
//     this.removeEventListener('click', setRed);
//     this.addEventListener('click', setGreen);
// }

// function setGreen() {
//     this.style.background = "green";
//     this.removeEventListener('click', setGreen);
//     this.addEventListener('click', setRed);
// }


//!48 Работа с классами ( classList, cssText, tagName)

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

console.log(elem.classList.length);

//

elem.style.cssText = 'color:red; font-size:30px; border: 5px solid #74fbef; width:100px;text-align:center; ';

console.log(elem.tagName.toLowerCase());

//!49 Вставка элементов OL и UL (appendChild, createChild)