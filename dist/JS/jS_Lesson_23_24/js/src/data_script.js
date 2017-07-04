'use strict';

define("data_script", [], function () {
	// alert("data_script");
	var self = this;
	self.initData = function () {
		// alert("Внутри init ");
		self.data = ['test 1', 'test 2', 'test 3'];
	};

	// alert(self.data);
	self.addItem = function (item) {
		if (item.length === 0) {
			return;
		}
		self.data.push(item);
		return self.data;
	};
	self.removeItem = function (item) {
		var index = self.data.indexOf(item);
		if (index === -1) {
			return;
		}
		self.data.splice(index, 1);
		return self.data;
	};
	return self;
});
//# sourceMappingURL=data_script.js.map