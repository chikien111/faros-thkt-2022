jQuery(document).ready(function ($) {
 
  var App = App || {};

  //---MAIN----
  $(function () {
      App.Site.gettoggle();
      App.Site.scrolltoTop();
      App.Site.getheight();
      App.Site.getslider();
      App.Site.semanticUI();
      App.Site.fancybox();
      App.Site.scrolltoDiv();
  });

  //--All site
    App.Site = function(){

        var gettoggle = function(){
            $(".page-header .toggle-menu").click(function(){
                $(".page-header .main-menu").addClass("active");
            });
            $(".page-header .md-button").click(function(){
                $(".page-header .main-menu").removeClass("active");
            });
            $(".page-header .main-menu ul li a").click(function(){
                $(".page-header .main-menu").removeClass("active");
            });
        }

        var scrolltoTop = function(){
            $(window).scroll(function(){
                if ($(window).scrollTop() >= 60) {
                    $('.page-header').addClass('scroll-top');
                }
                else {
                    $('.page-header').removeClass('scroll-top');
                }                 
            });
        }

        var getheight = function(){
            var get_height = $(".page-main .content-4 .main-content .content-ct-4").outerHeight();
            $(".page-main .content-4 .main-content .content-ct-4").css("height",get_height);
        }

        var getslider = function(){
            $('.ics-thuduc .owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                dots:false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });

            $('.ics-bienhoa .owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                dots:false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });

            $('.ics-rachgia .owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                dots:false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });
        }

        var semanticUI = function(){
            $('.ui.dropdown')
              .dropdown()
            ;
            new WOW().init();
        }
        var fancybox = function(){
            // $("#md-tk").fancybox().trigger('click');
        }
        var scrolltoDiv = function(){
            $(".scl-sc-1").click(function() {
                $('html, body').animate({
                    scrollTop: $(".content-1").offset().top - 80
                }, 1000);
            });
            $(".scl-sc-2").click(function() {
                $('html, body').animate({
                    scrollTop: $(".content-2").offset().top - 80
                }, 1000);
            });
            $(".scl-sc-3").click(function() {
                $('html, body').animate({
                    scrollTop: $(".content-3").offset().top - 80
                }, 1000);
            });
            $(".scl-sc-4").click(function() {
                $('html, body').animate({
                    scrollTop: $(".content-5").offset().top - 80
                }, 1000);
            });
            $(".scl-sc-5").click(function() {
                $('html, body').animate({
                    scrollTop: $(".page-footer").offset().top - 80
                }, 1000);
            });
        }

        return{
            gettoggle:gettoggle,
            scrolltoTop:scrolltoTop,
            getheight:getheight,
            getslider:getslider,
            semanticUI:semanticUI,
            fancybox:fancybox,
            scrolltoDiv:scrolltoDiv,
        };

    }(); 

  //--End All site


    
   
});    
