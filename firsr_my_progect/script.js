'use strict'

let money, time;
    function start () {
        money = +prompt("Ваш бюджет на месяц?", ""),
        time = prompt("Введите дату в формате Год-Месяц-День", "");
    
        while(isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?", "");
        }
    }
    start();
   
let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let costsOne = prompt("Введите обязательную статью расходов в этом месяце" , ""),
            costsTwo = +prompt("Во сколько обойдется?" , "");
    
        if ( (typeof(costsOne)) === 'string' && (typeof(costsOne)) != null && (typeof(costsTwo)) != null 
        && costsOne != '' && costsTwo != '' && costsOne.length < 50) {
            appData.expenses[costsOne] = costsTwo;
        } else {
            i--;
        }
    };
}
chooseExpenses();
function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let costsNotOne = prompt("Статья необязательных расходов?" , "");
    
        if ( (typeof(costsNotOne)) === 'string' && (typeof(costsNotOne)) != null 
         && costsNotOne != '' && costsNotOne.length < 50) {
            appData.optionalExpenses[i]= costsNotOne;
        } else {
            i--;
        }
    };
}
chooseOptExpenses();
   
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();
function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000){
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма сбережений?"),
            percent = +prompt("Под какой процент?");
        appData.mothIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.mothIncome)
    }
}
checkSavings();
