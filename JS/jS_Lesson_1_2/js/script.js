/* Created by shyshkov on 17.04.2017. */
'use strict'

// var javaScriptName=prompt('Каково «официальное» название JavaScript? ','')
// if(javaScriptName=='ECMAScript'){
//     alert('Верно');
// } else {
//     alert('Не знаете? "ECMAScript"!');
// }



// var base=prompt('Введите число для возведения в степень','')
// var basePow=prompt('Введите степень числа','')





var adminName=prompt('Введите Ваш логин','');
    if (adminName=='Admin') {
        var adminPassword=prompt('Введите пароль','')
        if (adminPassword=='Чёрный Властелин') {
            alert('Добро пожаловать!')
        }else if (adminPassword==null){
            alert('Вход отменён')
        }else {
            alert('Пароль неверен')
        }
    }else if (adminName==null){
        alert('Вход отменён')
    }else {
        alert('Я вас не знаю')
    }

