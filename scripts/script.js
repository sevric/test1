"use strict";

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

let appData = {
        budget: money,
        expenses: {},
        optionalExpenses: {},
        income: [],
        timeData: time,
        savings: true
    };

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

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if ( (appData.moneyPerDay > 100) && (appData.moneyPerDay < 2000) ) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накопления?"),
            percent = +prompt("Под какой процент?");
        
        appData.monthIncome = save / 100 / 12 * percent;
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let answer = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = answer;
    }  
}

chooseOptExpenses();