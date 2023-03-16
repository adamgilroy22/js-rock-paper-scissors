let userScore = 0;
let compScore = 0;
const userScoreDisplay = document.getElementById("user-score");
const CompScoreDisplay = document.getElementById("comp-score");
const scoreboard = document.querySelector(".scoreboard")
const result = document.querySelector(".result")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

function win(userChoice, compChoice) {
    userScore++;
    userScoreDisplay.innerHTML = userScore;
}

function game(userChoice){
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, compChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, compChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock.addEventListener('click', function() {
        game("rock");
    })

    paper.addEventListener('click', function() {
        game("paper");
    })

    scissors.addEventListener('click', function() {
        game("scissors");
    })

}

main();