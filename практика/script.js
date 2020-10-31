'use strict';
let startBtn = document.getElementById("start"),
    budgetVal = document.getElementsByClassName("budget-value")[0],
    dayBudgetVal = document.getElementsByClassName('daybudget-value')[0],
    LvlVal = document.getElementsByClassName('level-value')[0],
    ExpVal = document.getElementsByClassName('expenses-value')[0],
    OptExpVal = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeVal = document.getElementsByClassName('income-value')[0],
    monthSaveVal = document.getElementsByClassName('monthsavings-value')[0],
    yearSaveVal = document.getElementsByClassName("yearsavings-value")[0];

let ExpensesItem = document.getElementsByClassName('expenses-item'),
    ExpBtn = document.getElementsByTagName('button')[0],
    OptBtn = document.getElementsByTagName('button')[1],
    CountBtn = document.getElementsByTagName('button')[2],
    OptExpItem = document.querySelectorAll(".optionalexpenses-item"),
    ChooseInc = document.querySelector(".choose-income"),
    CheckSav = document.querySelector("#savings"),
    ChoosePercent = document.querySelector('.choose-percent'),
    ChooseSum = document.querySelector('.choose-sum'),
    YearValue = document.querySelector('.year-value'),
    MonthValue = document.querySelector('.month-value'),
    DayValue = document.querySelector('.day-value');


//! Скрипт для дальнейшей работы!
let money, time;

ExpBtn.disabled = true; //блокирует кнопки до момента, пока не станет false
OptBtn.disabled = true;
CountBtn.disabled = true;

startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-08-30");
    money = +prompt("Ваш бюджет в месяц?", "");

    //! isNaN - Если функция возращает строку она возвращает true 

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет в месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetVal.textContent = money.toFixed(); //округляет
    YearValue.value = new Date(Date.parse(time)).getFullYear(); //value, т.к в HTML используется input
    MonthValue.value = new Date(Date.parse(time)).getMonth() + 1; //Month начинается с 0, январь это НУЛЕВОЙ месяц
    DayValue.value = new Date(Date.parse(time)).getDate();

    ExpBtn.disabled = false;
    OptBtn.disabled = false;
    CountBtn.disabled = false;
});


ExpBtn.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < ExpensesItem.length; i++) {
        let a = ExpensesItem[i].value,
            b = ExpensesItem[++i].value;

        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
            console.log("Пользователь не ввел данные");

        }
    }
    ExpVal.textContent = sum;
});

OptBtn.addEventListener('click', function() {
    // Функция для определения необязательных расходов
    for (let i = 0; i < OptExpItem.length; i++) {
        let a = OptExpItem[i].value;
        appData.optionalExpenses[i] = a;
        OptExpVal.textContent += appData.optionalExpenses[i] + " ";
    }
});
CountBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerday = ((appData.budget - (+ExpVal.textContent)) / 30).toFixed();
        dayBudgetVal.textContent = appData.moneyPerday;

        //Функция ежедневного бюджета
        if (appData.moneyPerday <= 100) {
            LvlVal.textContent = 'Мин уровень достатка';
        } else if (appData.moneyPerday > 100 && appData.moneyPerday < 2000) {
            LvlVal.textContent = "Сред уровень достатка";
        } else if (appData.moneyPerday > 2000) {
            LvlVal.textContent = "Высокий уровень достатка";
        } else { LvlVal.textContent = "Ошибка"; }
    } else {
        dayBudgetVal.textContent = "Произошла ошибка. Введите доход";
    }

});

ChooseInc.addEventListener('input', function() {
    let items = incomeVal.value;
    // if (typeof(items) != "string" || items == "" || typeof(items) == null) {
    //     console.log("Вы ввели некорректные данные или не ввели их вовсе");
    // } else {
    //     appData.income = items.split(', ');
    // }
    appData.income = items.split(', ');
    incomeVal.textContent = appData.income;
});

ChooseInc.addEventListener('input', function() {
    //TODO если поставить CHANGE вместо input, то введенные данные будут появляться только при нажатии вне элемента
    let items = ChooseInc.value;
    appData.income = items.split(', ');
    incomeVal.textContent = appData.income;
});

CheckSav.addEventListener('click', function() {
    if (appData.saving == true) {
        appData.saving = false;
    } else appData.saving = true;
});

ChooseSum.addEventListener('click', function() {
    if (appData.saving == true) {
        let sum = +ChooseSum.value,
            percent = +ChoosePercent.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
    }
    monthSaveVal.textContent = appData.monthIncome.toFixed(1); //для округления до 1 точки после запятой
    yearSaveVal.textContent = appData.yearIncome.toFixed(1);

});
ChoosePercent.addEventListener('click', function() {
    if (appData.saving == true) {
        let sum = +ChooseSum.value,
            percent = +ChoosePercent.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
    }
    monthSaveVal.textContent = appData.monthIncome.toFixed(1); //для округления до 1 точки после запятой
    yearSaveVal.textContent = appData.yearIncome.toFixed(1);

});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,
};