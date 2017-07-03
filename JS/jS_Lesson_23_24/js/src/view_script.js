'use strict';
define(
	"view_script",
	 ['jquery','lodash',"data_script"],
	function ($,lodash,model) {
		alert("view_script ");
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
		return model;

	}

);

