// Enable Tool Tips Globally 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
 
// Nav on Scroll Add Class 
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
	if (scroll >= 150) {
        $(".agenda-day-nav").addClass("on-scroll-agenda");
     } else {
        $(".agenda-day-nav").removeClass("on-scroll-agenda");
    }
});

// Dynamically add the +/- icon
$(document).ready(function() {
	$('.collapse:has(.card-body)').prev('.card-header').prepend('<i class="fa fa-plus pull-right"></i> ');
	$('.card-header').click(function() {
		$(this).children('i').toggleClass('fa-plus').toggleClass('fa-minus');
	});
});

// Toggle +/- Icon
$(document).ready(function() {
	$('#toggle').click(function() {
		if ($('#content .collapse').hasClass('show')) {
			$('#content .collapse').removeClass('show');
			$('#toggle').html('Sessions Details +');
			$('.card-header').children('i').removeClass('fa-minus').addClass('fa-plus');
 		} else {
			$('#content .collapse').addClass('show');
			$('#toggle').html('Sessions Details -');
			$('.card-header').children('i').removeClass('fa-plus').addClass('fa-minus');
 		}
	});
});

// Smooth On Scroll Nav with Offsets 
$('.scroll').on('click',function(e) {
	e.preventDefault();
	var offset = 0;
	var target = this.hash;
	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
	$('html, body').stop().animate({
		'scrollTop': $(target).offset().top - offset
	}, 800, 'swing', function() {
	});
});

// Filter Menu
$('.filter_button').on('click', function() {
	if ($("#filter-menu").attr("hidden")) {
    	$("#filter-menu").attr("hidden", false);
	} 
	else 
		$("#filter-menu").attr("hidden", true);
}); 
 
// Reset Menu Buttons
$('.session-type-button-reset').click(function() {
	$(".card[class*='session-type-']").attr('hidden',false);
    $('input[type=checkbox][name=sort-session-type]').prop('checked', true);
});
$('.session-topic-button-reset').click(function() {
	$(".card.sort-session-topic").attr('hidden',false);
    $('input[type=checkbox][name=sort-session-topic]').prop('checked', true);
});
  
// Toggle Attribute Plugin 
$.fn.toggleAttr = function(attr, val) {
  var test = $(this).attr(attr);
  if ( test ) { 
	  $(this).removeAttr(attr);
  } else {
	  $(this).attr(attr, val);
  }
  return this;
};

// Sorting: Session Type
$(document).ready(function() {
    $('input[type=checkbox][name=sort-session-type]').on('change', function()  {
 		if (this.value =='session-type-keynote'){
			$('.card.session-type-keynote').toggleAttr('hidden', "true");
		} 
		if (this.value =='session-type-round-table'){
			$('.card.session-type-round-table').toggleAttr('hidden', "true");
		} 
		if (this.value =='session-type-panel-discussion'){
			$('.card.session-type-panel-discussion').toggleAttr('hidden', "true");
		} 
		if (this.value =='session-type-break-meal'){
			$('.card.session-type-break-meal').toggleAttr('hidden', "true");
		} 
 	});
});

// Sorting: Session Topic
$(document).ready(function() {
    $('input[type=checkbox][name=sort-session-topic]').on('change', function()  {
 		if (this.value =='marketplaces-and-globalization'){
			$('.card.marketplaces-and-globalization').toggleAttr('hidden', "true");
		} 
 		if (this.value =='reimagining-online-and-instore'){
			$('.card.reimagining-online-and-instore').toggleAttr('hidden', "true");
		} 
 		if (this.value =='customer-acquisition-and-conversion-optimization'){
			$('.card.customer-acquisition-and-conversion-optimization').toggleAttr('hidden', "true");
		} 
 		if (this.value =='marketing-tomorrows-customers'){
			$('.card.marketing-tomorrows-customers').toggleAttr('hidden', "true");
		} 
 	});
});



 