"use strict";

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName("expenses-item"),
    expensesBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
    

let money,
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

// Объект с данными
let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,

    // Метод для получения данных о статьях расходов
    chooseExpences: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("Во сколько обойдется?");

            if (typeof (a) == "string" && (a != null) && (b != null) &&
                (a != "") && (b != "") && (a.length < 50)) {

                console.log("done");

                appData.expenses[a] = b;
            } else {
                console.log("Потребовался повторный ввод");
                i--;
            }
        }
    },

    // Метод для расчета дневного бюджета
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay + "руб.");
    },

    // Метод для расчета уровня достатка
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Это минимальный уровень достатка");
        } else if ((appData.moneyPerDay > 100) && (appData.moneyPerDay < 2000)) {
            console.log("Это средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Это высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },

    // Метод для расчета дохода от накоплений в зависимости от процента
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накопления?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    },

    // Метод для определения необязательных расходов
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let answer = prompt("Статья необязательных расходов?");

            appData.optionalExpenses[i] = answer;
            console.log(appData.optionalExpenses);
        }
    },

    chooseIncome: function () {
        let items;

        do {
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        } while ( !isNaN(items) || (items == "") || (items == null) );

        appData.income = items.split(", ");
        appData.income.push( prompt("Может что-то еще?", "") );
        appData.income.sort();

        items = "";
        appData.income.forEach(function(item, index) {
            items += `${index+1}) ${item}\n`;
        });
        alert("Способы доп. заработка: \n" + items);
    }
};

let appDataWhole;
for (let key in appData) {
    appDataWhole += `${appData[key]}\n`;
}
console.log(`Наша программа включает в себя данные:\n ${appDataWhole}`);