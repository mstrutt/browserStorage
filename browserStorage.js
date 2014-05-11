(function(namespace){
	var browserStorage = function(){
		var data = false,
			init = function() {
				data = JSON.parse(localStorage.getItem(namespace)) || {};
			};

		this.get = function (key) {
			if (!data) init();
			return data[key];
		};

		this.set = function (key, val) {
			if (!data) init();
			if (arguments.length === 2) {
				data[key] = val;
				localStorage.setItem(namespace, JSON.stringify(data));
			}
			return arguments.length === 2;
		};

		this.clear = function (key) {
			if (!data) init();
			delete data[key];
			localStorage.setItem(namespace, JSON.stringify(data));
		};
	};

	window[namespace] = new browserStorage();
})('browserStorage');