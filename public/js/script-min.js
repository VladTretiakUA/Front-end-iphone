function slowScroll(e){return $("html").animate({scrollTop:$(e).offset().top-50},400),!1}function resizeVideo(){$("iframe").each(function(){let e=$(this).width();$(this).css("height",e/1.77+"px")})}$(".header-top .menu").on("click",function(){$("header .mobile-menu").is(":visible")?$(this).html('<i class="fa-solid fa-bars"></i>'):$(this).html('<i class="fa-solid fa-times"></i>'),$("header .mobile-menu").slideToggle()}),$(".video-play, #modal-video .button-close").on("click",function(){$("#modal-video").toggle(),$("body").toggleClass("overflow-hidden"),resizeVideo()}),$(window).on("resize",function(){resizeVideo()}).resize(),$("#subscribe").on("click",function(){let e=$("#email").val().trim();2==e.split("@").length&&2==e.split(".").length||($("#sub-form label").text("Ви ввели неправильну адрессу"),$("#sub-form label").fadeIn()),setTimeout(function(){$("#sub-form label").fadeOut()},2e3)});