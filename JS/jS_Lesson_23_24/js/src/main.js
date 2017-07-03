'use strict';

require.config = {
	baseUrl: 'js/src/',
	paths:{
		'jquery': 'js/src/jquery.js',
		'lodash': 'js/src/lodash.js'
	}

};
require([
		"data_script",
		 "view_script",
		 "control_script"
		,
		"jquery"
		,
		"lodash"
	],
	function(data_script,view_script,control_script,$){
		let firstToDoList = ['test 1','test 2','test 3'];
		let model = new data_script(firstToDoList);
		let view = new view_script(model);
		let controller = new control_script(model,view);

	});
// $(function () {
//
// });

