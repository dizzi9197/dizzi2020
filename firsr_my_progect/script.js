'use strict'
let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате Год-Месяц-День"),
    a1 = prompt("Введите обязательную статью расходов в этом месяце"),
    a2 = +prompt("Во сколько обойдется?"),
    b1 = prompt("Введите обязательную статью расходов в этом месяце"),
    b2 = +prompt("Во сколько обойдется?");
let appData = {
        moneyData: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
};
appData.expenses.a1 = a2;
appData.expenses.b1 = b2;
appData.expenses.money = time;
console.log(appData)
alert(money/30)