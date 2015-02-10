$(document).ready(function(){
	centerError();
	$(".error-body").fadeIn(1000);

	$(window).resize(function() {
		centerError();
	});
});

function centerError(){
	imageH = 300;
	if (window.innerWidth * 0.8 < imageH * 2){
		imageH = window.innerWidth * 0.8 / 2;
	}
	paddingTop = (window.innerHeight - imageH)/2;
	$(".error-body").css("padding-top", paddingTop);
};