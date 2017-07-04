'use strict';

function Controller(model,view) {
	$('.item-add').on('click',addItem);
	$('.item-list').on('click','.item-delete',removeItem);
	function addItem() {
		let newItem = $('.item-value').val();
		model.addItem(newItem);
		view.renderList(model.data);
		$('.item-value').val('');
	}
	function removeItem() {
		let item = $(this).attr('data-value');
		model.removeItem(item);
		view.renderList(model.data);
	}
}
