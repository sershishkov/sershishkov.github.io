'use strict';

require.config = {
	paths:{
		'jquery': 'js/src/jquery-3.2.1.min.js',
		'lodash': 'js/src/lodash.js'
	},
	shim: {
		'jquery': {
			exports: 'jQuery',
		},
		'lodash': {
			exports: 'lodash',
		}
	}
};
require([
		"data_script",
		 "view_script",
		 "control_script",
		"jquery",
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

