"use strict";

let money,
    time;

// Функция для получения данных о бюджете на месяц
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
        savings: true
    };

// Функция для получени данных о статьях расходов
function chooseExpences() {
    for (let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?");
        
        if ( typeof(a) == "string" && (a != null) && (b != null) &&
            (a != "") && (b != "") && (a.length < 50) ) {

            console.log("done");

            appData.expenses[a] = b;
        } else {
            console.log("Потребовался повторный ввод");
            i--;
        }
    }
}

chooseExpences();

/*
let i = 0;

// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдется?");
    
//     if ( typeof(a) == "string" && (a != null) && (b != null) &&
//         (a != "") && (b != "") && (a.length < 50) ) {

//         console.log("done");

//         appData.expenses[a] = b;
//     } else {
//         console.log("Потребовался повторный ввод");
//         i--;
//     }

//     i++;
// }


// let i = 0;

// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдется?");
    
//     if ( typeof(a) == "string" && (a != null) && (b != null) &&
//         (a != "") && (b != "") && (a.length < 50) ) {

//         console.log("done");

//         appData.expenses[a] = b;
//     } else {
//         console.log("Потребовался повторный ввод");
//         i--;
//     }

//     i++;
// } while (i < 2);
*/

// Функция для расчета дневного бюджета
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay + "руб.");
}

// Функция для расчета уровня достатка
function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Это минимальный уровень достатка");
    } else if ( (appData.moneyPerDay > 100) && (appData.moneyPerDay < 2000) ) {
        console.log("Это средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Это высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

// Функция для расчета дохода от накоплений в зависимости от процента
function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накопления?"),
            percent = +prompt("Под какой процент?");
        
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
    }
}

checkSavings();

// Функция для определения необязательных расходов
function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let answer = prompt("Статья необязательных расходов?");
        
        appData.optionalExpenses[i] = answer;
        console.log(appData.optionalExpenses);
    }  
}

chooseOptExpenses();