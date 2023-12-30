let computerMove = undefined;
let win = 0;
let ties = 0;
let lose = 0;

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
        ties++;
        return 'draw';
    } else if (player === 'rock' && computer === 'scissors') {
        win++;
        return 'player';
    } else if (player === 'paper' && computer === 'rock') {
        win++;
        return 'player';
    } else if (player === 'scissors' && computer === 'paper') {
        win++;
        return 'player';
    } else {
        lose++;
        return 'computer';
    }
}

function showResult(player, computer) {
    result = compare(player, computer);
    if (result === 'player') {
        alert(`You win! You chose ${player} and the computer chose ${computer}. Current score: ${win} wins, ${ties} ties, ${lose} losses.`);
        return;
    }

    if (result === 'computer') {
        alert(`You lose! You chose ${player} and the computer chose ${computer}. Current score: ${win} wins, ${ties} ties, ${lose} losses.`);
        return;
    }

    if (result === 'draw') {
        alert(`It's a draw! You chose ${player} and the computer chose ${computer}. Current score: ${win} wins, ${ties} ties, ${lose} losses.`);
        return;
    }
}