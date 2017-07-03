'use strict';

require.config = {
	baseUrl: 'js/src/',
	paths: {
		'jquery': 'js/src/jquery.js',
		'lodash': 'js/src/lodash.js'
	}

};
require(["data_script", "view_script", "control_script", "jquery", "lodash"], function (data_script, view_script, control_script, $) {
	var firstToDoList = ['test 1', 'test 2', 'test 3'];
	var model = new data_script(firstToDoList);
	var view = new view_script(model);
	var controller = new control_script(model, view);
});
// $(function () {
//
// });
//# sourceMappingURL=main.js.map