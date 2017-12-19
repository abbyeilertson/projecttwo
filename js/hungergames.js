$(document).ready(function() {

	$(".go_top").click(function() {
		$('html, body').animate({
			scrollTop: $("body").offset().top /*Scroll top means at the very top of the page, and 900 is the speed)*/
		}, 900);

	});


	$(".go_one").click(function() {
		$('html, body').animate({
			scrollTop: $(".one").offset().top
		}, 900);

	});


	$(".go_two").click(function() {
		$('html, body').animate({
			scrollTop: $(".two").offset().top
		}, 900);

	});


	$(".go_three").click(function() {
		$('html, body').animate({
			scrollTop: $(".three").offset().top
		}, 900);

	});


/* Hover on navigation buttons */
	$(".go_top").mouseenter(function() {
		$(".buttontop").fadeTo("fast", 1);
	});

		$(".go_top").mouseleave(function() {
			$(".buttontop").fadeTo("fast", 0);
		});

	$(".go_one").mouseenter(function() {
		$(".buttonone").fadeTo("fast", 1);
	});

		$(".go_one").mouseleave(function() {
			$(".buttonone").fadeTo("fast", 0);
		});

	$(".go_two").mouseenter(function() {
		$(".buttontwo").fadeTo("fast", 1);
	});

		$(".go_two").mouseleave(function() {
			$(".buttontwo").fadeTo("fast", 0);
		});

	$(".go_three").mouseenter(function() {
		$(".buttonthree").fadeTo("fast", 1);
	});

		$(".go_three").mouseleave(function() {
			$(".buttonthree").fadeTo("fast", 0);
		});

	


	var winHeight = $(window).innerHeight(); /*this measures the browser window height*/

	$(".panel").height(winHeight); /*each small panel's height is adjusted to be just as tall as the broswer window*/

	$(window).on('scroll', function() {
		$(".right").css('bottom', $(window).scrollTop()*-1);
	}); /*multiplying scrollTop with the value -1 will reverse the scroll direction in the left panel */

	/*$(window).on('scroll', function() {
		$(".right").css('bottom', $(window).scrollTop()*-1);
	}); */


	$(".title").mouseenter(function() {
		$(".menu").fadeIn(1000);
			$(".menu").addClass("test");
	});

	$(".title").mouseleave(function() {
			$(".menu").fadeOut(1000);
			$(".menu").removeClass("test");
	});


});

$(document).scroll(function() {
	var y = $(document).scrollTop(); /*measures vertical position of scroll bar and stores the value in 'y' */
	$("#update").html(y);

	if (y > 754) {
		$(".left").css('bottom', $(window).scrollTop()*-1 + 754);
	}

	else {
		$(".left").css('bottom', $(window).scrollTop()*0);
	}

});
	
	
