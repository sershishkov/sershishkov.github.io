/**
 * Created by Shishkov on 05.05.2017.
 */

'use strict';
//Сделать первый символ заглавным

//  function ucFirst(name) {
//      if(!name)return name;
//      var newName = name[0].toUpperCase() + name.slice(1);
//         return newName;
//  }
//  var enterName = prompt('Введите имя в нижнем регистре', '');
//  alert(ucFirst(enterName));

//////////////////////////////////////////////////////////////

// Напишите функцию checkSpam(str), которая возвращает true,
//     если строка str содержит „viagra“ или „XXX“, а иначе
// false.
// function chekSpam(str) {
//     if (!str) return str;
//     if(str.indexOf('viagra')>-1 || str.indexOf('xxx')>-1 ) {
//         return true;
//     }
//     return false;
// }
// var spamToCheck = prompt('Ввeдите любой текст','').toLowerCase();
// alert(chekSpam(spamToCheck));

/////////////////////////////////////

// Создайте функцию truncate(str, maxlength), которая
// проверяет длину строки str, и если она превосходит
// maxlength – заменяет конец str на "...", так чтобы ее
// длина стала равна maxlength.

// function truncate(str, maxleght) {
//     var newS;
//     if (!str) return str;
//     if (str.length > maxleght) {
//         return str.slice(0, maxleght) + '...';
//     } else {
//         return str;
//     }
// }
// var strToDot = prompt('Ввeдите любой текст','');
// var result = truncate(strToDot,10);
//    alert(result);

////////////////////////////////////////////////////////
// var user = {
//     name: 'Вася',
//     surName: 'Петров'
// };
// user.name = 'Сергей';
//delete user.surName;

////////////////////////////////////////////
// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n)
// }
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
// var salaryMax=0;
// var nameMax='';
// for (var key in salaries){
//     if (salaries[key]>salaryMax ){
//         nameMax = key;
//         salaryMax = salaries[key]
//     }
//
// }
// alert(nameMax);
// for (var key in salaries){
//     if ( isNumeric(salaries[key]) ){
//         salaries[key]*=2;
//         alert(key + ': '+ salaries[key]);
//     }
// }

/*Написать функцию reverseString(str) которая
 получает строку и возвращает ее зеркальную(перевернутую)
 версию
 reverseString("hello"); возвратит "olleh"
 reverseString("Howdy"); возвратит "ydwoH"
 reverseString("Greetings from Earth"); возвратит
 "htraE morf sgniteerG"*/
            // var myStr ;
            // var reversStr = [] ;
            //  myStr = prompt('Введите строку','');
            //  var max = myStr.length;
            //  var j = myStr.length-1;
            //  for (var i=0; i < max ; i++ , j--)
            //      {
            //          reversStr[i] = myStr[j];
            //      }
            //      var joinStr = reversStr.join('');
            //         alert(joinStr);

 /*Написать функцию findLongestWord(str) которая получает
 строку и возвращает массив, первый елемент массива это
 самое длинное слово в этой строке, второй елемент массива это
 длина этого слова.
 findLongestWord("The quick brown fox jumped over the lazy dog")
 ; вернет ['jumped', 6]
 findLongestWord("Google do a roll"); вернет ['Google', 6]
 findLongestWord("May the force be with you"); вернет ['force', 5]*/

 /*Написать функцию factorialize(num) которая получает число
 и возврашает факториал этого числа
 factorialize(5); вернет 120
 factorialize(10); вернет 3628800
 factorialize(0); вернет 1*/