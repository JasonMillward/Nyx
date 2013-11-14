(function($){
    "use strict";

    var cover_images = function() {
        $(".article .post").each(function() {
            if ( $( this ).find("section.text p:first").has("img").length ) {
                var $image = $( this ).find("section.text p:first img");
                if ( $image.attr("alt") == "cover image") {
                    $( this ).find("section.image").find("img").css("background-image", 'url(' + $image.attr("src") + ')');
                    $( this ).find("section.image").show();
                    $image.remove();
                }
            }
        });
    }

    $(document).ready(function(){
        var $container = $('.articles');
        var pages = jQuery(".pagination span").html().split(" of ");

        cover_images();

        $container.masonry({
            itemSelector: '.article'
        });

        $('.articles').infinitescroll({
            navSelector:    ".pagination",
            nextSelector:   ".pagination a",
            itemSelector:   ".article",
            debug:          false,
            dataType:       'html',
            maxPage:        parseInt(pages[1]),
        }, function(newElements, data, url){
            cover_images();
            setTimeout(function(){
                $('.articles').masonry('reloadItems').masonry('layout');
            }, 500);
        });
    });

}(jQuery));
