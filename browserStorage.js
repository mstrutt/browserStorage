(function(){
	var browserStorage = function(){
		var data = {};

		this.get = function (key) {
			return data[key];
		};

		this.set = function (key, val) {
			if (arguments.length === 2)
				data[key] = val;
			else
				return false;
		};

		this.clear = function (key) {
			delete data[key];
		};
	};

	window.browserStorage = new browserStorage();
})();