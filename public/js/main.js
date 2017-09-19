jQuery(document).ready(function(){
	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');

		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');

			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	}
});

$(document).ready(function(){
		if (Modernizr.touch) {
				// show the close overlay button
				$(".close-overlay").removeClass("hidden");
				// handle the adding of hover class when clicked
				$(".img").click(function(e){
						if (!$(this).hasClass("hover")) {
								$(this).addClass("hover");
						}
				});
				// handle the closing of the overlay
				$(".close-overlay").click(function(e){
						e.preventDefault();
						e.stopPropagation();
						if ($(this).closest(".img").hasClass("hover")) {
								$(this).closest(".img").removeClass("hover");
						}
				});
		} else {
				// handle the mouseenter functionality
				$(".img").mouseenter(function(){
						$(this).addClass("hover");
				})
				// handle the mouseleave functionality
				.mouseleave(function(){
						$(this).removeClass("hover");
				});
		}
});
