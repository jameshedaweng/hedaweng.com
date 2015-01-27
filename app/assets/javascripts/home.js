$(document).ready(function(){
	
	$(window).on('beforeunload', function(){
		$(window).scrollTop(0);
	});
	
	centerIntro();
	centerLogo();
	
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
								$("body").css("overflow-y", "auto");
							});
						}, 1500);
					}, 500);
				});
			}, 500);
		});
	}, 500);

	$(window).resize(function() {
		centerLogo();
		centerIntro();
	});
});

function centerIntro(){
	marginTop = (window.innerHeight - 80)/2;
	$("#intro-0").css("margin-top", marginTop);
	$("#intro-1").css("margin-top", marginTop);
}

function getLogoSize(){
	imageH = 480;
	if (window.innerWidth * 0.6 * 0.8 < imageH){
		imageH = window.innerWidth * 0.6 * 0.8;
	}
	if (window.innerHeight < imageH){
		imageH = window.innerHeight;
	}
}

function centerLogo(){
	getLogoSize();
	paddingTop = (window.innerHeight - imageH)/2;
	$("#logo").css("padding-top", paddingTop);
}

