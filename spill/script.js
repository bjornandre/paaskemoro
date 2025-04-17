const secretWords = "Skiboden til Lioddens"; // The secret words to be revealed
const totalEggs = 5; // Total number of eggs to find
let eggsFound = 0;
let revealedWords = 0;

function revealWord() {
    let revealedStr = secretWords.split(" ").slice(0,revealedWords).join(" ");
    let secretStr = secretWords.split(" ").slice(revealedWords).join(" ").replace(/\S/g, 'x');
    document.getElementById('revealedWords').innerText = `${revealedStr} ${secretStr}`;
}

// Function to create eggs dynamically
function createEggs() {
    const gameArea = document.getElementById('gameArea');
    gameArea.innerHTML = ''; // Clear previous eggs

    revealWord();
    for (let i = 0; i < totalEggs; i++) {
        const egg = document.createElement('div');
        egg.classList.add('golden-egg');

        // Randomly position the egg within the game area
        const x = Math.random() * (gameArea.clientWidth - 10); // Width of egg
        const y = Math.random() * (gameArea.clientHeight - 15); // Height of egg
        egg.style.left = `${x}px`;
        egg.style.top = `${y}px`;

        egg.addEventListener('click', () => {
            if (egg.style.visibility !== 'hidden') {
                egg.style.visibility = 'hidden';
                eggsFound++;
                document.getElementById('eggCounter').innerText = `Antall egg funnet: ${eggsFound}`;
                checkWin();
            }
        });

        gameArea.appendChild(egg);
    }
}

// Function to check if all eggs are found
function checkWin() {
    if (eggsFound === totalEggs) {
        revealedWords++;
        const secretWord = secretWords.split(' ')[revealedWords - 1];
        alert(`Gratulerer! Du har funnet alle eggene! Neste ord i rebusen er: "${secretWord}".`);
        revealWord();
        document.getElementById('restartButton').style.display = 'block';
    }
}

// Function to restart the game
function restartGame() {
    eggsFound = 0;
    document.getElementById('eggCounter').innerText = 'Antall egg funnet: 0';
    createEggs();
    document.getElementById('restartButton').style.display = 'none';
}

// Initialize the game
document.addEventListener('DOMContentLoaded', function () {
    createEggs();
    document.getElementById('restartButton').addEventListener('click', restartGame);
});
