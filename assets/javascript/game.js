// Global Variables wins, loses, target score, your score
const wins = 0;
const loses = 0;
const targetScore = 0;
const currentScore = 0;
const images = ["assets/images/s-l300.jpg" , "assets/images/images (1).jpeg" , "assets/images/617kvIa-NZL._SX466_.jpg", "assets/images/images (2).jpeg"];

const crystal
//dynamically create crystals on the page (one object per crystal)
   //each crystal needs a score, an image, [aka a string holding the path to the image - which is saved in a folder in your project] an object with all of this info (aka collection of key value parts)
function createCrystal () {
   for (var i=0; i < 4; i++) {
      var crystal = $("<div>");
      crystal.addClass("crystal-image");
      $(".crystals").append(crystal);
   } 
};

createCrystal();

// function assignImage (){
//    for (var i=0; i < 4; i++){
//       var crystalImage = $("<img/>");
//       crystalImage.attr("src", images[0]);
//       $(".crystal-image").append(crystalImage);
//    }
// }
// assignImage();
// assignImage();
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