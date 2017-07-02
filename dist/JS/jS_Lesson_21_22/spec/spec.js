"use strict";

/**
 * Created by Shishkov on 26.06.2017.
 */
var app = require('../js/dist/app.js');

describe("app", function () {
	it("sayHi", function () {
		//prepare
		var result = void 0;
		//act
		result = app.sayHi('Felix');
		expect(result).toBe("Hello, Felix");
	});
	it("pow", function () {
		//prepare
		var result = void 0;
		//act
		result = app.myPow(2, 3);
		expect(result).toBe(8);
	});
	it("sum", function () {
		//prepare
		var result = void 0;
		//act
		result = app.mySum(7, 8);
		expect(result).toBe(15);
	});
});
//# sourceMappingURL=spec.js.map