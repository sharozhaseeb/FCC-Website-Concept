$(document).ready(function(){
  $("#heading").mouseenter(function(){
    $("#heading").css("background-color", "lightblue");
  });
  $("#heading").mouseleave(function(){
    $("#heading").css("background-color", "lightgray");
  });
});