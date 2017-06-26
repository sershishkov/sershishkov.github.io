/**
 * Created by Shishkov on 26.06.2017.
 */
const app = {
	sayHi: function (name) {
		return 'Hello, ' + name;
	},
	myPow: function (x,n) {
		let result = x;
		for (let i = 1; i < n; i++) {
			result *= x;
		}
		return result;
	},
	mySum: function (a,b) {
		return a+b;
	}
};


try {
	module.exports = app;
}catch (e) {

}


