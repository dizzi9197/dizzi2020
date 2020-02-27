window.addEventListener('DOMContentLoaded', function(){
'use strict'
// let date1 = new Date();
// let options = {
//     hour: 'chas',
//     minute:'min',
//     second: 'sec'
// }
// options.hour = date1.getHours();
// options.minute = date1.getMinutes();
// options.second = date1.getSeconds();
// for (let key in options){
//     if(options[key] < 10){
//         options[key] = '0' + options[key];
//     }
// }
// document.write(options.hour + ' : ' + options.minute + ' : ' + options.second)

let age = document.getElementById('age');

function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
 
showUser.call(age, 'Bielov', 'Vitalii');
});
