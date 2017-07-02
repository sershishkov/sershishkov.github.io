'use strict';

require.config = {
	paths: {
		'jquery': "jquery-3.2.1.min.js",
		'lodash': 'lodash.js'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		},
		'lodash': {
			exports: 'lodash'
		}
	}
};
//noinspection JSAnnotator
require(["data_script", "view_script", "control_script",
// 'jquery',
"lodash"], function (data_script, view_script, control_script) {

	$(function () {
		var firstToDoList = ['test 1', 'test 2', 'test 3'];
		var model = new Model(firstToDoList);
		var view = new View(model);
		var controller = new Controller(model, view);
	});
});
//# sourceMappingURL=main.js.map