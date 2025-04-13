const totalEggs = 5; // Total number of eggs to find
let eggsFound = 0;

// Function to create eggs dynamically
function createEggs() {
    const gameArea = document.getElementById('gameArea');
    gameArea.innerHTML = ''; // Clear previous eggs
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
        alert('Gratulerer! Du har funnet alle eggene! Neste ord i rebusen er: "Kylling".');
        document.getElementById('restartButton').style.display = 'block';
    }
}

// Function to restart the game
function restartGame() {
    eggsFound = 0;
    document.getElementById('eggCounter').innerText = 'Eggs Found: 0';
    createEggs();
    document.getElementById('restartButton').style.display = 'none';
}

// Initialize the game
createEggs();
document.getElementById('restartButton').addEventListener('click', restartGame);