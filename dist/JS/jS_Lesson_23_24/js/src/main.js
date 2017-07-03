'use strict';

require.config = {
	baseUrl: 'js/src',
	paths: {
		jquery: 'jquery',
		lodash: 'lodash',
		data_script: 'data_script',
		view_script: 'view_script',
		control_script: 'control_script'
	}

};
require(["jquery", "lodash", "data_script", "view_script", "control_script"], function ($, lodash, data_script, view_script, control_script) {
	$(function () {
		var model = new data_script();
		model.initData();
		var view = new view_script(model);
		var controller = new control_script(model, view);
		alert(controller);
	});
});
//# sourceMappingURL=main.js.map