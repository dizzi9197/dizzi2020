window.addEventListener('DOMContentLoaded', function(){

    'use strict'
    let tab = document.querySelectorAll('.info-header-tab');
    let info = document.querySelector('.info-header');
    let tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);
    function showTabContent(b){
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', function(e){
        if (e.target && e.target.classList.contains('info-header-tab')){
            for (let i = 0; i < tab.length; i++){
                if (e.target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    // Timer

    let dedline = '2020-02-28';

    function getTimeRemaining(endtime) {
        let t  = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/1000/60/60));

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }
    
   
    function setClock(id, endtime) {
        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaining(endtime);
                for (let key in t){
                    if(t[key] < 10 && t[key] > 0 ){
                        t[key] = '0' + t[key];
                    } else if (t[key] <= 0 ){
                        t[key] = '00';
                    }
                }
                        hours.textContent = t.hours;
                        minutes.textContent = t.minutes;
                        seconds.textContent = t.seconds;
                if (t.total <= 0 ){
                    clearInterval(timeInterval);
                } 
            }
    }
    setClock('timer', dedline);
    // Modal

    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');
    let descriptionBtn = document.querySelectorAll('.description-btn');

    more.classList.add('btn-show');


    for (let i = 0; i < descriptionBtn.length; i++){
        descriptionBtn[i].classList.add('btn-show');
    }
    let btnShow = document.getElementsByClassName('btn-show');
    for (let i = 0; i < btnShow.length; i++){
        btnShow[i].addEventListener('click', function(){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    }
    
    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.add('more-splash');
        document.body.style.overflow = '';
    });
    // Form

    let massage = {
        loading: "Загрузка",
        success: "Спастбо за заявку!",
        failure: "Ошибка"
    };

    let form = document.getElementsByTagName('form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

        for (let i = 0; i < input.length; i++){
            
            let inputs = input[i];
            
            // console.log(input[i].name)
            if(inputs.name == "phone"){
                inputs.onkeydown = function(e){
                    if(e.which>=48 && e.which <=57  || (e.which >=96 && e.which <=105) // num lock
                    || e.which==8 // backspace
                    || (e.which >=37 && e.which <=40) // стрелки
                   || e.which==46 || e.which==107){
                        return true;
                    } else {
                        return false;
                    }
                }
            }

            
        }
       
        

        for (let i = 0; i < form.length; i++){
            

            form[i].addEventListener('submit', function(event){
                event.preventDefault();
                
                form[i].appendChild(statusMessage);
        
                let request = new XMLHttpRequest();
                request.open('GET', 'server.php');
                //request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');
                request.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');
        
                let formData = new FormData(form[i]);
                let obj = {};
                formData.forEach(function(value, key){
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);
                request.send(json);
        
                
        
                console.log(json)
                request.addEventListener('readystatechange', function(){
                    if(request.readyState < 4) {
                        statusMessage.innerHTML = massage.loading;
                    } else if (request.readyState === 4 && request.status == 200) {
                        statusMessage.innerHTML = massage.success;
                    } else {
                        statusMessage.innerHTML = massage.failure;
                    }
                });
        
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                    
                }
        
        
            });
        }
       
});

