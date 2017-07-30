"use strict";

(function () {
	function SendGet(str) {
		var strThis = str;
		var API_KEY = '5574618-9f2251e0f5fdbede0f9cb5e69';
		var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(strThis);
		var grid = document.getElementById('grid');
		var myData = fetch(URL).then(function (response) {
			if (response.ok) {
				return response.json();
			}
			throw new Error('ERROR fetching data!');
		}).then(function (data) {
			// let grid = document.getElementById('grid');
			if (data.hits.length > 0) {
				var htmlGridTemplate = document.getElementById('template-grid').innerHTML;
				var templsteGrid = _.template(htmlGridTemplate);
				var Content = templsteGrid({ 'data': data.hits });
				grid.innerHTML = Content;
				return grid;
			} else {
				alert('объект не пришел');
			}
		}).catch(function (error) {});
	}
	SendGet('1');

	//Запрос по клику на кнопку

	var myInput = document.getElementById('textApi');
	var butSearch = document.getElementById('butSearch');
	butSearch.addEventListener('click', function () {

		var myStr = myInput.value;
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
/////////////////////////////////////////////////////////////////////////////////////////
//# sourceMappingURL=interests_script.js.map