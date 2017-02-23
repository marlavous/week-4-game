// GLOBAL VARIABLES (Accessible by all functions)
var counter = 0;                               //track users clicks on crystals here
var numOfcrystals = [1, 2, 3, 4];              //create 4 crystals
var minNum = 19;                               //number to match must be between 19-120
var maxNum = 120;
var targetNumber = randomNum(minNum, maxNum);  ///this is the number they need to match
var crystalValue = [];                         //hold the value of each crystal here
var wins = 0;
var losses = 0;
var currentScore = [];
var myImages = [
    "assets/images/madhatter.png",
    "assets/images/cheshirecat.png",
    "assets/images/caterpillar.png",
    "assets/images/whiterabbit.png",
  ]; 

//$(document).ready(function(){}  //wrap this around all of the functions when they work 


  function randomNum (min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  $("#number-to-guess").html(targetNumber);


  // Create 4 crystals each with a random number and their own image.
  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to a number less than 13
  // Then each crystal image (with all it classes and attributes) will get added to the page.
  
  for (var i = 0; i < numOfcrystals.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", myImages[i]);
    imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    $(".crystals").append(imageCrystal);
    }

    // Add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
  $(".crystal-image").on("click", function() {    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    //show their current score here  ("New score: " + counter);
    $("#currentScore").text("Your score:" + counter);

    if (counter === targetNumber) {
      wins++;
      $("#wins").text('Wins: ' + wins);
      alert("You win!");
      randomNum();             ////why doesnt this give a new random number????
    }

    else if (counter > targetNumber) {
      losses++;
      $("#losses").text('Losses: ' + losses);
      alert("You lose!");
      randomNum();             ////why doesnt this give a new random number????

  console.log(crystalValue);
  console.log(counter);
  console.log(targetNumber);
      }

  });


//write a function? or something that resets number to match
//resets value of each crystal
//resets their score to 0
//but keeps wins and losses (so dont touch them)

 // $("#restart").on("click", function(){
 //    $(".currentScore, .counter, .targetNumber, .crystalValue").appendTo(".reset");
 //    randomNum(min,max);
 //    console.log("test");
 //  });


//function resetVariables(){
        //return randomNum(min,max);
        //return currentScore = [];
        //return counter = 0;
       
        //}




