'use strict';

var divContainer = document.createElement('div');
    divContainer.className = "container";
var divRowHeader = document.createElement('div');
    divRowHeader.className = "row row--header";
var h1 = document.createElement('h1');
    h1.className = "header";
    h1.innerHTML = "Тест по программированию";
var divRowForm = document.createElement('div');
    divRowForm.className = "row row--header";
var myForm = document.createElement('form');
    myForm.setAttribute('action','#');
    myForm.className = "myForm";
/////////////////////////////////////////////////////
var ol = document.createElement('ol');
    ol.className = 'questList';
var maxQuest = 3;
var maxAn   =  3;
for ( var i = 1;i <= maxQuest ; i++ ){
    var ulAnswer = document.createElement('ul');
        ulAnswer.className = 'ansList';
    for( var j = 1;j <= maxAn ; j++) {
        var myId = "quest" +i+ "__" +"ans" +j;
        var textLabel = 'Вариант ответа № '+ j;
        var input = document.createElement('input');
            input.setAttribute('type','checkbox');
            input.className = "inputCheck";
        var label = document.createElement('label');
            label.className = "myLabel";
        var ansLi = document.createElement('li');
            ansLi.className = 'ansLi';
        input.setAttribute( 'id', myId );
        label.setAttribute( 'for', myId );
        label.innerHTML = textLabel;
        ansLi.appendChild(input);
        ansLi.appendChild(label);
        ulAnswer.appendChild(ansLi);
    }
    var questionLi=document.createElement('li');
    questionLi.className = 'questLi';
    questionLi.innerHTML = "Вопрос № "+i;
    questionLi.appendChild(ulAnswer);
    ol.appendChild(questionLi);
}
var divWrapBat = document.createElement('div');
    divWrapBat.className = "wrapBat";
var button = document.createElement('input');
    button.setAttribute('type','button');
    button.className = "batCheck";
    button.setAttribute('value','Проверить мои результаты');

/////////////////////////////////////////////////////
var parentElem = document.body;
parentElem.appendChild(divContainer);
divContainer.appendChild(divRowHeader);
divRowHeader.appendChild(h1);
divContainer.appendChild(divRowForm);
divRowForm.appendChild(myForm);
myForm.appendChild(ol);
myForm.appendChild(divWrapBat);
divWrapBat.appendChild(button);




