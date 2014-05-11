function runTests () {
	console.log("browserStorage.get('something')");
	console.log(browserStorage.get('something'));

	console.log("localStorage.clear()");
	localStorage.clear();

	console.log("browserStorage.get('something')");
	console.log(browserStorage.get('something'));

	console.log("browserStorage.set('something', 'something else')");
	console.log(browserStorage.set('something', 'something else'));

	console.log("browserStorage.get('something')");
	console.log(browserStorage.get('something'));

	var myObject = {
		"one": 1,
		"two": 2,
		"three": 3
	};
	console.log(myObject);
	console.log("browserStorage.set('myObject', myObject)");
	console.log(browserStorage.set('myObject', myObject));
	console.log("browserStorage.get('myObject').two");
	console.log(browserStorage.get('myObject').two);

	console.log("browserStorage.set('something', 'this will persist')");
	console.log(browserStorage.set('something', 'this will persist'));

	return "Tests complete.";
}


(function(){
	var formData = browserStorage.get('formData') || {},
		debounce;

	function persistForm (e) {
		clearTimeout(debounce);
		formData[this.name] = this.value;

		debounce = setTimeout(function(){
			browserStorage.set('formData', formData);
		}, 200);
	}

	[].forEach.call(document.forms['sample-form'].elements, function(element){
		element.onkeyup = persistForm;

		if (formData[element.name])
			element.value = formData[element.name];
	});
})();