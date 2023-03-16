const userScore = 0;
const compScore = 0;
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