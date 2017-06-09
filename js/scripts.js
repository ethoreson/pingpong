// business logic:
var pingPongLogic = function(number) {
  console.log(this);
  $(this).prev().remove();
  for (var index = 1; index <= number; index += 1) {
    if (index % 15 === 0) {
      $("ul#output").append("<li>pingpong</li>");
    } else if (index % 5 === 0) {
      $("ul#output").append("<li>pong</li>");
    } else if (index % 3 === 0) {
      $("ul#output").append("<li>ping</li>");
    } else {
      $("ul#output").append("<li>" + index + "</li>");
    }
  }
}

// user interface logic:

$(document).ready(function() {
  $("#submitButton").click(function(event) {
  event.preventDefault();
  var stringInput = $("#number").val();
  var integer = parseInt(stringInput);
  pingPongLogic(integer);
  });
});
