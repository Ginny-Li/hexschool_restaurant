//login
$(".btn.gary.register").click(function(){
    $('.login-form').toggle();
    $('.register-form').toggle();
});

$(".btn.gary.account").click(function(){
    $('.login-form').toggle();
    $('.register-form').toggle();
});

//ham
$("button.hamburger").on("click", function(){
    $(this).toggleClass("is-active")
    $('.hamburger-list').toggle();
    ;
  });

  $(".hamburger-list li").on("click", function(){
    $('button.hamburger').toggleClass("is-active")
    $('.hamburger-list').toggle();
  });