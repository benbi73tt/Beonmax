'use strict';

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
//git push -u Название Ветка ----для пуша в репозиторий (-u нужна чтобы по умолчанию всё сохранялось в заданное место)


//ANCHOR 2.6 Работа на 2 компьютерах
//git pull для копирования с глобального репозиторий на наш пк
//! Если забыли прописать pull перед работой на другом компьютере
//Нужно даже после кода прописать pull, в консоли прописать описание
//Тогда наши проекты сливаются, получается MERGE между новой и старой версии
//после пишем описание и нажимаем ctrl+c(2 раза)
//После пишем ':wq!' и нажать enter

//?Не забываем про файл .gitignore с модулями, которые весят очень много

//Создать новую ветку git checkout название
//Лучшая программа для гита графа и работы с репозиториями это KRAKEN


//ANCHOR Функции!

function sh(text) {
    alert(text);
}
sh('hi');

console.log(sum(3, 4));
//!можно использовать функцию даже до объявления
function sum(a, b) {
    return a + b;
}
console.log(sum(8, 5));

//!объявление функции, как переменной заранее вызвать нельзя

//console.log(prod(3, 5)); //!ОШИБКА

let prod = function(a, b) {
    return a * b;
}
console.log(prod(3, 5));

//!Краткая запись функции

let del = (a, b) => a / b; //стрелочная функция

console.log(del(15, 3));

let str = 'test';
console.log('длина строки "' + str + '" : ' + str.length); //для получения длины строки

console.log('текст в вернехем регистре(заглавными буквами): ' + str.toUpperCase());
console.log('текст в нижнем регистре(маленькие): ' + str.toLowerCase());

let twelve = '12.12532323';
let twelve2 = '15.23432432px';

console.log(Math.round(twelve)); //округление к целому
console.log(parseInt(twelve2)); //выводит INT, не изменяю переменную
console.log(parseFloat(twelve2)); //выводит FLOAT + Откидываем PX
//!  .toFixed округление для функций(объектов)

//? Замыкание функций это: