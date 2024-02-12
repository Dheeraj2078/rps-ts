class RockPaperScissor {
    constructor() {
        this.summaryRef = document.getElementById("summary");
        this.resultRef = document.getElementById("result");
        this.scoreCardRef = document.getElementById("scoreCard");
        this.userScore = 0;
        this.computerScore = 0;
        this.result = 0;
        this.option = {
            0: "Rock",
            1: "Paper",
            2: "Scissor"
        };
    }
    userSelectedUtil(user) {
        const computer = Math.floor(Math.random() * 3);
        if (user == computer) {
            this.result = -1;
        }
        if (user == 0) {
            if (computer == 1) {
                this.result = 0;
                this.computerScore++;
            }
            else if (computer == 2) {
                this.result = 1;
                this.userScore++;
            }
        }
        else if (user == 1) {
            if (computer == 0) {
                this.result = 1;
                this.userScore++;
            }
            else if (computer == 2) {
                this.result = 0;
                this.computerScore++;
            }
        }
        else if (user == 2) {
            if (computer == 0) {
                this.result = 0;
                this.computerScore++;
            }
            else if (computer == 1) {
                this.result = 1;
                this.userScore++;
            }
        }
        let summaryDescription = `
        
            <div>
            User choose : <span class="choice">${this.option[user]}</span>  
            </div>

            <div>
            Comuter choose : <span class="choice">${this.option[computer]}</span>.
            </div>
        `;
        this.summaryRef.innerHTML = summaryDescription;
        this.summaryRef.classList.add("sub-heading");
        let resultDescription = (this.result == 1) ? "User Won" : "Computer Won";
        if (this.result == -1)
            resultDescription = "Its a tie.";
        this.resultRef.innerHTML = resultDescription;
        this.resultRef.classList.add("sub-heading");
        this.scoreCardRef.innerHTML = `
                <div class="scoreCardWrapper">
                    <div class="scoreNumber button">${this.userScore}</div>
                    <div class="scoreNumber button">${this.computerScore}</div>
                </div>
            `;
    }
}
class startGame {
    constructor() {
        this.contentRef = document.getElementById("content");
    }
    start(name) {
        this.contentRef.innerHTML = `<div class="heading">Make a choice</div>
        <div class="button"  onclick="userSelected(0)">
            <div >Rock</div>
        </div>
        <div class="button" onclick="userSelected(1)">
            <div>Paper</div>
        </div>
        <div class="button" onclick="userSelected(2)">
            <div>Scissor</div>
        </div>
        `;
    }
}
const redirect = new startGame();
function handleStart(name) {
    redirect.start(name);
}
const newGame = new RockPaperScissor();
function userSelected(user) {
    newGame.userSelectedUtil(user);
}
