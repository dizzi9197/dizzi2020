let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu-item');
let div = document.createElement('div');
let title = document.getElementById('title');
let column = document.getElementsByClassName('column')[1];
let adv = document.querySelector('.adv');
let questionApple = prompt("Ваше отношение к технике Apple?", "");
let promptQuestion = document.getElementById('prompt');

menu.insertBefore(menuItem[2], menuItem[1]);
div.classList.add('menu-item');
menu.appendChild(div);
div.innerHTML = 'Пятый пункт';
document.body.style.backgroundImage = "url('img/apple_true.jpg')"
title.innerHTML = 'Мы продаем только подлинную технику Apple';
column.removeChild(adv);

promptQuestion.innerHTML = questionApple;





