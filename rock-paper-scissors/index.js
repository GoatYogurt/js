let computerMove = undefined;
let win = 0;
let ties = 0;
let lose = 0;

const score = {
    wins: 0,
    losses: 0,
    ties: 0
}

function randomMove() {
    const moves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.random();
    if (randomIndex < 0.34) {
        return moves[0];
    } else if (randomIndex <= 0.67) {
        return moves[1];
    } else {
        return moves[2];
    }
}

function compare(player, computer) {
    if (player === computer) {
        score.ties++;
        return 'draw';
    } else if (player === 'rock' && computer === 'scissors') {
        score.wins++;
        return 'player';
    } else if (player === 'paper' && computer === 'rock') {
        score.wins++;
        return 'player';
    } else if (player === 'scissors' && computer === 'paper') {
        score.wins++;
        return 'player';
    } else {
        score.losses++;
        return 'computer';
    }
}

function showResult(player, computer) {
    result = compare(player, computer);
    if (result === 'player') {
        alert(`You win! You: ${player} - computer: ${computer}. Current score: ${score.wins} wins, ${score.ties} ties, ${score.losses} losses.`);
        return;
    }

    if (result === 'computer') {
        alert(`You lose! You: ${player} - computer: ${computer}. Current score: ${score.wins} wins, ${score.ties} ties, ${score.losses} losses.`);
        return;
    }

    if (result === 'draw') {
        alert(`It's a draw! You: ${player} - computer: ${computer}. Current score: ${score.wins} wins, ${score.ties} ties, ${score.losses} losses.`);
        return;
    }
}