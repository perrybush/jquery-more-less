// Author: Perry Bush
// Author Email: pyb24seven AT gmail D0T com
// Version: 1.0
// License: MIT 

(function($) {

    $.fn.moreLess = function( options ) {
    
    	// default settings
        var settings = $.extend({
            readMoreText: 'more ...',
            readLessText: '... less',
            slideSpeed: '2000',
            fadeEffect: true,
            fadeSpeed: 'fast',
            elementsToHide: 'p',
            summaryItems: 1            
        }, options);

        return this.each( function() {
            $( this ).find( settings.elementsToHide ).slice(settings.summaryItems).wrapAll( '<div class="inner-more-less"></div>' );
            
            $( this ).find( '.inner-more-less' ).after( '<div class="more-less-click"><em>' + settings.readMoreText + '</em></div><br>' );
            
            var fadeVal = 0;
			if ( settings.fadeEffect === false ) $( '.inner-more-less' ).css( 'opacity', '1' );
            if ( settings.fadeEffect === false ) fadeVal = 1;
            
            $( this ).find( '.more-less-click' ).click(function() {
				if ( $( this ).prev( '.inner-more-less' ).hasClass( 'down' ) ) {
					$( this ).fadeTo( settings.fadeSpeed, fadeVal );
					$( this ).prev( '.inner-more-less' ).removeClass( 'down' );
					$( this ).prev( '.inner-more-less' ).fadeTo( settings.fadeSpeed, fadeVal, function() {
						$( this ).slideUp(settings.slideSpeed, function() { 
							$( this ).next().children( 'em' ).html( settings.readMoreText );
							$( this ).next().fadeTo( settings.fadeSpeed, 1 );
						});
						
					});					
				} else {
					$( this ).fadeTo( settings.fadeSpeed, fadeVal );
					$( this ).prev( '.inner-more-less' ).addClass( 'down' );
					$( this ).prev( '.inner-more-less' ).slideDown( settings.slideSpeed, function() {
						$( this ).fadeTo( settings.fadeSpeed, 1 );
						$( this ).next().children( 'em' ).html( settings.readLessText );
						$( this ).next().fadeTo( settings.fadeSpeed, 1 );
					});
				}
			});
        });

    }

}(jQuery));