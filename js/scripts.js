var dice = function(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
}

$(document).ready(function() {
  $("#roll1").click(function() {
    var output = dice(1, 6);
    $("#result1").text(output);
  });
  $("#roll2").click(function() {
    var output = dice(1, 6);
    $("#result2").text(output);
  });
});
