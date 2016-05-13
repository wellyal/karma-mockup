var test = test || {};

test = (function($){

	function insertClass() {
		$('#ha').addClass('paragraph');
		console.log('hey');
	}

	function init() {
		insertClass();
	}

	return {
		init: init
	};
}(jQuery));