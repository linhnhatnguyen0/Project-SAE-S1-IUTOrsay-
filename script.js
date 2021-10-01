var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
  document.getElementById("header").style.top = "0px";
} else {
  document.getElementById("header").style.top = "-150px";
}
prevScrollpos = currentScrollPos;
}


$(document).ready(function () {
  $(".name-team").css("opacity", 0);
  $("button.show-name").each(function () {
    $(this).on("click",function(){
      $(this).parent().parent().toggleClass('hide1');
      $(this).parent().parent().children(".name-team").toggleClass('hide2');
      if($(this).parent().parent().children(".name-team").css("opacity")==0){
        $(this).parent().parent().children(".name-team").fadeTo(100, 1);
      }
      if($(this).parent().parent().children(".name-team").css("opacity")==1){
        $(this).parent().parent().children(".name-team").fadeTo(100, 0);
      }
    });
  });
});


$(window).on("load",function() {
    $(window).on("scroll",function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        var objectBottom = $(".description").offset().top+$(".description").outerHeight();
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            $("#header").css("background-color", "#071336");
            $("#header").css("box-shadow", "0 0 10px 0 #000");
          }
          else {
          $("#header").css("box-shadow", "unset");
          $("#header").css("background-color", "transparent");
        }
      }).on("scroll");
           
  });