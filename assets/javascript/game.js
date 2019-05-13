// Global Variables

let wins = 0;
let losses = 0;
let targetScore = 0;
let currentScore = 0;
let crystal = [
   {
      imageSrc: "assets/images/s-l300.jpg",
   },
   {
      imageSrc: "assets/images/images (1).jpeg",
   },
   {
      imageSrc: "assets/images/617kvIa-NZL._SX466_.jpg",
   },
   {
      imageSrc: "assets/images/images (2).jpeg",
   }
]

// Functions to start and reset game 

function startGame() {
   currentScore = 0;
   
   //make target number 

   targetScore = Math.floor((Math.random() * 120) + 19);
   $("#target-number").text(targetScore);

   //assign values to each crystal and make crystals

   for (var i = 0; i < crystal.length; i++) {
      var crystalValue = Math.floor((Math.random() * 12) + 1);

      var crystalImage = $("<img>");
      crystalImage.addClass("crystal-image");
      crystalImage.attr("data-value", crystalValue);
      crystalImage.attr("src", crystal[i].imageSrc);
      $(".crystals").append(crystalImage);

   }
}

startGame();


function reset() {
   currentScore = 0;
   $("#current-score").text(currentScore);


   $(".crystals").empty();

   //make new target number 

   targetScore = Math.floor((Math.random() * 101) + 19);
   $("#target-number").text(targetScore);

   //display on the page target score and crystals

   for (var i = 0; i < crystal.length; i++) {
      var crystalValue = Math.floor((Math.random() * 12) + 1);

      var crystalImage = $("<img>");
      crystalImage.addClass("crystal-image");
      crystalImage.attr("data-value", crystalValue);
      crystalImage.attr("src", crystal[i].imageSrc);
      $(".crystals").append(crystalImage);

   }
}


//Let the clicking begin! 
//Event delegation so things work the second time around


$(document).on("click", ".crystal-image", function () {

   var value = parseInt($(this).attr('data-value'));
   currentScore += value
   $("#current-score").text(currentScore);

   if (currentScore > targetScore) {
      alert("You lost!");
      losses++;
      $("#losses").text(losses);
      reset();

   } else if (currentScore === targetScore) {
      alert("You win!")
      wins++;
      $("#wins").text(wins);
      reset();
   }
});
