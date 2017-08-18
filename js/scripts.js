$("form#userInputForm").submit(function(event) {
  var input = $("input#userInput").val();
});

$(document).ready(function() {
  $("button#buttonid").click(function() {
    $("ul.outPut").append("<li>" + input + "</li>");
     event.preventDefault()
  });



})
