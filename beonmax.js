'use strict';



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

//ANCHOR 2.3 простое обращение к пользователю
// alert("hello");
// let answer = confirm('Вы старше 18?'); //спрашивает да или нет
// console.log(answer);
// let answer2 = prompt('Сколько вам лет?', "20"); //Пользователь отвечает
// console.log(answer2);
// console.log(typeof(answer2)); //typeof определяет тип данных,
// //! всегда в prompt определяется тип данных string, за исключением object,
// //! а также существует ошибка, что (typeof(null)) выводится, как object
// console.log(typeof(null)); //object


//ANCHOR 2.4 операторы в JS
// let answer = +prompt('Ваш возраст?', ""); //теперь answer станет number из-за '+', перед prompt
// console.log(typeof(answer)); //number
// console.log('arr - ' + 'object'); //arr - object

let incr = 10,
    decr = 10;
incr++;
decr--;
console.log(incr, decr); //11 9

console.log(--incr, ++decr); //10 10 возвращает уже измененное значение
console.log(incr--, decr++); //10 10 вернуло исходные значение, а после изменило

// console.log('2' == 2); //true
// console.log('2' === 2); //false, т.к разный тип данных


//ANCHOR 2.5 Работа с Git и с сервисом GitHub
//git init - инициирования репозитория
//git config --global user.name "Anton"
//git config --global user.email bur2000_2010@mail.ru
//! Установить глобально(global) для всех будущих проектов, локал(local) для каких то отдельных
//git status файлы за которыми следит git
//git add -A для добавления в git новых файлов
//git add КОНКРЕТНЫЙ файл(main.css)
//git commit -a -m"first commit"   m-это комментарий
//git log для просмотра коммитов(commits)
//git remote add название https://github.com/benbi73tt/НАЗВАНИЕ.git для создания внешнего репозитория(github)
//git push -u Название Ветка ----для пуша в репозиторий