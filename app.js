$(document).ready(function() {

  $("body").fadeIn(2000);
  // On click, select answer, next question will slide down/show. Only did this up to question 6, will update all later.

  $(".questionOne-container").click(function(){
    $(".questionTwo-container").slideDown(500);
    $(".questionTwo-container").show();
  });

  $(".questionTwo-container").click(function(){
    $(".questionThree-container").slideDown(500).show();
  });

  $(".questionThree-container").click(function(){
    $(".questionFour-container").slideDown(500).show();

  });

  $(".questionFour-container").click(function(){
    $(".questionFive-container").slideDown(500).show();

  });

  $(".questionFive-container").click(function(){
    $(".questionSix-container").slideDown(500).show();

  });

  $(".questionSix-container").click(function(){
    $(".questionSeven-container").slideDown(500).show();

  });
  $(".questionSeven-container").click(function(){
    $(".questionEight-container").slideDown(500).show();

  });
  $(".questionEight-container").click(function(){
    $(".questionNine-container").slideDown(500).show();

  });
  $(".questionNine-container").click(function(){
    $(".questionTen-container").slideDown(500).show();

  });










  // Question 10 div to have logic. For each input checked, show associated results_div

});
