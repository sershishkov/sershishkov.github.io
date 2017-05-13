'use strict';
var hours = document.getElementById('hours');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var milSec =document.getElementById('milSec');
var buttStart = document.getElementById('start');
var buttClear = document.getElementById('clear');
var newTime;
var enterTime;
function myTimer(tS,sH,sM,sS) {
    enterTime = tS;
    var savedHour   = (sH)?sH:0;//добавляем сохоаненное значение таймера
    var savedMinute = (sM)?sM:0;
    var savedSecond = (sS)?sS:0;
    newTime = new Date();
    var difHour = savedHour + newTime.getHours() - enterTime.getHours();
    var difMin  = savedMinute + newTime.getMinutes() - enterTime.getMinutes();
    var difSec  = savedSecond + newTime.getSeconds() - enterTime.getSeconds();
    hours.innerHTML =   difHour<10?'0'+difHour:difHour;
    min.innerHTML   =   difMin<10?'0'+difMin:difMin;
    sec.innerHTML   =   difSec<10?'0'+difSec:difSec;
}
function myMilTimer(tS) {
    enterTime = tS;
    var difMil = new Date() - enterTime;
    milSec.innerHTML   =   difMil%1000;
}
var myInterval;
var milInterval;
var timeStart;
var saveH = 0;
var saveM = 0;
var saveS = 0;
function handler() {
    if(buttStart.innerHTML==="start"){
        buttStart.innerHTML = "pause";
        timeStart = new Date();
        myInterval = setInterval(myTimer, 1000,timeStart);
        milInterval = setInterval(myMilTimer, 10,timeStart);
    }else if(buttStart.innerHTML==="pause"){
        buttStart.innerHTML = "continue";
        clearInterval(myInterval);
        clearInterval(milInterval);
        saveH = +hours.innerHTML;
        saveM = +min.innerHTML;
        saveS = +sec.innerHTML;
    }else if(buttStart.innerHTML==="continue"){
        buttStart.innerHTML = "pause";
        timeStart = new Date();
        myInterval = setInterval(myTimer, 1000,timeStart,saveH,saveM,saveS);
        milInterval = setInterval(myMilTimer, 10,timeStart);
    }
}
function myClear () {
    hours.innerHTML = "00";
    min.innerHTML   = "00";
    sec.innerHTML   = "00";
    milSec.innerHTML= "000";
    buttStart.innerHTML = "start";
    clearInterval(myInterval);
    clearInterval(milInterval);
}
buttStart.addEventListener("click", handler);
buttClear.addEventListener("click",myClear);

