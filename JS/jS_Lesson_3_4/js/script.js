'use strict';
var divContainer=document.createElement('div');
divContainer.className = "container";
var divRow=document.createElement('div');
divRow.className = "row ";
var h1 = document.createElement('h1');
h1.className = "header ";
var divRowForList=document.createElement('div');
divRowForList.className = "row ";

h1.innerHTML = "Тест по программированию";
var parentElem = document.body;
parentElem.appendChild(divContainer);
divContainer.appendChild(divRow);
divRow.appendChild(h1);
divContainer.appendChild(divRowForList);
var list = document.createElement('ul');
divRowForList.appendChild(list);

