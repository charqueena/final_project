$(document).ready(function() {

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

  // Question 10 div to have logic. For each input checked, show associated results_div

  $('#submit_last').on("click" function() {
    if ($("#q10a:checked").val() == "a" {
      $(".results_strong-mad").show();
    });

    $('#submit_last').on("click" function() {
      if ($("#q10b:checked").val() == "b" {
        $(".results_strong-bad").show();
      });
      $('#submit_last').on("click" function() {
        if ($("#q10c:checked").val() == "c" {
          $(".results_strong-sad").show();
        });

        $('#submit_last').on("click" function() {
          if ($("#q10d:checked").val() == "d" {
            $(".results_the-cheat").show();
          });


        });

      });
