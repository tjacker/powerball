/*jslint esversion: 6, browser: true*/
/*global window, $, jQuery, alert*/

const numberOfWhiteBalls = 69;
const numberOfRedBalls = 26;
const whiteBallsDrawn = 5;


// random number to represent a ball being drawn
function getRandomNumber(numberOfBalls) {
  var randomNumber = Math.floor(Math.random() * numberOfBalls) + 1;
  return randomNumber;
} // end getRandomNumber

function generateNumbers() {
  var whiteBalls = [];
  var redBall;
  var numberCheck;
  // generate random numbers for the white balls
  do {
    numberCheck = getRandomNumber(numberOfWhiteBalls);
    // check to see if number is a duplicate before adding to array
    if (whiteBalls.indexOf(numberCheck) === -1) {
      whiteBalls.push(numberCheck);
    } // end if
  } while (whiteBalls.length < whiteBallsDrawn); // do..while loop

  // generate random number for the red ball
  redBall = getRandomNumber(numberOfRedBalls);
  
  // sort white balls in ascending order
  whiteBalls.sort(function (a, b) {
    return a - b;
  }); // end sort

  // loop through list items to assign text from numbers generated
  $("li.white-ball").each(function (i) {
    $(this).text(whiteBalls[i]);
  }); // end each

  $(".red-ball").text(redBall);
} // end generateNumbers

$("#btn").click(generateNumbers); // generate lottery numbers without having to reload

// generate lottery numbers when page loads
window.onload = function () {
  generateNumbers();
};