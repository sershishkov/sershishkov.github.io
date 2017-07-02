'use strict';

define("control_script", ['jquery', 'lodash'], function (model, view) {
	alert("control");
	$('.item-add').on('click', addItem);
	$('.item-list').on('click', '.item-delete', removeItem);
	function addItem() {
		var newItem = $('.item-value').val();
		model.addItem(newItem);
		view.renderList(model.data);
		$('.item-value').val('');
	}
	function removeItem() {
		var item = $(this).attr('data-value');
		model.removeItem(item);
		view.renderList(model.data);
	}
	// return model;
});
//# sourceMappingURL=control_script.js.map