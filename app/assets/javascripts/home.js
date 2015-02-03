$(document).ready(function(){
	actionsOnLoad();
	centerIntro();
	centerLogo();
	introAnim();
	fixNavbar();
	colorAnim();

	$(window).resize(function() {
		centerLogo();
		centerIntro();
	});
});

function actionsOnLoad(){
	document.ontouchstart = function(e){ e.preventDefault(); }
	$(window).on('beforeunload', function(){
		$("body").scrollTop(0);
	});

	$(window).on('pageshow', function(){
		$("body").scrollTop(0);
	});
}

function centerIntro(){
	marginTop = (window.innerHeight - 80)/2;
	$("#intro-0").css("margin-top", marginTop);
	$("#intro-1").css("margin-top", marginTop);
};

function getLogoSize(){
	imageH = 480;
	if (window.innerWidth * 0.6 * 0.8 < imageH){
		imageH = window.innerWidth * 0.6 * 0.8;
	}
	if (window.innerHeight < imageH){
		imageH = window.innerHeight;
	}
};

function centerLogo(){
	getLogoSize();
	paddingTop = (window.innerHeight - imageH)/2;
	$("#logo").css("padding-top", paddingTop);
};

function introAnim(){
	setTimeout(function(){
		$("#intro-0").fadeTo(1000, 1).delay(1000).fadeTo(1000, 0, function(){
			$(this).hide();
			setTimeout(function(){
				$("#intro-1").fadeTo(1000, 1).delay(1000).fadeTo(1000, 0, function(){
					$(this).hide();
					setTimeout(function(){
						$("#logo").stop().show();
						setTimeout(function(){
							$("#scr-continue").fadeTo(500, 1, function(){
								$("html, body").css("overflow-y", "auto");
								document.ontouchstart = function(e){ return true; }
							});
						}, 1500);
					}, 500);
				});
			}, 500);
		});
	}, 500);
};

function fixNavbar(){
	$(document).on("scroll", function() {
		$("#navbar-main").toggleClass("fixed", $(document).scrollTop() >= $("#start-screen").height());
	});
};

function colorAnim(){
	$(document).on("scroll", function() {
		if ($(document).scrollTop() < $("#about").offset().top){
			$( "#navbar-main" ).stop().animate({
				backgroundColor: "#333333"
			}, 500);
		}
		if ($(document).scrollTop() >= $("#about").offset().top &&
				$(document).scrollTop() < $("#curriculum").offset().top){
			$( "#navbar-main" ).stop().animate({
				backgroundColor: "#EF980B"
			}, 500);
		}
		if ($(document).scrollTop() >= $("#curriculum").offset().top &&
				$(document).scrollTop() < $("#portfolio").offset().top){
			$( "#navbar-main" ).stop().animate({
				backgroundColor: "#FFF8EA"
			}, 500);
		}
		if ($(document).scrollTop() >= $("#portfolio").offset().top &&
				$(document).scrollTop() < $("#contact").offset().top){
			$( "#navbar-main" ).stop().animate({
				backgroundColor: "#F2594B"
			}, 500);
		}
		if ($(document).scrollTop() >= $("#contact").offset().top){
			$( "#navbar-main" ).stop().animate({
				backgroundColor: "#67497D"
			}, 500);
		}
	});
};
