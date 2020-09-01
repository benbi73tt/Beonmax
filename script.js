'use strict';
//! Скрипт для дальнейшей работы!

let money = +prompt("Ваш бюджет в месяц?", ""),
    time = +prompt("Введите дату в формате YYYY-MM-DD", "2020-08-30");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};
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


appData.moneyPerday = appData.budget / 30;
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