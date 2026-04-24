let secretNumber = ""
let guessNumber = ''
let chances = 5

let inputOne = document.getElementById("inputOne")
let inputTwo = document.getElementById("inputTwo")
let playerOne = document.getElementById("playerOne")
let playerTwo = document.getElementById("playerTwo")
let result = document.getElementById("result")

function playerOneNumber() {
secretNumber = inputOne.value;
document.getElementById("playerOne").style.display = "none"
document.getElementById("playerTwo").style.display = "block"
}

function playerTwoNumber(){
    guessNumber = inputTwo.value

    if(secretNumber == guessNumber){
         result.innerHTML = "👏congratulations! Player Two won👏"
    }
   else {
    chances--
    if(chances > 0){
        result.innerHTML = `❌ Wrong Guess! ${chances} chances left. ❌`
    }else {
        result.innerHTML ='💫 Player One Wins 💫'
    }
   }
}