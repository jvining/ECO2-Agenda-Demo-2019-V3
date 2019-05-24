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
			$('#toggle').html('+ Expand All Session Details');
			$('.card-header').children('i').removeClass('fa-minus').addClass('fa-plus');
 		} else {
			$('#content .collapse').addClass('show');
			$('#toggle').html('- Collapse All Session Details');
			$('.card-header').children('i').removeClass('fa-plus').addClass('fa-minus');
 		}
	});
});
 
// Reset Menu Button
$('.filter-button-reset').click(function() {
	$(".card").attr('hidden',false);
    $('input[type=checkbox][name=group1]').prop('checked', true);
	
});
  
// Filter Menu
$('.filter_button').on('click', function() {
	if ($("#filter-menu").attr("hidden")) {
    	$("#filter-menu").attr("hidden", false);
	} 
	else 
		$("#filter-menu").attr("hidden", true);
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

// Sorting
$(document).ready(function() {
    $('input[type=checkbox][name=group1]').on('change', function()  {
 		if (this.value =='tracktype-keynote'){
			$('.card.tracktype-keynote').toggleAttr('hidden', "true");
		} 
		if (this.value =='tracktype-round-table'){
			$('.card.tracktype-round-table').toggleAttr('hidden', "true");
		} 
		if (this.value =='tracktype-panel-discussion'){
			$('.card.tracktype-panel-discussion').toggleAttr('hidden', "true");
		} 
		if (this.value =='tracktype-break-meal'){
			$('.card.tracktype-break-meal').toggleAttr('hidden', "true");
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