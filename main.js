$(document).ready(function() {
    "use strict";
//-------------------------------------post carousel  --------------------------
    $(".post-carousel-twoCol").slick({
        dots: false,
        arrows : false,
        slidesToShow : 2,
        slidesToSCroll :1,
        responsive : [
            {
                breakpoint : 768,
                settings : {
                    slidesToShow : 2,
                    slidesToSCroll : 2,
                    dots : false,
                    arrows : false,
                }
            },
            {
                breakpoint : 576,
                settings : {
                    slidesToShow : 1,
                    slidesToSCroll : 1,
                    dots:false,
                    arrows : false,
                }
            }
        ]
    });

    $(".carousel-topNav-prev").click(function() {
        $(".post-carousel-twoCol").slick('slickPrev');
    });
    $(".carousel-topNav-next").click(function() {
        $(".post-carousel-twoCol").slick('slickNext');
    });

    $(".post-carousel-widget").slick({
        dots: false,
        arrows : false,
        slidesToShow : 1,
        slidesToSCroll :1,
        responsive : [
            {
                breakpoint : 991,
                settings : {
                    slidesToShow : 2,
                    slidesToSCroll : 1,
                }
            },
            {
                breakpoint : 576,
                settings : {
                    slidesToShow : 1,
                    slidesToSCroll : 1,
                    centerMode : true,
                }
            }
        ]
    });
// ----------------------------------------------side carousel   --------------covid 19 wala --------
    $(".carousel-botNav-prev").click(function() {
        $(".post-carousel-widget").slick('slickPrev');
    });
    $(".carousel-botNav-next").click(function() {
        $(".post-carousel-widget").slick('slickNext');
    });


  

//side menubar 

    var $header = $(".header-default"),
    $clone = $header.before($header.clone().addClass("clone"));
    $(window).on("scroll", function(){
        var fromTop = $(window).scrollTop();
        $('body').toggleClass("down", (fromTop > 300));
    });
});
/////////////////// for canvas menu 
$(function(){
    "use strict";

    $('.sidebar').stickySidebar({
        topSpacing : 60,
        bottomSpacing : 30,
        containerSelector : '.main-content',
    });
    //------------------submenu--------------------------------------
    $(".submenu").before('<i class="icon-arrow-down switch"></i>');
    $(".vertical-menu li i.switch").on('click', function() {
    var $submenu = $(this).next(".submenu");
    $submenu.slideToggle(300);
    $submenu.parent().toggleClass("openmenu");
});
//---------------------------for burger menu ---------- canvas menu-------------------------------
    $("button.burger-menu").on('click', function(){
        $(".canvas-menu").toggleClass("open");
        $(".main-overlay").toggleClass("active");
    });

    $(".canvas-menu .btn-close, .main-overlay").on('click', function() {
        $(".canvas-menu").removeClass("open");
        $(".main-overlay").removeClass("active");
    });
//----------------------------for search button ---------------------------------
    $("button.search").on('click',function(){
        $(".search-popup").addClass("visible");
    });

    $(".search-popup .btn-close").on('click', function(){
        $(".search-popup").removeClass("visible");
    });

    $(document).keyup(function(e){
        if(e.key ===  "Escape"){
            $(".search-popup").removeClass("visible");
        }
    });


    // loader tab pane           ---------------------------------for popular or recent 
    $('button[data-bs-toggle="tab"]').on('click', function() {
        $(".tab-pane").addClass("loading");
        $(".lds-dual-ring").addClass("loading");
        setTimeout(function () {
            $(".tab-pane").removeClass("loading");
            $(".lds-dual-ring").removeClass("loading");
        }, 500);
    });
    //---------------------------------   post button  ---------- share toggle button 
    $(".post button.toggle-button").each(function() {
        $(this).on('click', function(e){
            $(this).next('.social-share .icons').toggleClass("visible");
            $(this).toggleClass("icon-close").toggleClass("icon-share");
        });
    });
//-----------------------------for spacer ----------------------
    var list = document.getElementsByClassName('spacer');
    for(var i = 0; i< list.length; i++){
        var size = list[i].getAttribute('data-height');
        list[i].style.height = "" + size + "px";
    }
//---------------------------------data img  home page 
    var list = document.getElementsByClassName('data-bg-image');

    for(var i =0; i< list.length; i++){
        var bgimg = list[i].getAttribute('data-bg-image');
        list[i].style.backgroundImage = "url('" + bgimg + "')";
    }


});