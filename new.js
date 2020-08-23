"use strict"
// alert('hi, bro');
// let message;
// message = 'Hello';
// alert(message);
// let admin, name;
// name = "Джон";
// admin = name;
// alert(admin);

// ANCHOR Infinity - значение, которое больше любого числа
// NAN - означает вычислительную ошибку
// const bigInt = 1232412434242353451235234523523541232n;
// добавляем n в конец, чтобы можо было записать число любой длины.
// ANCHOR `` - в ОБРАТНЫЕ КОВЫЧКИ можно добавлять переменные с помощью $ {
//     name
// }, где name = Иван.
// alert(`Результат: ${1+2}`);
// TODO
// let check = 4 > 1; //(boolean)Булевая функция, которая вернет только ДА или НЕТ(trur,false).
// TODO alert(check); //ПРОВЕРКА
// null - означает пусто, ничего или значение неизвестно
// TODO
// let x; //при вызове Х будет выдано UNDEFINED
// ANCHOR number для любых чисел от + (-) 2 ^ 53
// symbol - для уникальных индефикаторов
// object - для более сложных структур данных(Math - представялет мат.операции)
// typeof x / typeof (x) позволяет увидеть какой тип сохраенен в переменной(object, symbol, string, boolean и тд)
// в итоге существует 8 основных типов


// TODO Преобразование типов 01.08 .2020 Урок 10!
//     let str = "123";
// alert(typeof str); //string
// let num = Number(str); //становится 123
// alert(typeof num); //number
// let age = Number("Любая строка");
// alert(age); //NaN, преобразование не удалось
// alert('1' + 2) // 12 Если ожин из аргументов ялвяется строкой, тогда троки объединяются.

// STUB
// "" - 1 + 0 == -1
// true + false = 1
// 4 + 5 + 'px' = 9 px '$' + 4 + 5 = $45
// 2
// 4 px - 2 = NaN '-9 ' + 5 = '-9 5'
// '-9 ' = 5 = -14 //при вычитании пробелы обрезаются
// undefined + 1 = NaN
// let apple = '2';
// let orange = '3';

// alert(+apple + +orange); //5, иначе (без +) бдует 23
// alert(Number(apple) + Number(orange)); // тоже самое, что и выше

// REVIEW ** -возведение в степень
// let a = 2;
// let b = 3;
// alert(a ** b) // =8(2*2*2);
// alert(4 ** (1 / 2)); //степеь 1/2= взятию корня
// REVIEW ПРЕФИКСЫ и ПОСТФИКСЫ
// let couner = 1;
// let a = ++counter;
// alert(a); // вывод 2

// let a = counter++;
// alert(a); //вывод 2
// Если нужно получить значение до увеличения, тогда используем постфиксную форму, если нужно вывести увеличенное значение, то префиксную

// let counter = 1;
// alert(2 * ++counter); //4
// alert(2 * counter++); //2
// ANCHOR операторы сравнения
//     ===
//     проверяет равенство без приведенных типоы, т.е
// 0 == false // true
// 0 === false // false,т.к сравниваются разные типы
// TODO PROMPT
// показывает сообщение и запрашивает ввод текста от пользователя
// let age = prompt('Твой вораст?', 20); //лучше всегда указывать, хотя бы ' ';
// STUB alert(`Тебе ${age} лет`);
// TODO CONFIRM
// показывает сообщение и ждет пока пользователь нажмёт ОК или ОТМЕНА(ESC), возвращает True or False.
// STUB
// let Old = confirm("Ты старше 18 лет?");
// alert(Old);
// REVIEW
// let name = prompt("Ваше имя?", '');
// alert(name);

// REVIEW
// let year = prompt("Ваш год поступления?", '');
// let message = (year < 2000) ? 'Вы еще не забыли, что учили?' :
//     (year > 2010) ? 'Вы совсем новичок' : 'Мы будем вам рады';
// alert(message);

// REVIEW
// let name = prompt("Официальное название JS", " ");
// if (name == 'ECMAscript') {
//     alert("Nice!")
// } else {
//     alert("false");
// }

// REVIEW
// let login = prompt("login", " ");
// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Здравствуйте' :
//     (login == ' ') ? 'Нет логина' : '';
// alert(message);

// REVIEW
// let who = prompt("кто там", " ");
// if (who == "Admin") {
//     let password = prompt("Пароль?", " ");
//     if (password == "PNX") {
//         alert("Здравствуйте");
//     } else if (password == null) {
//         alert("Отменено");
//     } else {
//         alert("Неверный пароль");
//     }
// } else if (who == null) {
//     alert("Отменено");
// } else {
//     alert("Неизвестный пользователь");
// }
// TODO для выхода из ДВУХ циклов
// for сразу
// outer: for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         let input = prompt(`Координаты для (${i},${j})`, '');
//         if (!input) break outer;
//     }
// }
// alert("Готово!");

// let data;
// do {
//     data = prompt('Введите число больше 100', '')
// } while (data < 100 && data != null);
// alert(data);

// TODO Поиск всех простых чисел
// nextN: for (let i = 2; i < 100; i++) {
//     for (let j = 2; j < i / 2; j++) {
//         if (i % j == 0) continue nextN;
//     }
//     alert(i);
// }
// REVIEW
// let a = prompt("Cколько будет 2+2", " ");
// switch (+a) { // (+) Преобразует строку в число!
//     case 1:
//         alert("До свидания");
//         break;
//     case 4:
//         alert("nice");
//         break;
//     case 3: // Объединяет case 3 и 5
//     case 5:
//         alert('pnx');
//         alert("pnx2");
//         break;
//     case 2:
//         alert("БАЙ");
//         break;
//     default:
//         alert("нет значений");
// }

// TODO ФУНКЦИИ
// ANCHOR Как лучше называть функции ?
//     "get" - возвращают значение "calc" - что - то вычисляют "show" - Показывают "create" - что - то создают "check" - что - то проверяют и возвращают логическое значение

// let age = prompt('Ваш возраст?', '');

// function CheckAge(age) {
//     return age > 18 || confirm("Родители разрешили?");
// }
// alert(CheckAge(age));

// REVIEW Умножение
// let a = prompt('a=', '');
// let b = prompt('b=', '')

// function CalcAB(x, n) {
//     let result = x;
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// alert(CalcAB(a, b));

// TODO можно код функции присвоить другой функции

// function sayHi() {
//     alert('Привет');
// }
// let func = sayHi();
// func() //Будет работать также как и sayHi

// let sayHi = function () {
//     .........
// }; //!нужна точка с запятой

// function Ask(quest, yes, no) {
//     if (confirm(quest))
//         yes();
//     else no();
// }

// function showOk() {
//     alert('Вы согласны');
// }

// function showCancel() {
//     alert('Вы отменили выполнение');
// }
// Ask("Вы согласны?", showOk, showCancel);

// let age = prompt("Сколько лет?", "");
// let welcome //!чтобы функцию можно было использовать 
// if (age < 18) {
//     welcome = function () {
//         alert('hi');
//     };
// } else {
//     welcome = function () {
//         alert('helloy');
//     };
// }
// welcome(); ?
// Можно упростить с помощью условного оператора '?'
// let age = prompt("Сколько лет?", "");
// let welcome = (age < 18) ?
//     function () {
//         alert('hi');
//     } :
//     function () {
//         alert('Helloy');
//     };
// welcome();
// ! function EXPRESSION создаются только, когда поток выполнения доходит до них и используется только, когда Declaration не подходит для нашей задачи, т.к Declaration видна во всем потоке!

//     TODO Функции - стрелки, основы.
// let n = prompt('Введите n', "");
// let b = prompt('Введите b', "");
// let a = (n, b) => (b + n) * 2;
// //? тоже самое,что и ниже только короче
// let a = function (n, b) {
//     return ((b + n) * 2);
// };
// alert(a(n, b));

// REVIEW
// let ask = (ques, yes, no) => {
//     if (confirm(ques)) yes();
//     else no();
// }
// ask('ВЫ согласны?', () => {
//     alert("YES");
// }, () => {
//     alert("NO");
// });

// TODO debugger;
// ПРИОСТАНАВЛИВАЕТ ОТКЛАДКУ КОДА
// let name = prompt('Введите name', " ");

// function hello(name) {
//     let phrase = `hello, ${name}!`;
//     say(phrase);
// }

// function say(phrase) {
//     alert(`** ${phrase} **`);
// }
// hello(name);

// !для работы с консолью нажимаем F8
// сделать шаг F11
// Продолжить выполнение до завершения текущей функции SHIFT + F11
// F10 сделать шаг не заходя в функцию
// TODO ЛОГИРОВАНИЕ(для вывода на консоль);
// for (let i = 0; i < 5; i++) {
//     console.log('value, ', i);
// }
// приостановить выполнение скрипта можно 3 способами:
//     1. Точки Остнова
// 2. Команда debugger
// 3. При ошибке(если инструметы разработчика открыты и опция(пауза) включена)
// Функция возведения в степень REVIEW

// function pow(x, n) {
//     if (n < 0 || Math.round(n) != n) return NaN;
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// alert(pow(3, 2));
// TODO Math.round - округление

// ANCHOR Объекты

// let user = {
//     name: "Anton",
//     age: 20,
//     'likes birds': true,
// };
// alert(user.name);
// user.admin = true;
// delete user.admin;
// let key = prompt("Что вы хотите узнать?", "name");
// alert(user[key]);

// alert('name' in user); //true, user.name существует

// !ЦИКЛ
// for..in
// for (key in object) {
//     тело выполняется для каждоо свойства объекта
// }

// REVIEW
// for (let key in user) {
//     alert(key);
//     alert(user[key]);
// }
// Создание клона
// let clone = {};
// for (let key in user) {
//     clone[key] = user[key];
// }

// clone.name = 'John';
// alert(clone.name);

// !Можно объединить нсколько объектов в один!
//     let per1 = {
//         canView: true
//     };
// let per2 = {
//     canEdit: true
// };

// Object.assign(user, per1, per2, {
//     name: 'Toni'
// }); //Свойство объекта переапишется
// alert(user.name);
// object.assign можно использовать для простого клонирование
// let clone = Object.assign({}, user);

// REVIEW
// Проверить есть ли у объекта свойства
// let schedule = {};
// alert(isEmpty(schedule));
// schedule['8:30'] = 'get up';
// alert(isEmpty(schedule));

// function isEmpty(a) {
//     for (let key in a) {
//         return false
//     }
//     return true;
// }

// Функция для подсчета
// let salaries = {
//     ann: 1600,
//     john: 500,
//     antoni: 1100,
// };

// function sum(a) {
//     let sum = 0;
//     for (let key in a) {
//         sum += a[key];
//     }
//     return sum;
// }
// alert(sum(salaries));


// Функиця которая умножает все числовые на 2
// REVIEW
// let menu = {
//     width: 200,
//     height: 600,
//     title: 'my title',
// };
// multyNumeric(menu);

// function multyNumeric(Obj) {
//     for (let key in Obj) {
//         if (typeof Obj[key] == 'number') {
//             Obj[key] *= 2;
//         }
//     }
// }
// alert(menu.width);


// ANCHOR тип данных //!SYMBOL
// символы не преобразовываются автоматически в строки при вызове
// let id = Symbol('id');
// alert(id.toString()); //для преобразования symbol('id')
// //?или для вывода только описания
// alert(id.description); //id


// let user = {
//     name: "anton",
//     age: "20",
//     [id]: 18834, //чтобы использовать исвол при объявлении объекта
// };
// for (let key in user) alert(user[key]); //свойства с ключом символом нет
// //? НО, если обратиться напрямую
// alert('вот так ' + user[id]);

// сами по себе все символы уникальны, даже если их имена совпадают
// но можно использовать глобальный реестр символов:
//     let id = Symbol.for('id'); //Если символа не существует он будет создан
// let idAgain = Symbol.for('id'); //читаем его снова в другую переменную 
// STUB id === idAgain ?
//     также существует глобалный метод по поиску не по имени, а по символу
// получаем сивол по имени
// let sym = Symbol.for('name');
// let sym2 = Symbol.for('id');
// получаем имя по символу
// alert(Symbol.keyFor(sym)); //name
// alert(Symbol.keyFor(sym2)); //id
// Symbol.keyFor работает только глабольно, так что с неглобальными символами
// он работать не будет(undefined)

// ANCHOR OBJECT
// REVIEW
// создать калькулятор

// let calc = {
//     read: function () {
//         this.a = +prompt('введите а ', 0);
//         this.b = +prompt('введите b ', 0);
//     },
//     sum: function () { //===sum(){
//         return this.a + this.b
//     },
//     mull: function () { //===mul(){
//         return this.a * this.b
//     }
// };
// calc.read();
// alert(calc.sum());
// alert(calc.mull());

// ?
// Как сделать нeсколько последовательных вызовов
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         alert(this.step);
//         return this;
//     }
// };
// ladder.up().up()
//     .down().showStep()
//     .up().up().up().down()
//     .up().down().showStep();
// !РЕШЕНИЕ: возврат самого объекта в каждом методе.


// ANCHOR
// Преобразование обхектов в примитивы!!!!!
//     let user = {
//         name: "john",
//         money: 1000,

//         [Symbol.toPrimitive](hint) {
//             alert(`'hint: ${hint}`);
//             return hint == 'string' ? `{name: "${this.name}"}` :
//                 this.money;
//         }, //?вместо toPrimitive можно сипользовать valueOf и toString - 'string'
//         toString() {
//             return `{name: "${this.name}"}`;
//         },
//         valueOf() {
//             return this.money;
//         },
//     };
// alert(user);
// alert(+user);
// alert(user + 500);
// !toPrimitive => используется для преобразований
// Чаще достаточно только obj.toString() как универсальный
// REVIEW
// let obj = {
//     toString() {
//         return '2';
//     }
// };
// alert(obj + 2); //22
// alert(obj * 2); //4