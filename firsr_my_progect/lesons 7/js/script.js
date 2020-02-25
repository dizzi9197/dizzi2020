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

    let dedline = '2020-02-24';

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
});

