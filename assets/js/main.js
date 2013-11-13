(function($){
	"use strict";
	$(document).ready(function(){
        $(".article .post").each(function() {

        	if ( $( this ).find("section.text p:first").has("img").length ) {
        		var $image = $( this ).find("section.text p:first img");

        		if ( $image.attr("alt") == "cover image") {
        			console.log("Cover image found");

        			$( this ).find("section.image").find("img").css("background-image", 'url(' + $image.attr("src") + ')');
        			$( this ).find("section.image").show();

        			$image.remove();
        		}
        	}
        });

        var $container = $('.articles');
        $container.masonry({
            itemSelector: '.article'
        });
	});
}(jQuery));
