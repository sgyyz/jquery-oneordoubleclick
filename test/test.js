"use strict";
module("click test");
test("one click", function() {
	$('input[type="button"]').oneordoubleclick({
		interval: 100,
		oneclick: function(){
	        $('#result').html('you have click this node.');
	        
	    }, 
	    dblclick: function() {
	        $('#result').html('you have double click this node.');
	        done();
	    }
	});

	$('input[type="button"]').click();
	stop();

	setTimeout(function() {
		equal($('#result').html(), 'you have click this node.');
		start();
	}, 200);
	
});