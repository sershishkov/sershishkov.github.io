'use strict';

define("view_script", ['jquery', 'lodash', "data_script"], function ($, lodash, model) {
	alert("view_script ");
	var self = this;
	function init() {
		var wrapper = _.template($('#wrapper-template').html());
		$('body').append(wrapper);
		self.renderList(model.data);
	}

	self.renderList = function (data) {
		var List = _.template($('#list-template').html());
		var content = List({ 'data': data });
		$('.item-list').html(content);
	};
	init();
	return model;
});
//# sourceMappingURL=view_script.js.map