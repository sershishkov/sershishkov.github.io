'use strict';

/**
 * Created by Shishkov on 26.06.2017.
 */
var app = {
	sayHi: function sayHi(name) {
		return 'Hello, ' + name;
	},
	myPow: function myPow(x, n) {
		var result = x;
		for (var i = 1; i < n; i++) {
			result *= x;
		}
		return result;
	},
	mySum: function mySum(a, b) {
		return a + b;
	}
};

try {
	module.exports = app;
} catch (e) {}
//# sourceMappingURL=app.js.map