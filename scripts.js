// Slide popup
$('.slide-popup-show, .slide-popup-show a').click(function (e) {
	e.preventDefault();
	$($(this).data('target')).addClass('active');
});

$('.ff-slide-popup .close-btn').click(function (e) {
	e.preventDefault();
	$(this).closest('.ff-slide-popup').removeClass('active');
});

// Close on outside click
$('html').click(function(e) {
	if( $(e.target).closest('.ff-slide-popup').length || $(e.target).closest('.slide-popup-show').length || $(e.target).hasClass('slide-popup-show') ) {
		return;
	}
	$('.ff-slide-popup').removeClass('active');
})
