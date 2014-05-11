(function(namespace){
	if (Modernizr) {
		Modernizr.load({
			test: Modernizr.localstorage,
			nope: 'polyfill/localStorage.js'
		},{
			test: window.JSON,
			nope: 'polyfill/json.js'
		});
	}

	var browserStorage = function(){
		this.get = function (key) {
			var val = localStorage.getItem(namespace+key);
			return (val) ? JSON.parse(val) : undefined;
		};

		this.set = function (key, val) {
			return (arguments.length === 2) ? localStorage.setItem(namespace+key, JSON.stringify(val)) : false;
		};

		this.clear = function (key) {
			return localStorage.removeItem(namespace+key);
		};
	};

	window[namespace] = new browserStorage();
})('browserStorage');