// Global Variables wins, loses, target score, your score
let wins = 0;
let loses = 0;
let targetScore = 0;
let currentScore = 0;
let crystal = [
   {
      value: 0,
      imageSrc: "assets/images/s-l300.jpg", 
   },
   {
      value: 0,
      imageSrc: "assets/images/images (1).jpeg",
   },
   {
      value: 0,
      imageSrc: "assets/images/617kvIa-NZL._SX466_.jpg",
   },
   {
      value: 0,
      imageSrc: "assets/images/images (2).jpeg",
   }
]

function startGame() {
   //make target number 

   targetScore = Math.floor((Math.random() * 120) + 19); 
   $("#target-number").text(targetScore);

   //assign values to each crystal 

   //display on the page target score and crystals
   for (var i = 0; i < 4; i++) {
      var crystalValue = Math.floor((Math.random() * 12) + 1); 

      var crystalImage = $("<div>");
      crystalImage.addClass("crystal-image");
      crystalImage.attr("data-Value", crystalValue);
      $(".crystals").append(crystalImage);
   } 
}

startGame();

//dynamically create crystals on the page (one object per crystal)
   //each crystal needs a score, an image, [aka a string holding the path to the image - which is saved in a folder in your project] an object with all of this info (aka collection of key value parts)

// Math.floor((Math.random() * 120) + 19); target number
// Math.floor((Math.random() * 12) + 1); crystal value
//crystalImage.attr("src", crystal.imageSrc);


// // Random number Function:
// function generateRandom()
   //something with math...
   //return a random number

//Click event function
   //each crystal should have the same class so that you dont need 4 seperate click events
   //var score = yourScore + crystalValue;


//start/reset game
   //clear out variables (especially your score)
   //set target score
   //assign a value for each crystals
   // .empty will be helpful
   //If your score is grater than target score, then...
   //If yourScore is less than, then... `

   //an array of crystals to generate maybe data-crystalValue