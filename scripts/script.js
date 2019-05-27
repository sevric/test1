"use strict";

var money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),

    mandatoryExpensesItem1 = prompt("Введите обязательную статью расходов в этом месяце"),
    mandatoryExpensesItem1Value = prompt("Во сколько это обойдется?"),
    mandatoryExpensesItem2 = prompt("Введите обязательную статью расходов в этом месяце"),
    mandatoryExpensesItem2Value = prompt("Во сколько это обойдется?"),

    appData = {
        budjet : money,
        timeData : time,
        
        expenses : {
            mandatoryExpensesItem1 : mandatoryExpensesItem1Value,
            mandatoryExpensesItem2 : mandatoryExpensesItem2Value
        },

        optionalExpenses : {},

        income : [],
        
        savings : false
    }

alert(appData.budjet/30);