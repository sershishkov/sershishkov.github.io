/**
 * Created by Shishkov on 01.07.2017.
 */
'use strict';
function Model(data) {
	let self = this;
	self.data = data;
	self.addItem = function (item) {
		if (item.length === 0){
			return;
		}
		self.data.push(item);
		return self.data;
	};
	self.removeItem= function (item) {
		let index = self.data.indexOf(item);
		if (index === -1) {
			return;
		}
		self.data.splice(index,1);
		return self.data;
	};
}
/////////////////////////////////////////////////////////////////
function View(model) {
	let self = this;
	function init() {
		let wrapper = _.template($('#wrapper-template').html());
		$('body').append(wrapper);
		self.renderList(model.data);
	}

	self.renderList = function (data) {
		let List = _.template($('#list-template').html());
		let content = List({'data':data});
		$('.item-list').html(content);
	};
	init();
}
////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////
$(function () {
	let firstToDoList = ['test 1','test 2','test 3'];
	let model = new Model(firstToDoList);
	let view = new View(model);
	let controller = new Controller(model,view);


	
});