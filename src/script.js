var test = test || {};

test = (function($){

	function insertClass() {
		$('#ha').addClass('paragraph');
	}

	function init() {
		insertClass();
	}

	return {
		init: init
	};
}(jQuery));