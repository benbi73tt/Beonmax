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


//ANCHOR 2.5 Работа на 2 компьютерах
//git pull для копирования с глобального репозиторий на наш пк
//! Если забыли прописать pull перед работой на другом компьютере
//Нужно даже после кода прописать pull, в консоли прописать описание
//Тогда наши проекты сливаются, получается MERGE между новой и старой версии
//после пишем описание и нажимаем ctrl+c(2 раза)
//После пишем ':wq!' и нажать enter


//?Не забываем про файл .gitignore с модулями, которые весят очень много

//Создать новую ветку git checkout название
//Лучшая программа для гита графа и работы с репозиториями это KRAKEN

//ANCHOR 2.18

// function hi() {
//     console.log("Hello world!");
// }

// hi();

// let array4 = [1, 15, 4, 41, 12],
//     i = array4.sort(compareNum); //! Мы вызвали функцию а не ее результат! 

// function compareNum(a, b) {
//     return a - b;
// }
// console.log(array4);
//Работа с консолью браузера в Sources

//ANCHOR 2.19+Динамическая типизация
//"Вспоминаем"
//!1.ПРОСТЫЕ ТИПЫ
//а. числа - 3 4 6
//б.строки - 'string', "string", `string`
//в. логические - true/false;
//г. null - вообще не существует (console.log(a); //a не существует)
//д. let a;
// undefined - нет данных (console.log(a); //а не имеет значения)
//!2.КОМПЛЕКСНЫЕ ТИПЫ (ОБЪЕКТЫ)
//!2.1 Обычные объекты
// let obj=new Object()
// let obj1 ={}
// свойства:
// let obj = {
//     name:"John"
// }
// obj.name="John";
// Методы:
// let obj ={
//     SayName:function(){
//         alert("John")
//     }
// }
//!2.2 СПЕЦ.Объекты
//a. Массивы
// б.Функици function
// в. Обекты Даты
// г. Регулярные выражения
// д. Ошибки
//!3 Динамические типы данных
// -to String
//a.
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));
// //б.
// console.log("ww" + 5); //всё стало строкой
// // Превращение в строки
// //Обычно используется для формирование URL
// console.log('https://vk.com/catalog/' + 5); //переходим по адресу

// // -to Number
// //a.
// console.log(typeof(Number('5')));
// //б.
// console.log(typeof(5 + +"5")); //унарный плюс, который превращает в число
// //в.
// console.log(typeof(parseInt("25px", 5)));
// //г.
// let ans = +prompt("hi", ''); //любые введенные данные пользователем, будут считаться числом

// //всегда FALSE - 0, '', null, undefined, NaN
// let flag = 0;
// if (flag) { //никогда не сработает, пока flag false
//     console.log("working..")
// }
// flag = 1;
// if (flag) { //СРАБОТАЕТ
//     console.log("working..")
// }

// console.log(typeof(Boolean("5")));
// console.log(typeof(!!"5")); //тоже самое что и console.log(typeof(Boolean("5")));
// console.log([] + false - null + true); //NaN

// let y = 1;
// let x = y = 2;
// console.log(x); //2

// console.log([] + 1 + 2); //"12"

// console.log("1" [0]); //1

// let a = 1,
//     b = 3;
// console.log(!!(a && b)); //true
// console.log(a && b); //3

// console.log(null || 2 && 3 || 4); //3
// console.log("ёжик" > "яблоко"); //true
// console.log("Ёжик" > "Яблоко"); //false

// alert(+"Infinity");//Infinity
// alert(+"Infinity");//NaN

//ANCHOR 2.22 Получение элементов со страницы