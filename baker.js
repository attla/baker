const form = typeof global !== 'undefined' ? global : this,
	baker = function (name, bread) {
		if (
			typeof bread === 'object'
			&& !Array.isArray(bread)
			&& bread.init
		) {
			(initialized = bread.init(form)) && (bread = initialized);
		}

		if (typeof define === 'function' && (define.amd || define.cmd)) {
			define(function () { return bread; });
		} else if (typeof module !== 'undefined' && module.exports) { // commonjs
			module.exports = bread;
		} else {
			form[name] = bread;
		}
	};
