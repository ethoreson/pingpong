// business logic:





// user interface logic:

$(document).ready(function() {
  $("#submitButton").click(function(event) {
  event.preventDefault();
  var stringInput = $("#number").val();
  var integer = parseInt(stringInput);
  var pingPongLogic = function(number) {
    for (var index = 1; index <= number; index += 1) {
        if (number % 15 === 0) {
          $("ul#output").append("<li>pingpong</li>");
          console.log("pingpong")
        } else if (number % 5 === 0) {
          $("ul#output").append("<li>pong</li>");
          console.log("pong")
        } else if (number % 3 === 0) {
          $("ul#output").append("<li>ping</li>");
          console.log("ping")
        } else {
          $("ul#output").append("<li>" + number + "</li>");
          console.log(number);
        }
    }
  }

  console.log(pingPongLogic(integer));
  });
});
