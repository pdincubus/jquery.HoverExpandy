# jquery.HoverExpandy plugin

Lets you turn a list (or a div with things in it) into an expandable showcase on mouse hover.

## Basic example

[View the demo](pdincubus.github.com/jquery.HoverExpandy/) for a working example

### HTML

I'd usually use an unordered list, but i guess this should work just as well with a div with a load of divs inside it too.

```html
<ul class="cf" id="expandy">
	<li class="first">
		<img src="img/6881280664_3da4704890.jpg">
		<a href="http://www.flickr.com/photos/dsnine/6881280664/in/photostream" class="info">
			Toad
		</a>
	</li>
	<li class="second">
		<img src="img/7181531455_a01b90f87d.jpg">
		<a href="http://www.flickr.com/photos/dsnine/7181531455/in/photostream" class="info">
			Owl
		</a>
	</li>
	<li class="third">
		<img src="img/7551308320_dbbb75c71b.jpg">
		<a href="http://www.flickr.com/photos/dsnine/7551308320/in/photostream" class="info">
			Ladybird
		</a>
	</li>
	<li class="fourth">
		<img src="img/7551311698_666de2a3a8.jpg">
		<a href="http://www.flickr.com/photos/dsnine/7551311698/in/photostream" class="info">
			Common Blue
		</a>
	</li>
	<li class="fifth">
		<img src="img/7581409432_972b80d832.jpg">
		<a href="http://www.flickr.com/photos/dsnine/7581409432/in/photostream" class="info">
			Green bottle
		</a>
	</li>
</ul>
```

### CSS

Chuck a bit of CSS in there. See the demo HTML file for a sensible example.

### jQuery

Make sure you have called jQuery, pulled in the HoverExpandy js file (and easing if you want those effects too) before you try to run hoverExpandy:

```html
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="http://cachedcommons.org/cache/jquery-easing/1.3.0/javascripts/jquery-easing-min.js"></script>
<script type="text/javascript" src="/path/to/js/jquery.HoverExpandy.js"></script>
```

Call expandy to run. This doesn't have to be $(window).load, it could be $(document).ready if that makes you happy. $(window).load is better if you're waiting for images and so forth to finish loading before you invoke expandy to start.

There are some defaults set, but you're probably going to want to change them to something that suits your needs.

Example from the demo HTML file:

```javascript
$(window).load(function() {
	$('#expandy').hoverExpandy({
		'animationDuration' : 500,
		'slideEasing'		: 'easeOutQuint',
		'firstOpen'			: 0
	});
});
```

The full list of configurable settings (and the defaults) are as follows:

```javascript
'slideElement' 			: 'li',			//the elements under the container that will be expandable
'animationDuration' 		: 500,			//milliseconds - currently applied to both text and box resizing
'slideEasing'				: 'swing',		//default options are swing or linear
'compressedSize'			: '125px',		//size of boxes when small
'expandedSize'			: '500px',		//size of the "expandy"
'firstOpen'				: 0			//eq starts from zero, not one. which box should be opened first automatically
```

The default settings are based on the container for the expandy being 1000px wide and containing 5 child items. You'll need to adjust accordingly depending on how many expandy boxes you want.

## Browsers

I've tested and seen this working on Chrome and Firefox on Mac. Therefore it should work without hitches in Firefox, Chrome, Safari, Opera, IE10. It should probably work ok in IE7, 8 and 9 as well. No promises for IE6.