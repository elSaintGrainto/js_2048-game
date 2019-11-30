/**
 * get a square and positioned him in the game,
 * maybe a matriz, with position ready
 * then add a scale effect when spawn a square,
 * then add a transition effect when moved from position
 */
//make a big square for main panel, then small squares for position
let div = document.createElement("div").classList.add("main-panel");
let sqrBg = document.createElement("div").classList.add("sqr-floor");
let sizeX, sizeY, sizeSqr = 50;
let posX = 0,
    posY = 0;
//maybe use grid or flexbox to position it the squares
for (let i = 0; i < sizeX; i++) {

    for (let j = 0; j < sizeY; j++) {
        let d = document.createElement("div");

        div.appendChild(d);

    }
}