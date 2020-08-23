"use strict";



var leftBorderWidth = 1; //Видна во всем коде, но не выведется до объявления (undefined);
console.log(leftBorderWidth);
let second = 2; //Видна после объяления+экономит память!
const pi = 3.14;

//ANCHOR типы данных, простые типы
let number = 5;
let string = 'string';
let sym = Symbol();
let boolean = true; //логический ДА / НЕТ
null; //Просто не существует
undefined; //неопределенное что то
let obj = {}; //объекты
console.log(4 / 0); //Infinity
console.log('string' * 5); //NaN
// console.log(something); //null, 'something' не существует
let und;
console.log(und); //undefined

let person = {
    name: 'anton',
    age: 20,
    isMarried: false,
};

console.log(person.name);
console.log(person['age']);

let arr = ['plum.png', 'orange.img', 'photo.jpg', 'apple.bpm'];
console.log(arr[2]); //photo.jpg

//?
/**Спец объеты это:
1.Массивы
2.Функции
3.Объеты Даты
4.Регулярные выражения
5.Ошибки */