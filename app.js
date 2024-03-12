let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");


const genComputerChoice = () => {
    // rock , paper , scissor me se rnadom choose krna h
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3); // to produce random number 1-3 normal range is 0-1 math.floor se decimal hat jaega
    return options[randomIndex];
};
const drawGame = () => {
    msg.innerText = "Game was drawn , Play Again";
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN !! , Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOST , ${compChoice} Beats Your ${userChoice} `;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    // generate comp choice
    const compChoice = genComputerChoice();
    if (userChoice === compChoice) {
        //draw condition
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //comp either generated scissor or paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});