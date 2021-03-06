/* Created by shyshkov on 17.04.2017. */
'use strict';
//Задание №1
/*Написать функцию pow, аналогичную Math.pow,
которая должна возводить указанное число в указанную степень.
 Указать число и степень пользователь должен через команду prompt.
 */
 function isNumeric(n) {
     return !isNaN(parseFloat(n)) && isFinite(n);
 }
function myPow(x, n) {
    var result = x;
    for (var i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
var base=0;
while (!base) {
    var temp = prompt('Введите корректное значение основания', '');
        if ((isNumeric(temp))&&(temp!==0)){
            base = temp;
        }
}
var y=0;
while (!y) {
    temp = prompt('Введите корректное значение степени', '');
    if (isNumeric(temp)){
        y = temp > 0 ? parseInt(temp) : -parseInt(temp);
    }
}
var res = myPow(base, y);
    alert(base+' в степени ' + y + ' будет: ' + res);

   // Задание №2
/* Создать программу, которая будет выполнять следующие действия:
Циклом заполнить массив с помощью команды prompt
в котором будет список из 5-ти любых имен
Потом вывести с помощью prompt сообщение с просьбой ввести
имя пользователя
Введенное имя, циклом сравнивать с именами в массиве
Если нет совпадения, то есть введенное имя пользователя
не существует в массиве - выдавать с помощью alert сообщение
об ошибке
Если есть совпадение - выводить сообщение
"Андрей, вы успешно вошли". Вместо "Андрей"
должно быть имя текущего пользователя*/

var names = [];
    for  ( var i = 0; i < 5 ; i++) {
        names[i]=prompt('Ведите имя №'+(i+1), '');
    }
var user = prompt('Назовите свое имя', '');
var flag = false;
    for  (var j = 0; j < 5; j++) {
        if( names[j] === user ) {
            flag=true;
            break;
        }
    }
if (flag) {
    alert(user + ', Вы успешно зашли');
} else {
    alert('Ошибка! Такого имени в списке нет');
}

