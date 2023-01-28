  //
  // var val1 = Math.floor(Math.random() * 6) + 1;
  // var val2 = Math.floor(Math.random() * 6) + 1;
  //
  //
  // var src1 = "images/dice" + val1 + ".png";
  // var src2 = "images/dice" + val2 + ".png";
  //
  //
  //
  //
  // document.querySelector(".img1").setAttribute("src", src1);
  // document.querySelector(".img2").setAttribute("src", src2);
  //
  //
  //
  // if (val1 > val2) {
  //   document.querySelector("h1").innerHTML = "Player 1 wins!";
  // } else if (val2 > val1) {
  //   document.querySelector("h1").innerHTML = "Player 2 wins!";
  // } else {
  //   document.querySelector("h1").innerHTML = "It's a Draw!";
  // }
  //







function diceRoll() {
  var val = Math.floor(Math.random() * 6) + 1;
  return val;
}

var player1Roll = diceRoll();
var player2Roll = diceRoll();

console.log(player1Roll);
console.log(player2Roll);

function imageAssigned(roll) {
  var src = "images/dice" + roll + ".png";
  return src;
}

src1 = imageAssigned(player1Roll);
src2 = imageAssigned(player2Roll);

function imagePopulate() {
  document.querySelector(".img1").setAttribute("src", src1);
  document.querySelector(".img2").setAttribute("src", src2);
}

function refreshMe() {

  imagePopulate();
  if (player1Roll > player2Roll) {
    document.querySelector("h1").innerHTML = "⛳ Player 1 wins!";
  } else if (player2Roll > player1Roll) {
    document.querySelector("h1").innerHTML = "Player 2 wins! ⛳";
  } else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
  }
}

refreshMe();
