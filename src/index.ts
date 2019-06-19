// Declate varible names
let player = 'rock';
let otherPlayers: string[] = ['paper', 'scissors'];

// Declare the index of the loop
let i = 1;

// Check to see if the winner between ROCL and any other play
export const checkMatch = (player: string, randomPlayer: string) => {
    // conditional statement
    if (player === 'rock' && randomPlayer === 'scissors') {
        return 'rock wins';
    } else {
        if (randomPlayer === 'paper') {
            return 'Rock losses';
        }
    }
};

// Display the output of the function in a string
export const checkPlayers = (player: string, randomPlayer: string) => {
    return console.log(`${player} + ${randomPlayer} = ${checkMatch(player, randomPlayer)}`);
};

//Run a loop 100s over 100 loops to enhance performace and low consumption to memory
export const myLoop = () => {
    setTimeout(function() {
        // Picks player at random
        let randomPlayer = otherPlayers[Math.floor(Math.random() * otherPlayers.length)];

        checkPlayers(player, randomPlayer);

        i++;
        if (i <= 100) {
            myLoop(); //Run a loop function if looping has not reach 100
        }
    }, 100);
};
myLoop(); // run the loop again after 100 sec of delay
