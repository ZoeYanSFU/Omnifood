$(document).ready(function(){
	$('.js--section-features').waypoint(function(direction){
		if(direction == "down"){
			$('nav').addClass('sticky-nav');
		}else{
			$('nav').removeClass('sticky-nav');
		}
	},{
			offset:'60px;'   //navigation bar will show up 60px before it enters the section-feature 
		});



	$('.js--scroll-to-plans').click(function(){
		$('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);

	});

	$('.js--scroll-to-start').click(function(){
		$('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);

	});

    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {     //*=# means starts with #
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    /*Animation on scroll*/
    $('.js--wp-feature').waypoint(function(direction){
    	$('.js--wp-feature').addClass('animated fadeIn')},
    	{
    		offset:'50%'
    });

    $('.js--wp-app-screen').waypoint(function(direction){
    	$('.js--wp-app-screen').addClass('animated fadeIn')},
    	{
    		offset:'50%'
    });

    $('.js--wp-city-row').waypoint(function(direction){
    	$('.js--wp-city-row').addClass('animated fadeInUp')},
    	{
    		offset:'50%'
    });

    $('.js--wp-plan-box').waypoint(function(direction){
    	$('.js--wp-plan-box').addClass('animated pulse')},
    	{
    		offset:'50%'
    });


/* Mobile nav*/
	$('.js--nav-icon').click(function(){
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');
		nav.slideToggle(200);  //200ms
		if(icon.hasClass('ion-navicon-round')){
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		}else{
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
		}
	});



});


