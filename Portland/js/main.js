$(function() {

			// MENU ACCORDION START
			$('.asideCaption').click(function() {
				var parent = $(this).closest('.asideItem'),
					f = $(parent).hasClass('active');
				$('.asideItem').removeClass('active');
				if(f) {
					$(parent).removeClass('active');
				}
				else {
					$(parent).addClass('active');
				}
			});
			// MENU END

	$('select').styler();	

	$('.slider').bxSlider({
    slideWidth: '1170',
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 0,
  });
});