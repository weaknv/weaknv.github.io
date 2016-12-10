$(function() {

   $('.bxslider').bxSlider({
		  mode: 'vertical',
		  slideMargin: 0,
		  adaptiveHeight: true,
          adaptiveHeightSpeed: 10,
		  nextText: " ",
		  prevText: " "
	});
   $('.bxslider_small').bxSlider({
		  mode: 'horizontal',
		  slideMargin: 0,
		  adaptiveHeight: true,
          adaptiveHeightSpeed: 10,
		  nextText: " ",
		  prevText: " ",
		  pager: false
	});
   $('.owlCarousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    loop:true,
    dots:false,
    navText: " ",
    responsiveClass:true,
    responsive:{
        0:{
            items:1,   
        },
        1200:{
            items:3,
        },
    }
	})
    $(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.8";
	  fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'))

});