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

   //assign values to each crystal 

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

startGame();


function reset() {
   currentScore = 0;
   $("#current-score").text(currentScore);


   $(".crystals").empty();

   //make mew target number 

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




 // Next we create a for loop to create crystals for every numberOption.
//  for (var i = 0; i < numberOptions.length; i++) {

//    // For each iteration, we will create an imageCrystal
//    var imageCrystal = $("<img>");

//    // First each crystal will be given the class ".crystal-image".
//    // This will allow the CSS to take effect.
//    imageCrystal.addClass("crystal-image");

//    // Each imageCrystal will be given a src link to the crystal image
//    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

//    // Each imageCrystal will be given a data attribute called data-crystalValue.
//    // This data attribute will be set equal to the array value.
//    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

//    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
//    $("#crystals").append(imageCrystal);
//  }



// //dynamically create crystals on the page (one object per crystal)
//    //each crystal needs a score, an image, [aka a string holding the path to the image - which is saved in a folder in your project] an object with all of this info (aka collection of key value parts)

// // Math.floor((Math.random() * 120) + 19); target number
// // Math.floor((Math.random() * 12) + 1); crystal value
// //crystalImage.attr("src", crystal.imageSrc);


// // // Random number Function:
// // function generateRandom()
//    //something with math...
//    //return a random number

// //Click event function
//    //each crystal should have the same class so that you dont need 4 seperate click events
//    //var score = yourScore + crystalValue;


// //start/reset game
//    //clear out variables (especially your score)
//    //set target score
//    //assign a value for each crystals
//    // .empty will be helpful
//    //If your score is grater than target score, then...
//    //If yourScore is less than, then... `

//    //an array of crystals to generate maybe data-crystalValue