$(document).ready(function() {

	var winHeight = $(window).innerHeight(); /*this measures the browser window height*/

		$(".panel").height(winHeight); /*each small panel's height is adjusted to be just as tall as the broswer window*/

		$(window).on('scroll', function() {
			$(".right").css('bottom', $(window).scrollTop()*-1);
	});


});



	
	
