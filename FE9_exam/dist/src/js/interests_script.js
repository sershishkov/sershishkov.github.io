"use strict";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Вариант №1
// (function () {
// 	let grid = document.getElementById('grid');
// 		function SendGet(str) {
// 			let strThis=str;
// 			let API_KEY = '5574618-9f2251e0f5fdbede0f9cb5e69';
// 			let URL = "https://pixabay.com/api/?key=" + API_KEY + "&q="+encodeURIComponent(strThis);
//
// 			let myData = fetch(URL)
// 						.then(function(response) {
// 							if (response.ok) {
// 								return response.json();
// 							}
// 							throw new Error('ERROR fetching data!');
// 						})
// 						.then(function(data) {
// 							if(data.hits.length > 0){
// 								console.log(data.hits);
// 								for (let key in data.hits){
// 									let pShow = document.createElement('p');
// 									let img = document.createElement('img');
// 									let divWrapP = document.createElement('div');
// 									let divShow = document.createElement('div');
// 									let gridItem = document.createElement('a');
//
// 									pShow.setAttribute('class','pShow ');
// 									divWrapP.setAttribute('class','divWrapP ');
// 									divShow.setAttribute('class','divShow ');
// 									img.setAttribute('src',data.hits[key].previewURL);
// 									gridItem.setAttribute('class','grid-item ');
// 									gridItem.setAttribute('href',data.hits[key].webformatURL);
// 									pShow.innerHTML =data.hits[key].user;
// 									divWrapP.appendChild(pShow);
// 									divShow.appendChild(divWrapP);
// 									divShow.appendChild(img);
// 									gridItem.appendChild(divShow);
// 									grid.appendChild(gridItem);
// 								}
// 								return grid;
// 							}else{
// 								alert('объект не пришел');
// 							}
// 						})
// 						.catch(function (error) {
//
// 						});
// }
// 	SendGet ('n');
//
//
//
// //Запрос по клику на кнопку
//
// let myInput = document.getElementById('textApi');
// let butSearch = document.getElementById('butSearch');
// butSearch.addEventListener('click',function () {
// 	//alert('Что то ...');
// 	let myStr = myInput.value;
// 	// alert(myStr);
// 	grid.innerHTML= '';
// 	SendGet(myStr);
// 	myInput.value=" ";
//
// });
//
// myInput.addEventListener("keyup", function(event) {
// 	event.preventDefault();
// 	if (event.keyCode == 13) {
// 		butSearch.click();
// 	}
// });
// })();
/////////////////////////////////////////////////////////////////////////////////////////
//Вариант №2

(function () {

	var myIMG = ['https://media.giphy.com/media/6H4BDd2ZxPeAU/giphy.gif', 'https://media.giphy.com/media/zrgqFogFDV160/giphy.gif', 'https://media.giphy.com/media/Va7vvCMQjFrxK/giphy.gif', 'https://media.giphy.com/media/RPOle2zLtvdkY/giphy.gif', 'https://media.giphy.com/media/FL8ANluUfxyve/giphy.gif', 'https://media.giphy.com/media/Ro29C6bW4IsOk/giphy.gif', 'https://media.giphy.com/media/Pbb3yCU9LHtxm/giphy.gif', 'https://media.giphy.com/media/XbmRnSzRrQMcE/giphy.gif', 'https://media.giphy.com/media/r8UOm6i5MJAgo/giphy.gif', 'https://media.giphy.com/media/oMxkUIqkbJu5a/giphy.gif', 'https://media.giphy.com/media/XPCgAXhMJMoDu/giphy.gif', 'https://media.giphy.com/media/118Nyp2LSROwYU/giphy.gif', 'https://media.giphy.com/media/o7ajiKs7WmItW/giphy.gif', 'https://media.giphy.com/media/eP5q0QCbX7Qzu/giphy.gif', 'https://media.giphy.com/media/NhQwkWcd8hLZC/giphy.gif', 'https://media.giphy.com/media/Iz1A3fP4iLqBW/giphy.gif', 'https://media.giphy.com/media/ESySetwb9N7rO/giphy.gif', 'https://media.giphy.com/media/N1WgnxuBdPxbW/giphy.gif', 'https://media.giphy.com/media/FmeGktWfi5fQk/giphy.gif', 'https://media.giphy.com/media/EDTBuikyKjZRK/giphy.gif', 'https://media.giphy.com/media/uN7z6KVXIqkN2/giphy.gif', 'https://media.giphy.com/media/ptRXpn1QeeEMg/giphy.gif'];
	var grid = document.getElementById('grid');
	for (var key in myIMG) {
		var pShow = document.createElement('p');
		var img = document.createElement('img');
		var divWrapP = document.createElement('div');
		var divShow = document.createElement('div');
		var gridItem = document.createElement('a');

		pShow.setAttribute('class', 'pShow ');
		divWrapP.setAttribute('class', 'divWrapP ');
		divShow.setAttribute('class', 'divShow ');
		img.setAttribute('src', myIMG[key]);
		gridItem.setAttribute('class', 'grid-item ');
		gridItem.setAttribute('href', myIMG[key]);
		pShow.innerHTML = 'test';
		divWrapP.appendChild(pShow);
		divShow.appendChild(divWrapP);
		divShow.appendChild(img);
		gridItem.appendChild(divShow);
		grid.appendChild(gridItem);
	}

	//Запрос по клику на кнопку

	var myInput = document.getElementById('textApi');
	var butSearch = document.getElementById('butSearch');
	butSearch.addEventListener('click', function () {
		//alert('Что то ...');
		var myStr = myInput.value;
		// alert(myStr);
		grid.innerHTML = '';
		SendGet(myStr);
		myInput.value = " ";
	});

	myInput.addEventListener("keyup", function (event) {
		event.preventDefault();
		if (event.keyCode == 13) {
			butSearch.click();
		}
	});
})();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//# sourceMappingURL=interests_script.js.map