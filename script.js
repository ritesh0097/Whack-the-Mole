let currentMoleTile;
let currentPlantTile;
let score = 0;
let gameOver = false;
let gameOverCard = document.getElementById('gameOver');

gameOverCard.style.display = "none";

let play = document.getElementById('play');


play.addEventListener('click', ()=> {
    location.reload();
})

window.onload = () => {
    setGame();
}


let setGame = () => {
    // setuping the grid for the game board in html

    for(let i = 0; i<9; i++){ //i goes from 0 to 8, stops at 9
        
        let tile = document.createElement('div');
        tile.id = i.toString(); // <div id="0-8"> </div>

        tile.addEventListener('click', selectTile);

        document.getElementById('board').appendChild(tile);

    }
    
    setInterval(setMole, 2000); //2000 milliseconds = 2 seconds
    setInterval(setPlant, 2000); //2000 milliseconds = 2 seconds
}

function getRandomTile() {
    // math.random => (0-1) * 9 = (0-9) => round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    
    if(gameOver) {
        return
    }

    if(currentMoleTile) {
        currentMoleTile.innerHTML = "";
    }
    
    let mole = document.createElement('img');
    mole.src = "mole.png";

    let num = getRandomTile();

    if(currentPlantTile && currentPlantTile.id == num) {
        return;
    }

    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

function setPlant() {

    if(gameOver) {
        return
    }
    
    if(currentPlantTile) {
        currentPlantTile.innerHTML = "";
    }

    let plant = document.createElement('img');
    plant.src = "plant.png"

    let num = getRandomTile();
    
    if(currentMoleTile && currentMoleTile.id == num) {
        return;
    }
    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plant)

}

function selectTile() {
    
    if(gameOver) {
        return
    }
    
    if(this == currentMoleTile) {
        score += 10;
        document.getElementById('scoreCount').innerText = score.toString();
        // updating score
    } else if(this == currentPlantTile) {
        document.getElementById('score').innerText = "Game Over: " + score.toString();
        gameOver = true;
        gameOverCard.style.display = "flex";
    }

}