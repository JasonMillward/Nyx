(function($){
	"use strict";
	$(document).ready(function(){
        var $container = $('.articles');
        $container.masonry({
            itemSelector: '.article'
        });
	});
}(jQuery));
