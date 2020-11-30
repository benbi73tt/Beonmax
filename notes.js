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
// let n;
// setInterval((timer) => {

// }, n); //Функция, которая будет происходить с цикличностью в n миллисекунд
// //Остноновка таймера
// window.timerId = window.setInterval(timer, 1000);
// window.clearInterval(window.timerId);
// //Задержка перед запускам(код выполнится только 1 раз)
// window.setTimeout((func) => {
//     alert('!');
// }, 3000);
// //setTimeout как таймер(с рукерсией)
// function timer() {
//     var elem = document.getElementById('test');
//     elem.value = parseInt(elem.value) + 1;

//     window.setTimeout(timer, 1000); //рекурсия
// } //отменить такой таймер можно через if

//! Onload - скрипт запускается сразу при загрузке страницы

//!Фокусировка
//проверка на количество символов в input проверяется тегом data-length='n'
// ?if (this.dataset.length == this.value.length) {//правильное количество==вбитое количество
//     this.style.color = 'green';
// } else {
//     this.style.color = 'red';

//! Classlist - псевдомассив, помогает узнать количество классов, 
//! добавить и удалить классы элемента(атрибут (class) и css классов)
// const elem = document.querySelector('#elem');
// // добавление элементу класс "foo"
// elem.classList.add("ggg");
// // удаление класса "bar"
// elem.classList.remove("bar");
// // переключение класса "foo"
// elem.classList.toggle("foo");
// // возвращает "true" если у класса есть класс "foo", в противном случае "false"
// console.log(elem.classList.contains("ggg"));
// // добавление нескольких классов
// elem.classList.add("foo", "bar");
// console.log(elem.classList); //.length - для количества

//! cssText - для записывания или добавления стилей 
// elem.style.cssText += 'color: red; font-size: 20px;';
//! tagName
// console.log(elem.tagName.toLowerCase()); //'div'

//! createElement,appdendChild - добавление тэгов
// let parent = document.querySelector('#parent');
// let p = document.createElement('p');
// p.innerHTML = '!';

// parent.appendChild(p); //Добавление p в parent

//! insertBefore - вставить перед чем то... ИЛИ insertAdjacentHTML(куда вставить)
{
    /* <div id="parent">
    	<p>elem 1</p>
    	<p id="before">elem 2</p>
    	<p>elem 3</p>
    </div> */
}
// let parent = document.querySelector('#parent');
// let before = document.querySelector('#before');
// let p = document.createElement('p');
// p.innerHTML = '!';
// parent.insertBefore(p, before);
// 

let target = document.querySelector('#target');
target.insertAdjacentHTML('beforeBegin', '<p>!</p>'); //!ПЕРЕД   
target.insertAdjacentHTML('afterEnd', '<p>!</p>'); //!ПОСЛЕ
target.insertAdjacentHTML('afterBegin', '<p>!</p>'); //!НАЧАЛО
target.insertAdjacentHTML('beforeEnd', '<p>!</p>'); //!КОНЕЦ

//! Соседи, потомки, родители 
//firstElementChild содержит первый дочерний элемент.
//lastElementChild хранит в себе последний дочерний элемент.
//Свойство children хранит в себе псевдомассив дочерних элементов.
//?
{
    /* <div id="parent">
    	<p>1</p>
    	<p>2</p>
    	<p>3</p>
    	<p>4</p>
    	<p>5</p>
    </div> */
}
// let parent = document.querySelector('#parent');
// let elems = parent.children;

// for (let elem of elems) {
// 	console.log(elem.innerHTML);
// }

//previousElementSibling содержит предыдущий элемент, находящийся в этом же родителе.
//nextElementSibling содержит следующий элемент, находящийся в этом же родителе.
//?элемент.nextElementSibling //элемент.previousElementSibling

//Свойство parentElement содержит родительский элемент.
//Отличия: для тега html свойство parentNode возвращает document, а parentElement возвращает null.

//!Удаление и клонирование 
//Метод removeChild позволяет удалить элемент. 
//?родитель.removeChild(элемент)

//Метод cloneNode позволяет клонировать элемент и получить его точную копию
//сли передан true, то элемент клонируется полностью, вместе со всем атрибутами и дочерними элементами, 
//а если false - только сам элемент (без дочерних элементов).
//?элемент.cloneNode(true или false);

//! Сокращение, классы textCss, создание блока div
// createDiv() {
// let div = document.createElement('div');
// //  div.textContent = 'hello,my friend';
// document.body.appendChild(div); //добавление div в body
// //прописываем все параметры в param и после изменяем все сразу
// let param = `height: ${this.height}px; width: ${this.width}px; background-color:${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};  `;
// div.style.cssText = param;
// }

//! создание новых экземпляров класса 
//const name = new class(10, 20);

//! JSON формат передачи данных
// console.log(JSON.stringify(optipns));
// //STUB {"width":1366,"height":769,"background":"red","font":{"size":"16px","color":"#fff"}}

// console.log(JSON.parse(JSON.stringify(optipns)));
// //Возвращает обычный объект!

//! AJAX (Asynchronous Javascript And Xml)
//! -технология для взаимодействия с сервером без перезагрузки страниц.


// let inputRub = document.getElementById('rub'),
//     inputUSD = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest(); //Главный объект для работы с запросами

    //request.open(method,url, async, login,password);
    //method-метод с который общается клиент с сервером(get- получать данные с сервера, post-отправлять данные на сервер)
    //url - путь к серверу(локальный, облачный)
    //async- асинхронность объекта(true or false)(по умолч-true, иначе, если false, то пока сервер не ответит мы не сможем взаимодействовать со стр)
    //STUB request.open('GET', 'json.json');//Что мы хотим, зачем и куда
    //-получение JSON данных
    //STUB request.setRequestHeader('Content-type', 'application/json; chraset=utf-8');//Что хотим сделать
    //setRequestHeader-настройка http запросов,
    //внутри него указываем какой контент здесь будет
    // request.send(body);//Открывает соединение и отправляет запрос на сервер
    //STUB request.send();//делаем
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
})

//!Angular React Vue

//!JQuery
//?Одно и то же
$('#btn'); //document.getElementById('btn');
$(document).ready(function() { //DOMContentLoaded
    $('.list-item:first').hover(function() { //first- для первого элемента;
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function() { //on - addeventListener
        $('.image:even').fadeToggle('slow'); //even -четные элементы
        //fadeToggle - исчезает или появляется 
    });
    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate({ //odd - нечетные
            opacity: 'toggle', //Картинка исчезает и появляется
            height: 'toggle'
        }, 3000);
    });
});

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