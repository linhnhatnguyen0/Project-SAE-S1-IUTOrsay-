$(document).ready(function () {
  $("video").on("ended", function () {
    this.load();
    this.play();
  });
  $("#nav-button").on("click", function () {
    $(this).parent().children(".nav-mid-element").toggleClass("hide-element");
    $(this).parent().parent().toggleClass("height-nav");
  });
  $(".nav-mid-element").hover(
    function () {
      $(this).children("ul").css("display", "flex");
    },
    function () {
      $(this).children("ul").css("display", "none");
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
});
