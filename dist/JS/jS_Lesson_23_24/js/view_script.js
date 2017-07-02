/**
 * Created by Shishkov on 30.06.2017.
 */
'use strict';

define('view_script',
// [lodash],
function View(model) {
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
});
//# sourceMappingURL=view_script.js.map