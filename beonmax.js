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
//sh('hi');

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

//? Замыкание функций это: вызывание в функции другую функцию и ее же саму, до нужного результат



//ANCHOR 2.13 callback-функции
//!CALLBACK используется для того, чтобы функция испотзовалась одна за другой, иначе 
//!функции, которая стоит в коде позднее может выполниться раньше


function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

function done() {
    console.log("Я прошел урок 2.13!");
}
learnJS("JS", done); //Можно вызывать как отдельную ф-ию
learnJS("C++", function() {
    console.log('Я на 3 курсе УлГУ'); //так и создавать ее
})

//ANCHOR ОБЪЕКТЫ Урок 2.14

let obj = {
    width: 512,
    height: 512,
    name: "test",
};
console.log(obj.name);
obj.bool = false; //можно также создавать новые свойства

obj.colors = {
    border: "black",
    background: "red"
};

delete obj.height; //для удаления свойств объекта

console.log(obj);

for (let key in obj) {
    console.log(key + " имеет свойство" + obj[key]);
}

console.log(Object.keys(obj).length); //Если нужно узнать количество свойств!


//ANCHOR 2.15  
// Массивы и псевдомассивы
let arr = [1, 2, 3, 'four', 5];

arr.pop(); //Удаление последнего элемента массива
arr.push("5"); //Добавление в конец массива

arr.shift(); //Удаление из начала массива
arr.unshift("first"); //Добавление элемента в начало массива
console.log(arr);


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(function(item, i, mass) {
    //item-перечисляемое(1,2,3,4,5) 
    //i-номер нашего элемента, mass-массив
    console.log(i + ":" + item + "(массив:" + mass + ")");

});
//Новый способ перебора массива forOf
let mass = [1, 3, 5, 6, 7, 9];
for (let key in mass) {
    console.log(key); //Выводит номер элемента
    //console.log(mass[key]);//выводит свойства элемента
}
//?или чтобы получить свойства массива можно использовать 
for (let key of mass) {
    console.log(key);
}

let ans = prompt("Введите через запятую", "");

let array = [];
array = ans.split(','); //Разделитель!
console.log(array);

//?Если хотим отправить массив одной строкой, например на сервер

let array2 = ['awras', 'awrds', '234', '25gsr'],
    i = array2.join(',', ' ');
console.log(i);

//?Для сортировки массива по алфавиту начиная с первого знака
//! для чисел действует также, как для строк, т.е. 1 и 15 будут сравнивать по Первой цифре
let array3 = ['awras', 'Dwrds', 'f234', 'b25gsr'],
    i1 = array3.sort();
console.log(array3);

//? Для правильной сортировки цифр используем callback

let array4 = [1, 15, 4, 41, 12],
    i2 = array4.sort(compareNum); //! Мы вызвали функцию а не ее результат!

function compareNum(a, b) {
    return a - b;
}
console.log(array4);

//? Функция sort работает сравнением быстрой сортировки первых чисел,
//? При разности двух первых цифр числа, он сортирует массив
//? Sort ориентируется на разницу двух элементов массива , она либо положительная, либо отрицательная