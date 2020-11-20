'use strict';

//!ACNHOR
//TODO -- новая глава
//ANCHOR -- Эта функция уже взаимодействовала раньше
//STUB -- примеры
//REVIEW -- Новые функции
//NOTE -- заметки
//FIXME -- исправления


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

//TODO 3.1 Скрипты и время их выполнения. setTimeout setlnterval

//let timerId=setTimeout(sayHello, 3000); //функция запустится через 3 секунды!

//let timerId = setInterval(sayHello, 3000); //каждый 3 секунды выводит функицю!
//clearTimeout(timerId); //Останавливает функцию!

//!Рекурсия setTimeout лучше тем, что при setInterval задержка перед вызывом может оказаться меньше, чем выполнение функции!
function sayHello() {
    console.log('hello');
}

let timerId = setTimeout(function log() { //рекурсия setTimeout
    console.log('Hello');
    setTimeout(log, 2000);
});

let box = document.querySelector('.box'),
    btn = document.querySelector('.btn');
btn.addEventListener('click', function MyAnimation() {
    let pos = 0;

    let id = setInterval(function frame() {

        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            // console.log(pos);
            box.style.margin = pos + 'px';
        }
    }, 10);
});

// let btn = document.querySelector('.btn'),
//     elem = document.querySelector('.box');

// function MyAnimation() {
//     let pos = 0;
//     let id = setInterval(frame, 10);

//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             console.log(pos);
//             elem.style.margin = pos + 'px';

//         }
//     }
// }
//btn.addEventListener('click',MyAnimation());

//!Делигирование

// let BtnBlock = document.querySelector('.btn-block'),
//     btns = document.getElementsByTagName('button');

// BtnBlock.addEventListener('click', event => {
//     event.preventDefault(); //Исключает стандартное поведение в браузере
//     //  if (event.target && event.target.tagName == 'BUTTON') {
//     //    console.log('hello');
//     //  }
//     if (event.target && event.target.classList.contains('first')) {
//         console.log('hello, first'); //выводит только для определенного класса
//     }
//     if (event.target && event.target.matches('button.first')) //ищет совпадения определенной кнопки с определенным классом!
//         console.log('hello, first(matches)');
// })

//todo 3.2 СОздаем табы на странице
//!ПРАКТИКА

//todo 3.4 Параметры документа, окна и работа с ними

// let enter = document.querySelector('.enter'),
//     but = document.querySelector('.but');
// let width = enter.clientWidth,
//     height = enter.clientHeight, //значения без border и scroll
//     width1 = enter.offsetWidth,
//     height1 = enter.offsetHeight, //значение с border scroll
//     width2 = enter.scrollWidth,
//     height2 = enter.scrollHeight; //Значение ВСЕГО div, но без прокрутки
// console.log(height);
// console.log(height1);
// console.log(height2);

// but.addEventListener('click', function() {
//     console.log(enter.scrollTop); //показывает сколько px сверху(сколько мы прокрутили)    
//     enter.scrollTop = 0; //возвращает наверх!
//enter.style.height = enter.scrollHeight + 'px';
//});
//! Координаты блоков
// console.log(enter.getBoundingClientRect()); //Выдаёт координаты блока

// console.log(enter.getBoundingClientRect().left);

// console.log(document.documentElement.clientWidth); //Выдаёт количество пикселей документа(ВСЕГО)
// console.log(document.documentElement.clientHeight);
// console.log(document.documentElement.scrollTop); //размер документа, вместе с прокруткой
// document.documentElement.scrollTop = 0; //для возвращения в начало страниц

//scrollBy(x, y); //Расстояние на которое мы хоти отматать страницу

//scrollTo(x, y); //Переместит не относительно текущего положения, а в определенные координаты

//todo 3.6 Конструкторы и классы!

//REVIEW ES5
// function User1(name, id) { //функции конструкторы!
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('hello! ' + this.name);
//     }
// }
// User1.prototype.registr = function() { //добавляет метод и они прототипно наследуются
//     console.log("Пользователь " + this.name + " зарегистрирован");
// }


// let Ivan = new User1('Ivan', 25);
// let Alex = new User1('Alex', 20);
// console.log(Ivan);
// console.log(Alex);
// Ivan.hello();
// Alex.registr();

//?ИДЕНТИЧНЫЕ КОДА В РАЗНЫХ СТИЛЯХ
//REVIEW ES6 
// class User2 {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log(`Hello! ${this.name}`);
//     }
//     registr() {
//         console.log(`Пользователь ${this.name} зарегистрирован`);
//     }
// }
// let ivan = new User2('Ivan', 25);
// let alex = new User2('Alex', 20);
// console.log(ivan);
// console.log(alex);
// alex.hello();
// ivan.registr();


//!3.7 Контектс вызова (this)

// function showThis(a, b) {
//     console.log(this); //ЕСЛИ не 'use scrict' выполнит себя в объекте Window, ибо ни к чему не привязана
//     function sum() {
//         console.log(this);//иначе undefined
//         return a + b; //
//     }
//     console.log(sum());
// }

// showThis(4, 5); //9

// let obj = {
//     a: 15,
//     b: 20,
//     sum: function() {
//         console.log(this); //Объект(obj)
//         function shout() {
//             console.log(this) //undefined||windows
//         }
//         shout();
//     }

// };

// obj.sum();


// let user = {
//     name: 'Jhon',

// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }


// console.log(sayName.call(user, "Smit")); //передается только строка

// console.log(sayName.apply(user, ['snow'])); //можно передать массив

// function count(number) {
//     return this * number;
// }

// let double = count.bind(2); //заменяет THIS. привязали this к 2
// console.log(double(3)); //заменяет number

let butt = document.querySelector('.constr');
butt.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';

    function showThis() {
        console.log(this);
    }
    showThis(); //undefined
});

//1) Просто вызов функции - undefined/widnow
//2) Метод объекта - this=объект
//3) Конструктор (new) -this =новый созданный объект
//4) Указание конкретного контекста - call, apply, bind

//!3.8 практика
// let age = document.getElementById('age');

// function showUser(surname, name) {
//     alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }

// showUser.apply(age, ['Атон', 'Бур']);