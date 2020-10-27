'use strict';
let start = document.getElementById("start"),
    budgetVal = document.getElementsByClassName("daybudget-value")[0],
    dayBudgetVal = document.getElementsByClassName('daybudget-value')[0],
    LvlVal = document.getElementsByClassName('level-value')[0],
    ExpVal = document.getElementsByClassName('expenses-value')[0],
    OptVal = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeVal = document.getElementsByClassName('income-value')[0],
    monthSaveVal = document.getElementsByClassName('monthsavings-value')[0],
    yearSaveVal = document.getElementsByClassName("yearsavings-value")[0];

let ExpensesItem = document.getElementsByClassName('expenses-item'),
    ExpBtn = document.getElementsByTagName('button')[0],
    OptBtn = document.getElementsByTagName('button')[1],
    CountBtn = document.getElementsByTagName('button')[2],
    InpOptExp = document.querySelectorAll(".optionalexpenses-item"),
    ChooseInc = document.querySelector(".choose-income"),
    CheckSav = document.querySelector("#savings"),
    ChooseSum = document.querySelector('.choose-percent'),
    YearVal = document.querySelector('.year-value'),
    MonthValue = document.querySelector('.month-value'),
    DayValue = document.querySelector('.day-value');







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


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    chooseExpenses: function() {
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
    },
    delectDayBudget: function() {
        appData.moneyPerday = (appData.budget / 30).toFixed();
        alert("Eжедневный  бюджет:" + appData.moneyPerday + ' руб');
    },
    detectLevel: function() {
        //Функция ежедневного бюджета

        if (appData.moneyPerday < 100) {
            console.log('Мин уровень достатка');
        } else if (appData.moneyPerday > 100 && appData.moneyPerday < 2000) {
            console.log("Сред уровень достатка");
        } else if (appData.moneyPerday > 2000) {
            console.log("высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },
    checkSaving: function() { //Функция для накопления сбережений, сумма и процент(сколько заработает)
        if (appData.saving == true) {
            let save = +prompt('Сумма накоплений?', ""),
                percent = +prompt('Под какой процент?', "");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц составляет: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        // Функция для определения необязательных расходов
        for (let i = 0; i < 2; i++) {
            let a = prompt("Статья необязательных расходов?", '');
            appData.optionalExpenses[i] = i + 1 + " : " + a;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет доп. доход?(перечислить через запятую)", "");
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }
    }
};


appData.chooseExpenses();

appData.delectDayBudget();

appData.detectLevel();

appData.checkSaving();
appData.chooseIncome();