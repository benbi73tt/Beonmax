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

let drink = 1; //0

function shot(arrow) {
    console.log('Вы сделали выстрел');
    let promise = new Promise(function(resolve, reject) { //Две функции определяют состояния
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');
        }, 3000);
    });
    return promise;
}

function win() {
    console.log('Вы победили');
    (drink == 1) ? byBeer(): getMoney();

}

function byBeer() {
    console.log('Вам купили пива');
}

function getMoney() {
    console.log('Вам дали деньги');
}

function loose() {
    console.log('Вы проиграли');
}
shot({}) //всё в одну строчку
    .then(mark => console.log('Вы попали в цель'))
    .then(win)
    .catch(loose)

//!4.5 Promise
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open("GET", "json.json");

            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            request.onload = function() {
                if (request.readyState === 4 && request.status == 200) {
                    resolve(this.response);
                } else
                    reject();
            }
        });
    }
    catchData()
        .then(response => {
            console.log(response);
            let data = JSON.parse(response);
            inputUsd.value = inputRub.value / data.usd;
        })
        .then(() => console.log(5000))
        .catch(() => inputUsd.value = "Что-то пошло не так")


});