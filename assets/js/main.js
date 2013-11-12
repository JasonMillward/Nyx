
var container = document.querySelector('.articles');
var msnry = new Masonry( container, {
	itemSelector: '.article'
});

(function($){
	"use strict";
	$(document).ready(function(){
		$(".tags p").each(function() {
			if ( !$( this ).text().trim().length) {
				$( this ).parent().remove();
			} 
		});	
	});
}(jQuery));