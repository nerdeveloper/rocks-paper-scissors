
let player = 'rock';
let otherPlayers: string[] = ['paper', 'scissors'];

let i = 1;

export const  checkMatch = (player: string, randomPlayer: string) => {
    if (player === 'rock' && randomPlayer === 'scissors') {
        return 'rock wins';
    } else {
        if (randomPlayer === 'paper') {
            return 'Rock losses';
        }
    }
};
export const  checkPlayers = (player: string, randomPlayer: string) => {
    
    return console.log(`${player} + ${randomPlayer} = ${checkMatch(player, randomPlayer)}`);
};

export const myLoop = () => {
    setTimeout(function() {
      
        let randomPlayer = otherPlayers[Math.floor(Math.random() * otherPlayers.length)];

        checkPlayers(player, randomPlayer);
        i++;
        if (i <= 10) {
            myLoop();
        }
    }, 100);
};
myLoop();
