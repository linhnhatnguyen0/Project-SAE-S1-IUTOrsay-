$(document).ready(function () {
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
});
