 //create a number for player to match, randomly generated between 19-120
var counter = 0;
var numOfcrystals = [1, 2, 3, 4];
var minNum = 19;
var maxNum = 120;
var targetNumber = randomNum(minNum, maxNum);  ///this is the number they need to match
var crystalValue = [];
var wins = [];
var losses = [];
var currentScore = [];
var myImages = [
    "assets/images/madhatter.png",
    "assets/images/cheshirecat.png",
    "assets/images/caterpillar.png",
    "assets/images/whiterabbit.png",
  ]; 

//$(document).ready(function(){}  wrapn this around all of the functions  

function randomNum (min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
$("#number-to-guess").html(targetNumber);
 
///functions above this line work fine






/////////me me me mememmememmmememmmememmememmememmemmemmememmemememememememmememememememmmmememememememmeemme
  // create a for loop to create crystals 
  

  for (var i = 0; i < numOfcrystals.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", myImages[i]);
    imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    $(".crystals").append(imageCrystal);
    }

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    // Each imageCrystal will be given a src link to the crystal image
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    // give each crystal its own picture
    


    //$("#nextbutton3").prepend($('<img>',{id:"nextbutton3",src:'assets/images/cheshirecat.png'}));
  

  // THIS WORKS DONT TOUCH!!!now each crystal gets its own randomly generated number that is <=12.
  $(".crystal-image").on("click", function() {    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    //show their current score here  ("New score: " + counter);
    $("#currentScore").text("New score:" + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

    console.log(crystalValue)
    console.log(counter)
    console.log(currentScore)
  });








