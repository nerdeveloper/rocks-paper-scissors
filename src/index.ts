
export module rocksPaperScissors {
let player = 'rock';
let otherPlayers: string[] = ['paper', 'scissors'];

let i = 1;

let myLoop = () => {
    setTimeout(function() {
        let randomPlayer = otherPlayers[Math.floor(Math.random() * otherPlayers.length)];

        let checkPlayers = (player: string, randomPlayer: string) => {
            let checkMatch = (player: string, randomPlayer: string) => {
                if (player === 'rock' && randomPlayer === 'scissors') {
                    return 'rock wins';
                } else {
                    if (randomPlayer === 'paper') {
                        return 'Rock losses';
                    }
                }
            };
            return console.log(`${player} + ${randomPlayer} = ${checkMatch(player, randomPlayer)}`);
        };
        checkPlayers(player, randomPlayer);
        i++;
        if (i <= 10) {
            myLoop();
        }
    }, 100);
};
myLoop();
}