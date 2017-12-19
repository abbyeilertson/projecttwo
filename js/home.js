$(document).ready(function() {

	$(".title").mouseenter(function() {
		$(".menu").fadeIn(1000);
		//$(".menu").animate({left: "-50px;"}, 2000);
		$(".menu").addClass("test");
	});

	$(".title").mouseleave(function() {
		$(".menu").fadeOut(1000);
		$(".menu").removeClass("test");
	});

});