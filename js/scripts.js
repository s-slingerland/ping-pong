//back end----------------

function pong(userInput){
var result = [];
for (var a = 1; a <= userInput; a++){
  if (a % 3 === 0) {
    result.push("ping");
  } else if (a % 5 === 0) {
    result.push("pong");
  } else if (a % 15 === 0) {
    result.push("pingpong");
  } else {
    result.push(a);
  }
}
return result;
}



//front end-------------------
$(document).ready(function() {
  $("form#userInputForm").submit(function(event){
    var uiNumber = parseInt($("input#userInputNumber").val());
    var result2 = pong(uiNumber);
    result2.forEach(function(output) {
      $(".showForm").append("<li>" + output + "<li>");
      event.preventDefault();
    });
  });
});
