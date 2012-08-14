/**
 * hoverExpandy! plugin
 * peek-a-boo.
 * @author Phil Steer
 * https://github.com/pdincubus/jquery.Expandy
 * initial settings are based on five li items in a 1000px wide space
 * Include Easing plugin for further animation options
 */
 
 (function($){
  $.fn.hoverExpandy = function(options){
  
	// Create some defaults, extending them with any options that were provided
	var settings = $.extend( {
	  'slideElement' 			: 'li',			//the elements under the container that will be expandable
	  'animationDuration' 		: 500,			//milliseconds - currently applied to both text and box resizing
	  'slideEasing'				: 'swing',		//default options are swing or linear
	  'compressedSize'			: '125px',		//size of boxes when small
	  'expandedSize'			: '500px',		//size of the "expandy"
	  'firstOpen'				: 0			//eq starts from zero, not one. which box should be opened first automatically
	}, options);

	return this.each(function() {
		var slides = '#' + $(this).attr('id');
		var slideItem = slides + ' > li';
		var slideLink = slides + ' > ' + settings.slideElement + ' > a';
		var slideHeight = $(slideItem).height() +'px';
		console.log(slideHeight);
		
		//do some initial stuff
		var first = $($(slides + ' ' + settings.slideElement).get(settings.firstOpen));
		
		first.animate({
			width : settings.expandedSize
		}, settings.animationDuration, settings.slideEasing, function(){
			$(this).find(settings.textElement).animate({
				fontSize : settings.fontSizeLarge
			}, settings.animationDuration, settings.textSizeEasing);
		}).addClass('active');
		
		$(slideItem).on({
			
			mouseover: function(){
				
				//it's not expanded yet, so do it!
				$(this).siblings().stop().animate({
					width : settings.compressedSize
				}, settings.animationDuration, settings.slideEasing, function(){
					$(this).find(settings.textElement).animate({
						fontSize : settings.fontSizeSmall
					}, settings.animationDuration, settings.textSizeEasing);
				}).removeClass('active').children('.info').stop().animate({
					opacity: 0
				});
							
				$(this).stop().animate({
					width : settings.expandedSize
				}, settings.animationDuration, settings.slideEasing, function(){
					$(this).find(settings.textElement).animate({
						fontSize : settings.fontSizeLarge
					}, settings.animationDuration, settings.textSizeEasing);
				}).addClass('active').children('.info').stop().animate({
					opacity: 1
				});
				
			},
			
			mouseout: function(){
				$(this).children('.info').stop().animate({
					opacity: 0
				});
			}

		});				
	});
  };
})(jQuery);