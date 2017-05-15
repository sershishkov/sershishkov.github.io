

'use strict';
// function printNumbersInterval() {
//     var i = 1;
//     var timerId = setInterval(function() {
//         console.log(i);
//         if (i == 20) clearInterval(timerId);
//         i++;
//     }, 100);
// }
//
// // вызов
// printNumbersInterval();
// //////////////////////////////////////////////////////////
// console.log('//////////////////////////////////////////////////////////');
// function printNumbersTimeout20_100() {
//     var i = 1;
//     var timerId = setTimeout(function go() {
//         console.log(i);
//         if (i < 20) setTimeout(go, 100);
//         i++;
//     }, 100);
// }
//
// // вызов
// printNumbersTimeout20_100();
////////////////////////////////////////////////////////////////////////
// setTimeout(function() {
//     alert( i );
// }, 100);
//
// var i;
//
// function hardWork() {
//     // время выполнения этого кода >100 мс, сам код неважен
//     for (i = 0; i < 1e8; i++) hardWork[i % 2] = i;
// }
//
// hardWork();
/////////////////////////////////////////////////////////////////////////////
// var i;
// var timer = setInterval(function() { // планируем setInterval каждые 10 мс
//     i++;
// }, 10);
//
// setTimeout(function() { // через 50 мс - отмена setInterval
//     clearInterval(timer);
//     alert( i ); // (*)
// }, 50);
//
// // и запускаем тяжёлую функцию
// function f() {
//     // точное время выполнения не играет роли
//     // здесь оно заведомо больше 100 мс
//     for (i = 0; i < 1e8; i++) f[i % 2] = i;
// }
//
// f();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function sumArgs() {
//     // скопируем reduce из массива
//     arguments.reduce = [].reduce;
//     return arguments.reduce(function(a, b) {
//         return a + b;
//     });
// }
// alert( sumArgs(4, 5, 6) ); // 15
///////////////////////////////////////////////////////////////////

