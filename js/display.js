/**
 * get a square and positioned him in the game,
 * maybe a matriz, with position ready
 * then add a scale effect when spawn a square,
 * then add a transition effect when moved from position
 */
//make a big square for main panel, then small squares for position
let sqrPanel = document.createElement("div");
const c = console.log;
let sizeSqr = 50;
let sizeMtx = 4;
let posX = 0,
    posY = 0;
//maybe use grid or flexbox to position it the squares
/**
 * Generate a matrix of squares with "floor" class in it and apped them on sqr-panel
 * @param {Integer} size large of matrix
 */
function generateFloor(size) {
    sqrPanel.classList.add("sqr-panel");
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let d = document.createElement("div");
            d.classList.add("square");
            d.classList.add("floor");
            sqrPanel.appendChild(d);
        }
    }
    document.getElementById("main-panel").appendChild(sqrPanel);
}

function calculateSizeFloor() {
    //not worked so good better use flex o grid
    let mrgSqr = 7;
    let w = sizeSqr * sizeMtx + mrgSqr;
    sqrPanel.classList.add("sqr-panel");
    sqrPanel.setAttribute("width", w);
    sqrPanel.setAttribute("height", w);
}

//calculateSizeFloor();
generateFloor(sizeMtx);
setNewSquare();
setNewSquare();

function setNewSquare() {
    let floor = document.getElementsByClassName("floor");
    let max = sizeMtx * sizeMtx;
    let rNum = parseInt(Math.random() * max);
    let f = floor[rNum].childElementCount;
    //getting new position of a random square
    while (rNum > max || f == 1) {
        rNum = parseInt(Math.random() * max);
        f = floor[rNum].childElementCount;
    }
    c("r=" + rNum);
    let top = floor[rNum].getBoundingClientRect().x;
    let left = floor[rNum].getBoundingClientRect().y;
    //setting new square
    let sqr = new Square(2, top, left);
    let box = sqr.square;
    if (box != null) {
        floor[rNum].appendChild(box);
    }
    box.classList.add("sqr-color");
}
/** move box at 1 box length
 * move box if the direction of the movement have one box with the same numberor a free space
 * when the box moved, delete it, sum the nunmbers and conserv the one that was there,
 * finaly change the color of the box
 */
//TODO
function sqrMoved() {

}