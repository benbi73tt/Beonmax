//С помощью ректа создатся одностраничные программы, взаимодействующие с пользователем(как Geegle почта)
//Также работает с серверной стороной
// npx create-react-app my-app вводим команду в консоль(shift+пкм в папке), где my-app -название приложения
// cd my-app
// npm start
//такая сборка уже включает в себя webpack, babel


//!Написание тестов
// mocha - библиотеки для тестирования
// npm install chai
//npm install --global mocha

function sayName(name) {
    let message = `My name is ${name}`;
    return message;
}

let arr = [1, 2, 3, 4, -5, 3, -11];
let result = arr.reduce(function(sum, elem) {
    return sum + elem;
})

let assert = require('chai').assert;

describe("sayName", function() {
    it("Получаем фразу с новым именем", function() {
        assert.typeOf(sayName("alex"), 'string');
    })
});
//!ЕСЛИ ОШИБКА в доступе
// powershell от имени админа и вводим Get-ExecutionPolicy
//Set-ExecutionPolicy unrestricted

//mocha script	script-название файла
//mocha --watch  - для автопроверки, если изменияем тест(если название не test), тогда после mocha ставим название файла
//ctrl+c для выхода
describe("arr", function() {
    it("Получаем сумму чисел массива", function() {
        assert.equal(result, -3);
    })
});

//далее в проекте beon3