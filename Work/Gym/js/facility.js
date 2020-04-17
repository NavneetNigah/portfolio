$(document).ready(function() {
// create an array of the slide images
var image, imageCounter = 0, imageCache = [];
$("#slides img").each(function() {
image = new Image();
image.src = $(this).attr("src");
image.title = $(this).attr("alt");
imageCache[imageCounter] = image;
imageCounter++;
});
// start slide show
imageCounter = 0;
var nextImage;
setInterval(function(){ 
imageCounter = (imageCounter + 1) % imageCache.length;
nextImage = imageCache[imageCounter];
$("#slides").attr("src", nextImage.src).fadeIn(1000);
}, 300);
	//the faq
	$('#link .button').each(function(){
		$(this).click(function(){
			//alert($(this).html());
			$(this).next().toggle(500,'swing');;
		});
	});
});