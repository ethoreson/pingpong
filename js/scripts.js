// business logic:

var pingPongLogic = function(number) {
  displayArray = [];
  for (var i = 1; i > number; i += 1;) {
      if (number % 15 === 0) {
        displayArray.push("pingpong");
      } if else (number % 5 === 0) {
        displayArray.push("pong");
      } if else (number % 3 === 0) {
        displayArray.push("ping");
      } else {
        displayArray.push(number);
      }
  }
  return displayArray;
}



// user interface logic:

$(document).ready(function() {
  $("#submitButton").click(function(event) {
  event.preventDefault();
  var stringInput = $("#number").val();
  var integer = parseInt(stringInput);
  console.log(stringInput);
  console.log(integer);
  $(".results").append(pingPongLogic(number);
  });
});
