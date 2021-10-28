var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0px";
  } else {
    document.getElementById("header").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
};

$(document).ready(function () {
  $(".name-team").css("opacity", 0);
  $("button.show-name").each(function () {
    $(this).on("click", function () {
      $(this).parent().parent().toggleClass("hide1");
      $(this).parent().parent().children(".name-team").toggleClass("hide2");
      if (
        $(this).parent().parent().children(".name-team").css("opacity") == 0
      ) {
        $(this).parent().parent().children(".name-team").fadeTo(100, 1);
      }
      if (
        $(this).parent().parent().children(".name-team").css("opacity") == 1
      ) {
        $(this).parent().parent().children(".name-team").fadeTo(100, 0);
      }
    });
  });
  $("#nav-button").on("click", function () {
    $(this).parent().children(".nav-mid-element").toggleClass("hide-element");
    $(this).parent().toggleClass("height-nav");
  });
  $(".nav-mid-element").mouseenter(function () {
    if ($(this).children(".nav-mid-element-drop-list").css("opacity") == 0) {
      $(this).children(".nav-mid-element-drop-list").animate(
        {
          width: "250px",
          opacity: 1,
        },
        300
      );
    }
  });
  $(".nav-mid-element").mouseleave(function () {
    if ($(this).children(".nav-mid-element-drop-list").css("opacity") == 1) {
      $(this).children(".nav-mid-element-drop-list").animate(
        {
          width: "0px",
          opacity: 0,
        },
        300
      );
    }
  });
});

$(window).on("load", function () {
  $(window)
    .on("scroll", function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      var objectBottom =
        $(".description").offset().top + $(".description").outerHeight();
      if (objectBottom < windowBottom) {
        //object comes into view (scrolling down)
        $("#header").css("background-color", "#071336");
        $("#header").css("box-shadow", "0 0 10px 0 #000");
      } else {
        $("#header").css("box-shadow", "unset");
        $("#header").css("background-color", "transparent");
      }
    })
    .on("scroll");
});
