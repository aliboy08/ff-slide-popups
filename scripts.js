// Slide popup
$('.slide-popup-show, .slide-popup-show a').click(function (e) {
	e.preventDefault();
	$($(this).data('target')).addClass('active');
});

$('.ff-slide-popup .close-btn').click(function (e) {
	e.preventDefault();
	$(this).closest('.ff-slide-popup').removeClass('active');
});
