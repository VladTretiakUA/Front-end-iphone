function slowScroll(id){
  $("html").animate({
    scrollTop: $(id).offset().top - 50
  }, 400);
  return false;
}

$(".header-top .menu").on("click", function(){
  if($("header .mobile-menu").is(":visible")){
    $(this).html('<i class="fa-solid fa-bars"></i>');
  } else {
    $(this).html('<i class="fa-solid fa-times"></i>');
  }
  $("header .mobile-menu").slideToggle();
});

$(".video-play, #modal-video .button-close").on('click', function (){
  $("#modal-video").toggle();
  $("body").toggleClass("overflow-hidden");
  resizeVideo();
})

$(window).on('resize', function () {
    resizeVideo();
}).resize();


function resizeVideo() {
  $("iframe").each(function() {
    let width = $(this).width();
    $(this).css("height", width / 1.77 + "px");
  });
}

$("#subscribe").on('click', function(){
  let email = $("#email").val().trim();
  if(email.split("@").length != 2 || email.split(".").length != 2){
    $("#sub-form label").text("Ви ввели неправильну адрессу");
    $("#sub-form label").fadeIn();
  }

  setTimeout(function(){
    $("#sub-form label").fadeOut();
  }, 2000);
});
