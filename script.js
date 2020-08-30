'use strict';
//! Скрипт для дальнейшей работы!

let money = prompt("Ваш бюджет в месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-08-30");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};
let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b1 = prompt("Во сколько обойдется?", ""),
    a2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b2 = prompt("Во сколько обойдется?", "");

appData.expenses.a1 = b1;
appData.expenses.a2 = b2;

alert(appData.budget / 30);