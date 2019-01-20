$(document).ready(function() {
	date();
	var musicplaying;
	$('#restart').click(function() {
		window.location.reload();
	});
	$('#gameoptions').click(function() {
		$('#options').fadeToggle('fast');
		$('#gamestart').css('display', 'none');
	});
	$('#easy')
		.hover(function() {
			$(this).css('color','#3426E7');
		}, function() {
			$(this).css('color', 'black');
		})
		.click(function() {
			$('#titlepicture').attr('src', 'images/Cinematic Title BABY.png');
			$(this).css('border-color', '#33B5E5');
			$('#medium').css('border-color', '#e0e011');
			$('#hard').css('border-color', '#9b2626');
			$('#main').fadeIn("slow");
			$('#gamemenu').css('display', 'none');
			$('#gamestart').css('display', 'none');
			$('#gamebuttons').fadeIn("slow");
			$('#expositionpt2').css('display', 'inline-block');
			newGame();
		});
	$('#medium')
		.hover(function() {
			$(this).css('color', '#008403');
		}, function() {
			$(this).css('color', "black");
		})
		.click(function(){
			$('#titlepicture').attr('src', 'images/Cinematic Title.png');
			$(this).css('border-color', '#33B5E5');
			$('#easy').css('border-color', '#33a325');
			$('#hard').css('border-color', '#9b2626');
			$('#main').fadeIn("slow");
			$('#gamemenu').css('display', 'none');
			$('#gamestart').css('display', 'none');
			$('#gamebuttons').fadeIn("slow");
			$('#expositionpt2').css('display', 'inline-block');
			newGame();
		});
	$('#hard')
		.hover(function() {
			$(this).css('color', '#FF7200');
		}, function() {
			$(this).css('color', 'black');
		})
		.click(function() {
			$('#titlepicture').attr('src', 'images/Cinematic Title BLOODY.png');
			$(this).css('border-color', '#33B5E5');
			$('#easy').css('border-color', '#33a325');
			$('#medium').css('border-color', '#e0e011');
			$('#gamemenu').css('display', 'none');
			$('#gamestart').css('display', 'none');
			$('#main').fadeIn("slow");
			$('#gamebuttons').fadeIn("slow");
			$('#expositionpt2').css('display', 'inline-block');
			newGame();
		});
	var backgroundaudio = document.createElement('audio');
	backgroundaudio.setAttribute('src', 'OldSchool RuneScape Login Screen Music.mp3');
	$('#musicon').click(function() {
		$(this).css('color', 'red');
		$('#musicoff').css('color', 'black');
		$('#musicbuttons').fadeIn();
	});
	$('#musicoff').click(function() {
		$(this).css('color', 'red');
		$('#musicon').css('color', 'black');
		backgroundaudio.pause();
		backgroundaudio.currentTime = 0;
		$('#musicbuttons').fadeOut();
	});
	$('#playpauseaudio')
		.click(function() {
			if (backgroundaudio.paused) {
				$(this).attr('src', 'images/pausebutton.png');
				backgroundaudio.play();
				$('#nowplaying').fadeIn('fast');
				$('#scrollingdiv').fadeIn('fast');
				musicplaying = $(backgroundaudio).attr('src');
				$('#h5scrolling').html('<marquee behavior = "alternate" scrollamount="2"><span id ="musicplaying">' + musicplaying + '</span></marquee>');
			}
			else {
				$(this).attr('src', 'images/playbutton.png');
				backgroundaudio.pause();
				$('#nowplaying').fadeOut('fast');
				$('#scrollingdiv').fadeOut('fast');
			}
		})
		.mousedown(function() {
			if (backgroundaudio.paused) {
				$(this).attr('src', 'images/playbuttonpresseddown.png');
			}
			else {
				$(this).attr('src', 'images/pausebuttonpresseddown.png');
			}
		});
	$("#stopaudio")
		.click(function() {
			$(this).attr('src', 'images/stopbutton.png');
			$('#playpauseaudio').attr('src', 'images/playbutton.png');
			backgroundaudio.pause();
			backgroundaudio.currentTime = 0;
			$('#nowplaying').fadeOut('fast');
			$('#scrollingdiv').fadeOut('fast');
		})
		.mousedown(function() {
			$(this).attr('src', 'images/stopbuttonpresseddown.png');
		});
	$('#startgame').click(function(){
		$('#gamestart').fadeToggle("fast");
		$('#options').css('display', 'none');
	});
	$('#expositionpt2').click(function() {
		expositionpt2();
		$('#expositionpt2').css('display', 'none');
		$('#expositionpt3').fadeIn('slow');
	});
	$('#expositionpt3').click(function() {
		expositionpt3();
		$('#expositionpt3').css('display', 'none');
		$('#acceptweapon').fadeIn('slow');
	});
	$('#acceptweapon').click(function() {
		$('.SoulSlayer').css('display', 'block');
		$('.BloodThirster').css('display', 'block');
		$('.DevilDestroyer').css('display', 'block');
		$('#acceptweapon').css('display', 'none');
		$('#expositionpt4').fadeIn('slow');
	});
	$('#expositionpt4').click(function() {
		$('#expositionpt4').css('display', 'none');
		expositionpt4();
		$('#bluecard').fadeIn('slow');
		$('#redcard').fadeIn('slow');
		$('#greencard').fadeIn('slow');
	});
	$('#bluecard').click(function() {
		bluecard();
		$('#bluecard').css('display', 'none');
		$('#redcard').css('display', 'none');
		$('#greencard').css('display', 'none');
		$('#journey1').fadeIn('slow');
	});
	$('#redcard').click(function() {
		redcard();
		$('#bluecard').css('display', 'none');
		$('#redcard').css('display', 'none');
		$('#greencard').css('display', 'none');
		$('#journey1').fadeIn('slow');
	});
	$('#greencard').click(function() {
		greencard();
		$('#bluecard').css('display', 'none');
		$('#redcard').css('display', 'none');
		$('#greencard').css('display', 'none');
		$('#journey1').fadeIn('slow');
	});
	$('#journey1').click(function() {
		Journeypt1();
		displaycharacterStats();
		window.scrollTo(0,document.body.scrollHeight);
		$('#journey1').css('display', 'none');
		$('#characterstats').fadeIn('slow');
		$('#journey2').fadeIn('slow');
	});
	$('#journey2').click(function() {
		Journeypt2();
		$('#journey2').css('display','none');
		$('#getfruit').fadeIn('slow');
		$('#leavefruit').fadeIn('slow');
	});
	$('#getfruit').click(function() {
		getFruit();
		$('#getfruit').css('display', 'none');
		$('#leavefruit').css('display', 'none');
		$('#journey3').fadeIn('slow');
	});
	$('#leavefruit').click(function() {
		leaveFruit();
		$('#leavefruit').css('display', 'none');
		$('#getfruit').css('display', 'none');
		$('#journey3').fadeIn('slow');
	});
	$('#journey3').click(function() {
		Journeypt3();
		$('#journey3').css('display', 'none');
		$('#goblinfight').fadeIn('slow');
	});
	$('#goblinfight').click(function() {
		$('#goblinfight').css('display', 'none');
		$('#goblinattack').fadeIn('slow');
		$('#goblinstats').fadeIn('slow');
		$('#goblinItem').fadeIn('slow');
		$('#goblinflee').fadeIn('slow');
		prepareCombat();
	});
	$('#goblinattack').click(function() {
		fightGoblin();
		window.scrollTo(0,document.body.scrollHeight);
		if (Goblin.health === 0) {
			$('#goblinattack').css('display', 'none');
			$('#goblinItem').css('display', 'none');
			$('#goblinflee').css('display', 'none');
			$('#journey4').fadeIn('slow');
		}
		else if (Character.health === 0) {
			$('#goblinattack').css('display', 'none');
			$('#goblinItem').css('display', 'none');
			$('#goblinflee').css('display', 'none');
			$('#restart').fadeIn('slow');
		}
	});
	$('#goblinItem').click(function() {
		$('#goblinItem').css('display', 'none');
		useItem();
		window.scrollTo(0,document.body.scrollHeight);
		if (Goblin.health === 0) {
			$('#goblinattack').css('display', 'none');
			$('#goblinItem').css('display', 'none');
			$('#goblinflee').css('display', 'none');
			$('#journey4').fadeIn('slow');
		}
	});
	$('#goblinflee').click(function() {
		goblinflee();
		window.scrollTo(0,document.body.scrollHeight);
		if (fleed === true) {
			$('#goblinattack').css('display', 'none');
			$('#goblinItem').css('display', 'none');
			$('#goblinflee').css('display', 'none');
			$('#journey4').fadeIn('slow');
		}
		$('#goblinstats').fadeOut('slow');
	});
	$('#journey4').click(function() {
		Journeypt4();
		$('#journey4').css('display', 'none');
		$('#rest').fadeIn('slow');
		$('#norest').fadeIn('slow');
		$('#goblinstats').fadeOut('slow');
	});
	$('#rest').click(function() {
		longrest();
		$('#rest').css('display', 'none');
		$('#norest').css('display', 'none');
		$('#journey5').fadeIn('slow');
	});
	$('#norest').click(function() {
		norest();
		$('#rest').css('display', 'none');
		$('#norest').css('display', 'none');
		$('#journey5').fadeIn('slow');
	});
	$('#journey5').click(function() {
		Journeypt5();
		$('#journey5').css('display', 'none');
		$('#dragonfight').fadeIn('slow');
	});
	$('#dragonfight').click(function() {
		$('#dragonfight').css('display', 'none');
		$('#dragonattack').fadeIn('slow');
		$('#dragonitem').fadeIn('slow');
		$('#dragonstats').fadeIn('slow');
		prepareCombat2();
	});
	$('#dragonattack').click(function() {
		fightDragon();
		window.scrollTo(0,document.body.scrollHeight);
		if (Dragon.health === 0) {
			$('#dragonattack').css('display', 'none');
			$('#dragonitem').css('display', 'none');
			$('#journey6').fadeIn('slow');
		}
		else if (Character.health === 0) {
			$('#dragonattack').css('display', 'none');
			$('#dragonitem').css('display', 'none');
			$('#restart').fadeIn('slow');
		}
	});
	$('#dragonitem').click(function() {
		$('#dragonitem').css('display', 'none');
		useItem2();
		window.scrollTo(0,document.body.scrollHeight);
		if (Dragon.health === 0) {
			$('#dragonattack').css('display', 'none');
			$('#journey6').fadeIn('slow');
		}
	});
	$('#journey6').click(function() {
		Journeypt6();
		$('#journey6').css('display', 'none');
		$('#dragonstats').fadeOut('slow');
		$('characterstats').fadeOut('slow');
		$('#backtotown').fadeIn('slow');
		$('#goalone').fadeIn('slow');
	});
	$('#backtotown').click(function() {
		backtotown();
		$('#backtotown').css('display', 'none');
		$('#goalone').css('display', 'none');
		$('#restart').fadeIn('slow');
	});
	$('#goalone').click(function() {
		ownpath();
		$('#backtotown').css('display', 'none');
		$('#goalone').css('display', 'none');
		$('#restart').fadeIn('slow');
	});
});