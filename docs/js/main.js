$(document).ready(function() { 



// HOMPAGE ANIMATIONS

	$('.nav').css({
		'top': '-64px',
		'opacity': '0',
	});

	$('.home_hero h1, .home_hero p ').css({
		'top': '100px',
		'opacity': '0',
	});

	$('.home_link *').css({
		'position': 'relative',
		'top': '100px',
		'opacity': '0',
	});

	// Home preload remove

	var homePreloadRemove = anime.timeline({
		delay: 2000
	});

	homePreloadRemove
	.add({
	  targets: '.preloader',
	  easing: 'easeInOutSine',
	  'opacity': '0',
	  duration: 500,
	  loop: false,
	  autoplay: true,

	  complete: function(anim) {
	    homeEnter.play();
	    $('.preloader').css({
	    	'display': 'none'
	    });
	  }

	});


	var homeEnter = anime.timeline({
		delay: 3000
	});

	homeEnter
	.add({
		targets: '.nav',
		'top': '0',
		'opacity': '1',
		duration: 1000,
		easing: 'easeInOutSine'
	})

	.add({
		targets: '.home_hero h1, .home_hero p',
		'top': '0',
		'opacity': '1',
		duration: 1000,
		delay: function(el, i) { return i * 50 },
		easing: 'easeInOutCubic',

		complete: function(anim) {
		    homeicon.play();
		    homelink.play();
		}
	});

	//  Animation

	var homeicon = anime.timeline({
		autoplay: false,
	});

	homeicon
	.add({
	  targets: '#HomeIcon path',
	  strokeDashoffset: [anime.setDashoffset, 0],
	  easing: 'easeInOutSine',
	  duration: 4000,
	  delay: function(el, i) { return i * 250 },
	  direction: 'normal'
	})

	.add({
	  targets: '#HomeIcon path',
	  'fill': 'rgba(255,255,255,.5)',
	  duration: 1000,
	  easing: 'easeInOutSine'
	})

	.add({
	  targets: '#HomeIcon path',
	  'stroke': 'rgba(255,255,255,.0)',
	  duration: 1000
	}, '-=10');


	var homelink = anime.timeline({
		autoplay: false,
	});

	homelink
	.add({
	  targets: '.home_link *',
	  'top': '0',
	  'opacity': '1',
	  easing: 'easeInOutSine',
	  duration: 1000,
	  delay: function(el, i) { return i * 100 },
	});


	homePreloadRemove.play();



	var goto_who = anime.timeline({
		autoplay: false
	});

	goto_who
	.add({
	  targets: '.home_hero *',
	  'top': '-60px',
	  'opacity': '0',
	  easing: 'easeInOutSine',
	  duration: 500,
	  delay: function(el, i) { return i * 50 },
	})

	.add({
	  targets: '.home_hero',
	  'max-height': '0',
	  easing: 'easeInOutSine',
	  duration: 500
	}, '-=500')

	.add({
	  targets: '.home_link',
	  'min-height': 'calc(100vh - 200px)',
	  easing: 'easeInOutSine',
	  duration: 1000,
	  complete: function(anim) {
	  	$('.line').css({
	  		'opacity': '0',
	  		'transition': '.3s' 
	  	});
	  }
	});



	$('.home_link a').click(function() {
		goto_who.play();
	});	

}); 