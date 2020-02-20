'use strict'
let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате Год-Месяц-День");

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
};
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
// Решение при помощи цыкла While
// let i = 0;
// while (i < 2) {
//     let costsOne = prompt("Введите обязательную статью расходов в этом месяце" , ""),
//         costsTwo = +prompt("Во сколько обойдется?" , "");

//     if ( (typeof(costsOne)) === 'string' && (typeof(costsOne)) != null && (typeof(costsTwo)) != null 
//     && costsOne != '' && costsTwo != '' && costsOne.length < 50) {
//         appData.expenses[costsOne] = costsTwo;
//     } else  {
//         i--;
//     }
//     i++;
// }
// Решение при помощи цыкла do While
// let i = 0;
// do {
//     let costsOne = prompt("Введите обязательную статью расходов в этом месяце" , ""),
//         costsTwo = +prompt("Во сколько обойдется?" , "");

//     if ( (typeof(costsOne)) === 'string' && (typeof(costsOne)) != null && (typeof(costsTwo)) != null 
//     && costsOne != '' && costsTwo != '' && costsOne.length < 50) {
//         appData.expenses[costsOne] = costsTwo;
//     } else  {
//         i--;
//     }
//     i++;
// }
// while (i < 2)

appData.moneyPerDay = appData.budget/30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}


