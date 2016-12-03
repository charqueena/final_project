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
    $("#submit_last").fadeIn();

  });

  $("#quiz").on("submit", function(event) {
    event.preventDefault();

    var q10Selection = $("input[name='q10']:checked").val();

    if (q10Selection === "a") {
      $(".results_strong-mad").show().siblings().hide();
    } else if (q10Selection === "b") {
      $(".results_strong-bad").show().siblings().hide();
    } else if (q10Selection === "c") {
      $(".results_strong-sad").show().siblings().hide();
    } else {
      $(".results_the-cheat").show().siblings().hide();
    }
  });
  //Quiz logic
  // $( "#q10a" ).on( "click", function() {
  //   $(".results_strong-mad").show();
  //   $("#q10a").removeClass("active");
  // });
  //
  // $( "#q10b" ).on( "click", function() {
  //   $(".results_strong-bad").show();
  //   $("#q10b").removeClass("active");
  // });
  //
  // $( "#q10c" ).on( "click", function() {
  //   $(".results_strong-sad").show();
  //   $("#q10c").removeClass("active");
  // });

  // $( "#q10d" ).on( "click", function() {
  //   $(".results_the-cheat").show();
  //   $("#q10d").removeClass("active");
  // });
  // Question 10 div to have logic. For each input checked, show associated results_div

});
