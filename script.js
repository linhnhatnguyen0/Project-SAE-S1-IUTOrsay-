$(document).ready(function () {
  $("#nav-button").on("click", function () {
    $(this).parent().children(".nav-mid-element").toggleClass("hide-element");
    $(this).parent().parent().toggleClass("height-nav");
  });
  $(".nav-mid-element").hover(
    function () {
      $(this).children(".nav-mid-element-drop").css("display", "flex");
    },
    function () {
      $(this).children(".nav-mid-element-drop").css("display", "none");
    }
  );

  $(".container>input").click(function () {
    $(".container>input").each(function () {
      var name = $(this).prop("class");
      if ($(this).prop("checked") == true) {
        $("." + name).show();
      } else {
        $("." + name).hide();
        $(this).css("display", "unset");
      }
    });
  });
  if ($(".cours-list-element").css("display") == "flex") {
    var textHeight = $(".cours-img").children("img").innerHeight();
    $(".cours-text").css("height", textHeight);
  }
  $(window).resize(function () {
    var width = $(window).width();
    if (width < 1023) {
      $(".cours-text").css("height", "unset");
    }
  });
  $("section").addClass("behav");
  $(".home").removeClass("behav");
  $(".behav").css("opacity", 0);
  $(".behav").css("position", "relative");
  var left = $(".behav").position().left;
  $(".behav").css("left", left - 200 + "px");
  $(window).on("scroll", function () {
    var scroll = $(this).scrollTop() + $(this).innerHeight();
    $(".behav").each(function () {
      var offset = $(this).offset().top + $(this).outerHeight() / 4;
      if (offset < scroll) {
        if ($(this).css("opacity") == 0) {
          $(this).animate(
            {
              opacity: 1,
              left: 0,
            },
            { duration: 500, queue: false }
          );
        }
      }
    });
  });
});
