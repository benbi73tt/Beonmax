'use strict';

//!ACNHOR
//TODO -- новая глава
//ANCHOR -- Эта функция уже взаимодействовала раньше
//STUB -- примеры
//REVIEW -- Новые функции
//NOTE -- заметки
//FIXME -- исправления


//выход из папки ../
//Вход в папку cd ИМЯ

//TODO 2.5 Работа с Git и с сервисом GitHub
//git init - инициирования репозитория
//git config --global user.name "Anton"
//git config --global user.email bur2000_2010@mail.ru
//git checkout -b branch_name(имя ветви)
//! Установить глобально(global) для всех будущих проектов, локал(local) для каких то отдельных
//git status файлы за которыми следит git
//git add -A для добавления в git новых файлов
//git add КОНКРЕТНЫЙ файл(main.css)
//git commit -a -m"first commit"   m-это комментарий
//git log для просмотра коммитов(commits)
//git remote add название https://github.com/benbi73tt/НАЗВАНИЕ.git для создания внешнего репозитория(github)
//git push -u Название Ветка ----для пуша в репозиторий (-u нужна чтобы по умолчанию всё сохранялось в заданное место)

//todo 4
//!4.1 JSON формат передачи данных и асинхронные действия на странице(без перезагрузки)
// NOTE  JSON - Для отправки данных на сервер
//JSON - javascript object Notation
// let optipns = {
//     width: 1366,
//     height: 769,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: '#fff'
//     }
// };


// console.log(JSON.stringify(optipns));
// //STUB {"width":1366,"height":769,"background":"red","font":{"size":"16px","color":"#fff"}}

// console.log(JSON.parse(JSON.stringify(optipns)));
// //Возвращает обычный объект!


//!4.2AJAX (Asynchronous Javascript And Xml)
//! -технология для взаимодействия с сервером без перезагрузки страниц.


// let inputRub = document.getElementById('rub'),
//     inputUSD = document.getElementById('usd');

// inputRub.addEventListener('input', () => {
//     let request = new XMLHttpRequest(); //Главный объект для работы с запросами

//request.open(method,url, async, login,password);
//method-метод с который общается клиент с сервером(get- получать данные с сервера, post-отправлять данные на сервер)
//url - путь к серверу(локальный, облачный)
//async- асинхронность объекта(true or false)(по умолч-true, иначе, если false, то пока сервер не ответит мы не сможем взаимодействовать со стр)
// request.open('GET', 'json.json'); //Что мы хотим, зачем и куда
//-получение JSON данных
// request.setRequestHeader('Content-type', 'application/json; chraset=utf-8'); //Что хотим сделать
//setRequestHeader-настройка http запросов,
//внутри него указываем какой контент здесь будет
// request.send(body);//Открывает соединение и отправляет запрос на сервер
// request.send(); //делаем
//http запросы состоят из заголовков и тела
//body бывает только, когда мы берем инфу с клиентской части и отправляем ее на серв(форма обратной свзяи на сайте)

//!свойства

//status - в каком состоянии сервер(404- при ошибке)
//statusText - получаем текстовый ответ
//responseText / response - текст ответа сервера(то что хочет сервер послать)
//readyState - текущее состояние запроса{
//     0 unsent-объект создан, метод не выполнен
//     1 opened - метод вызвался
//     2 headers_received - метод вызвался, доступны заголовки и статус
//     3 loading - Загрузка responseText содержит частиные данные
//     4 Done - операция полностью завершена
// }


// request.addEventListener('readystatechange', () => { //'load'
//     if (request.readyState === 4 && request.status == 200) {
//         let data = JSON.parse(request.response);

//         inputUSD.value = inputRub.value / data.usd; //из json файла
//     } else {
//         inputUSD.value = 'Чтото пошло не так!';
//     }
// });


//!4.4 ES6 Promise (обещание) Если произошло что то ты выполним

//IE11 не поддерживает promise, для этого нужно зайти на сайт polifill, там найти docs и babel-polyfill - превращает код с promise в старый, понятный всем код

//?Обычный код!

// let drink = 1; //0

// function shot(arrow, headshot, fail) {
//     console.log('Вы сделали выстрел');
//     setTimeout(function() {
//         Math.random() > .5 ? headshot({}) : fail('Вы промахнулись');
//     }, 3000);
// }

// function win() {
//     console.log('Вы победили');
//     (drink == 1) ? byBeer(): getMoney();

// }

// function byBeer() {
//     console.log('Вам купили пива');
// }

// function getMoney() {
//     console.log('Вам дали деньги');
// }

// function loose() {
//     console.log('Вы проиграли');
// }
// shot({},
//     function(mark) {
//         console.log('Вы попали в цель');
//         win(mark, byBeer, getMoney);

//     },
//     function(miss) {
//         console.log(miss);
//         loose();
//     }
// );

//? Код с promise
//ANCHOR

// let drink = 1; //0

// function shot(arrow) {
//     console.log('Вы сделали выстрел');
//     let promise = new Promise(function(resolve, reject) { //Две функции определяют состояния
//         setTimeout(function() {
//             Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');
//         }, 3000);
//     });
//     return promise;
// }

// function win() {
//     console.log('Вы победили');
//     (drink == 1) ? byBeer(): getMoney();

// }

// function byBeer() {
//     console.log('Вам купили пива');
// }

// function getMoney() {
//     console.log('Вам дали деньги');
// }

// function loose() {
//     console.log('Вы проиграли');
// }
// shot({}) //всё в одну строчку
//     .then(mark => console.log('Вы попали в цель'))
//     .then(win)
//     .catch(loose)

//!4.5 Promise
// let inputRub = document.getElementById('rub'),
//     inputUsd = document.getElementById('usd');

// inputRub.addEventListener('input', () => {

//     function catchData() {

//         return new Promise(function(resolve, reject) {
//             let request = new XMLHttpRequest();
//             request.open("GET", "json.json");

//             request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//             request.send();

//             request.onload = function() {
//                 if (request.readyState === 4 && request.status == 200) {
//                     resolve(this.response);
//                 } else
//                     reject();
//             }
//         });
//     }
//     catchData()
//         .then(response => {
//             console.log(response);
//             let data = JSON.parse(response);
//             inputUsd.value = inputRub.value / data.usd;
//         })
//         .then(() => console.log(5000))
//         .catch(() => inputUsd.value = "Что-то пошло не так")


// });


//!4.8 Как сохранить данные без ДБ. Работа с localStorage
//Этот объект можно использовать для настройки сайта и при повторном заходе всё должно оставаться на местах
// время, данные пользователя, время просмотра видео и прочее
// помещается около 5 мб памяти
//Один раз записали и они там остаются

//Если такой существует, то значение перезапишется


//REVIEW 

// localStorage.setItem("number", 1); //Ключ и значение

// console.log(localStorage.getItem("number")); //Для получения ключа

// localStorage.removeItem("number"); //Удаление

// localStorage.clear();//Удаления всего 

//ANCHOR

//скрипт для автозаполнения формы()

// window.addEventListener("DOMContentLoaded", function() {
//     let checkbox = document.getElementById('rememberMe'),
//         change = document.getElementById('change'),
//         form = document.getElementsByTagName("form")[0];

//     if (localStorage.getItem("isChecked") === "true") {
//         checkbox.checked = true;
//     }
//     if (localStorage.getItem('bg') === 'changed') {
//         form.style.backgroundColor = "red";
//     }
//     checkbox.addEventListener('click', function() {
//         localStorage.setItem("isChecked", true); //Ключ и значение
//     });

//     change.addEventListener('click', function() {
//         localStorage.setItem('bg', 'changed');
//         form.style.backgroundColor = "red";
//     });

//     let personBD = {
//         name: "Alex",
//         age: 25,
//         tech: ["mobile", "PC"]
//     }

//     let serializedPersone = JSON.stringify('personBD'); //ЧТобы объект правильно принимался

//     localStorage.setItem("Alex", serializedPersone);

//     console.log(JSON.parse(localStorage.getItem("Alex")));

// })

//!4.9 ОШИБКИ, как избежать поломки своего кода

// try {
//     console.log('Начинаем работу');
//     console.log(a); //Т.к а не существует, переходит в catch
//     console.log('Pезультат');
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);

//     console.log(`Мы получили ошибку: ${error.name}`)

// } //НЕ ПОДСВЕЧИВАЕТСЯ как ошибка и код продолжает работать если была ошибка

// let json = '{"id":2}'


// try {
//     let user = JSON.parse(json);
//     console.log(user);
//     if (!user.name) {
//         throw new Error("В этих данных нет имени!"); //сами создаём ошибку
//     }
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);

//     console.log(`Мы получили ошибку: ${error.name}`)

// } finally {
//     console.log('А я выполнюсь всегда');
// }

//! 4.10 Современные библиотеки и фрэймворки. JQuery, как устроена $
//Angular React Vue

//JQuery
//?Одно и то же
// $('#btn'); //document.getElementById('btn');
// $(document).ready(function() { //DOMContentLoaded
//     $('.list-item:first').hover(function() { //first- для первого элемента;
//         $(this).toggleClass('active');
//     });

//     $('.list-item:eq(2)').on('click', function() { //on - addeventListener
//         $('.image:even').fadeToggle('slow'); //even -четные элементы
//         //fadeToggle - исчезает или появляется 
//     });
//     $('.list-item:eq(4)').on('click', function() {
//         $('.image:odd').animate({ //odd - нечетные
//             opacity: 'toggle', //Картинка исчезает и появляется
//             height: 'toggle'
//         }, 3000);
//     });
// });

//иногда, если нужен только нативный js используем это вместо $
// document.querySelectorAll('.list-item').forEach();//?$
//.classList
//.addeventListener
//$.ajax - fetch
//animations

//JQuery сейчас можно заменить нотивным JS


//React Vue Angular

//Angular - фрэймворк основанный на typeSrcipt
//1. Node.js и научить работать с NPM пакетами
//2. Ознакомиться с TypeScript
//3. Сборщик модулей Webpack
//4. Шаблон проектирования  MVC(modal view controler)
//5. Angular


//React в отдельном уроке
//1. Node.js и научить работать с NPM пакетами
//2. Babel - софт переписывающий ES6 в ES5
//3. JSX 
//4. Сборщик модулей Webpack
//5. React - отличная документация на сайте!

//Vue 
//1. Node.js и научить работать с NPM пакетами
//2. Babel - софт переписывающий ES6 в ES5
//3. Сборщик модулей Webpack

//! 4.12 Инкапсуляция. Прием модуль, как и зачем его использовать
//сокрытие элементов программы от пользователя
// function user(name, age) {
//     this.name = name;
//     //this.age = age;
//     let UserAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя ${this.name}, возраст: ${UserAge}`);
//     }

//     this.getAge = function() {
//         return UserAge;
//     }
//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             UserAge = age;
//         } else
//             console.log("Недопустимые значения");
//     }

// }


// let ivan = new user('alex', 25);
// console.log(ivan.name);
// console.log(ivan.UserAge);

// console.log(ivan.getAge());

// ivan.setAge(30);
// console.log(ivan.getAge());

// ivan.say();


//MODAl
//Нужно создавать несколько Js файлов, чтобы при удалении/изменении одного программа не переставала работать

//создание анонимных функций
//1)
// let number = 1;
// //Функция анонимна и работает только внутри себя
// (function() {
//     let number = 2;
//     console.log(number); //2
//     return console.log(number + 2); //4
// }());

// console.log(number); //1

//2)
// let User = (function() {
//     let privat = function() {
//         console.log('a am privat');
//     }

//     return {
//         SayHello: function() {
//             console.log('hi');
//         }
//     }
// }())

// console.log(User);
// console.log(User.SayHello());


//3)
// let User = (function() {
//     let privat = function() {
//         console.log('a am privat');
//     }
//     let SayHello = function() {
//         console.log('hi');
//     }
//     return {
//         SayHello: SayHello

//     }

// }())

// console.log(User);
// console.log(User.SayHello());

//!4.14 аналоги webpack. Сборка проектов с помощью Browserify
//npm install-g browserify +(sudo в начало для mac)
//browserify src/js/script.js -o dist/bundl.js