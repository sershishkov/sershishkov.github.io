"use strict";

(function () {
	function SendGet(str) {
		let strThis=str;
		let API_KEY = '5574618-9f2251e0f5fdbede0f9cb5e69';
		let URL = "https://pixabay.com/api/?key=" + API_KEY + "&q="+encodeURIComponent(strThis);
		let grid = document.getElementById('grid');
		let myData = fetch(URL)
			.then(function(response) {
				if (response.ok) {
					return response.json();
				}
				throw new Error('ERROR fetching data!');
			})
			.then(function(data) {
				// let grid = document.getElementById('grid');
				if(data.hits.length > 0){
					let htmlGridTemplate = document.getElementById('template-grid').innerHTML;
					let templsteGrid = _.template(htmlGridTemplate);
					let Content = templsteGrid({'data': data.hits});
					grid.innerHTML = Content;
					return grid ;
				}else{
					alert('объект не пришел');
				}
			})
			.catch(function (error) {

			});


	}
	SendGet ('1');

//Запрос по клику на кнопку

	let myInput = document.getElementById('textApi');
	let butSearch = document.getElementById('butSearch');
	butSearch.addEventListener('click',function () {

		let myStr = myInput.value;
		grid.innerHTML= '';
		SendGet(myStr);
		myInput.value=" ";
	});

	myInput.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode == 13) {
			butSearch.click();
		}
	});
})();
/////////////////////////////////////////////////////////////////////////////////////////

