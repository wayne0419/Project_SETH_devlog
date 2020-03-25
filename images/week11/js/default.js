(function($) {
	"use strict"; // Start of use strict
  
	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
		  $('html, body').animate({
			scrollTop: (target.offset().top - 70)
		  }, 1000, "easeInOutExpo");
		  return false;
		}
	  }
	});
  
	// Scroll to top button appear
	$(document).scroll(function() {
	  var scrollDistance = $(this).scrollTop();
	  if (scrollDistance > 100) {
		$('.scroll-to-top').fadeIn();
	  } else {
		$('.scroll-to-top').fadeOut();
	  }
	});
  
	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').click(function() {
	  $('.navbar-collapse').collapse('hide');
	});
  
	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
	  target: '#mainNav',
	  offset: 80
	});
  
	// Collapse Navbar
	var navbarCollapse = function() {
	  if ($("#mainNav").offset().top > 100) {
		$("#mainNav").addClass("navbar-shrink");
	  } else {
		$("#mainNav").removeClass("navbar-shrink");
	  }
	};
	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse);
  
	// Modal popup$(function () {
	// Floating label headings for the contact form
	$(function() {
	  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
		$(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
	  }).on("focus", ".floating-label-form-group", function() {
		$(this).addClass("floating-label-form-group-with-focus");
	  }).on("blur", ".floating-label-form-group", function() {
		$(this).removeClass("floating-label-form-group-with-focus");
	  });
	});
  
	  $('#mp3button').click(function() {
		  $('#dlmp3div').removeClass("d-none");
		  $('#dlmp3div').addClass("d-block");
			 $('#dlmp3div').html('<iframe  class="mt-3 progress-bar progress-bar-striped bg-success progress-bar-animated w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="border:0;height:100px;" src="https://api.savemedia.website/button/?url='+vidURL+'"></iframe>');
		  $(this).attr("disabled","disabled");
		  setTimeout(function() { $('#mp3button').fadeOut(); },500);
	  });
  
	  $('#newbutton').click(function() {
		  jQuery('html, body').animate({scrollTop: $('#form1').offset().top-parseInt($('#mainNav').css('height'))-50}, 700);
		  $('#dlURL').focus();
		  $('#dlURL').val('');
	  });
  
	  $("#form1").submit(function(){ //shows playlist processing delay warning..
		  $("#dlBTN1").attr('disabled', 'disabled');
		  $("#dlBTN1").css('opacity', '0.4');
	  });
  
	  $("#form2").submit(function(){ //shows playlist processing delay warning..
		  $('#dlVidBTN').attr('disabled', 'disabled'); 
		  $('#dlVidBTN').text('Untwitched! Cooldown - 20 sec'); 
		  setTimeout(function() { 
				  $('#dlVidBTN').removeAttr('disabled'); 
				  $('#dlVidBTN').text('Download Video'); 
		  },20000);
	  });
	  
	  $('#examplespan').click(function() {
		  $('#dlURL').val('https://www.twitch.tv/videos/390476604');
		  $('#dlURL').focus();
		  $('#dlBTN1').addClass('sheen'); 
		  setTimeout(function() { $('#dlBTN1').addClass('spin'); }, 5000);
		  setTimeout(function() { $('#dlBTN1').addClass('jump'); }, 10000);
	  });
	  
  
  })(jQuery); // End of use strict
  
   window.onload = function() {
	   
	   if ($('#results').length>0) { 
		  jQuery('html, body').animate({scrollTop: $('#results').offset().top-parseInt($('#mainNav').css('height'))}, 700);
	   }
  }
  
   var deferredPrompt;
  
  if ('serviceWorker' in navigator) {
	  window.addEventListener('load', function() {
		  navigator.serviceWorker.register('/sworker.js').then(function(registration) { }, function(err) { });
	  });
	  window.addEventListener('beforeinstallprompt', (e) => {
		  deferredPrompt = e;
		  showInstallPromotion();
	  });    
  }
  
  function showInstallPromotion() {
	  $('#btnAdd').removeClass('d-none',500);
	  $('#btnAdd').fadeIn(1500);
  }
  
  $(document).on("click", '.btnA2HS', function(event) { 
	  $('#btnAdd').css('display','none');
	  if (deferredPrompt) {
		  deferredPrompt.prompt();
		  deferredPrompt.userChoice
		  .then((choiceResult) => {
			  deferredPrompt = null;
		  });
	  }
	  else {
		  $(this).text('Already there.. Awesome!');
		  $(this).addClass("disabled");
		  $(this).prop('disabled',true);
	  }
  });