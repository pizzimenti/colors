$(function() {
  $("button#dkblue").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-blue-background");
  });

  $("button#grey").click(function() {
    $("body").removeClass();
    $("body").addClass("grey-background");
  });

  $("button#ltblue").click(function() {
    $("body").removeClass();
    $("body").addClass("light-blue-background");
  });
});
