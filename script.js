'use strict';
//! Скрипт для дальнейшей работы!
let money, time;

function start() {
    money = +prompt("Ваш бюджет в месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-08-30");
    //! isNaN - Если функция возращает строку она возвращает true 
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет в месяц?", "");
    }
}
start();

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");

        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i--;
            console.log("Пользователь не ввел данные");
        }
    }
}


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true
};


chooseExpenses();



appData.moneyPerday = (appData.budget / 30).toFixed();

alert("Eжедневный  бюджет:" + appData.moneyPerday);

if (appData.moneyPerday < 100) {
    console.log('Мин уровень достатка');
} else if (appData.moneyPerday > 100 && appData.moneyPerday < 2000) {
    console.log("Сред уровень достатка");
} else if (appData.moneyPerday > 2000) {
    console.log("высокий уровень достатка");
} else {
    console.log("Ошибка");
}
//Функция для накопления сбережений, сумма и процент(сколько заработает)
function checkSaving() {
    if (appData.saving == true) {
        let save = +prompt('Сумма накоплений?', ""),
            percent = +prompt('Под какой процент?', "");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц составляет: " + appData.monthIncome);
    }
}
checkSaving();