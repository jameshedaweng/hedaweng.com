var themeAbout = "#F58100";
var themeCurriculum = "#F2594B";
var themePortfolio = "#67497D";
var bgGray = "#333333";
var paperWhite = "#E7E1D4";
var paperWhiteLite = "#FFF8EA";

$(document).ready(function(){
	actionsOnLoad();
	centerIntro();
	centerLogo();
	introAnim();
	fixNavbar();

	menuColorAnim();
	menuColorHover();

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
	if (window.innerWidth < 280 / 0.6){
		imageH = 280 * 0.8;
	}
};

function centerLogo(){
	getLogoSize();
	paddingTop = (window.innerHeight - imageH)/2 - 10;
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
		$("#navbar-main").toggleClass("fixed", $(document).scrollTop() >= $("#about").offset().top);
	});
};

function menuColorAnim(){
	var colorChanged = false;
	$(document).on("scroll", function() {
		if ($(document).scrollTop() >= $("#curriculum").offset().top && !colorChanged){
			$( ".menu-icon-line" ).velocity({
				stroke: paperWhiteLite
			});
			colorChanged = true;
		}
		if ($(document).scrollTop() < $("#curriculum").offset().top && colorChanged){
			$( ".menu-icon-line" ).velocity({
				stroke: themeAbout
			});
			colorChanged = false;
		}
	});
};

function menuColorHover(){
	$("#menu-icon-container").mouseenter(function(){
		var menuBg, menuContent;
		if ($(document).scrollTop() >= $("#curriculum").offset().top){
			menuBg = paperWhiteLite;
			if ($(document).scrollTop() >= $("#portfolio").offset().top){
				menuContent = themePortfolio;
			}
			else{
				menuContent = themeCurriculum;
			}
		}
		else{
			menuBg = themeAbout;
			menuContent = paperWhite;
		}
		$(this).addClass("menu-hover");
		$(".menu-hover #menu-icon-bg").velocity({
			backgroundColor: menuBg,
			opacity: 1
		}, {
			duration: 200
		});
		$(".menu-hover .menu-icon-line").velocity({
			stroke: menuContent
		},{
			duration: 200
		});
	}).mouseleave(function(){
		$(".menu-hover #menu-icon-bg, .menu-hover .menu-icon-line").velocity("stop");
		$(".menu-hover #menu-icon-bg, .menu-hover .menu-icon-line").velocity("reverse");
		$(this).removeClass("menu-hover");
	});
};
