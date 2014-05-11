(function(namespace){
	var browserStorage = function(){
		this.get = function (key) {
			var val = localStorage[namespace+key];
			return (val) ? JSON.parse(val) : undefined;
		};

		this.set = function (key, val) {
			return (arguments.length === 2) ? localStorage[namespace+key] = JSON.stringify(val) : false;
		};

		this.clear = function (key) {
			return delete localStorage[namespace+key];
		};
	};

	window[namespace] = new browserStorage();
})('browserStorage');