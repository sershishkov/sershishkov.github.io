'use strict';

requirejs.config({
	baseUrl: 'js/src',
	paths:{
		'jquery': 'jquery-3.2.1.min',
		'lodash': 'lodash',
		'data_script': 'data_script',
		'view_script': 'view_script',
		'control_script': 'control_script'
	},
	shim: {
		'jquery': {
			exports: 'jquery',
		},
		'lodash': {
			exports: 'lodash',
		}
	}
});
requirejs([
		"jquery",
		"lodash",
		'data_script',
		'view_script',
		'control_script'
	],
	function(){
		let firstToDoList = ['test 1','test 2','test 3'];
		let model = new Model(firstToDoList);
		let view = new View(model);
		let controller = new Controller(model,view);
	});

