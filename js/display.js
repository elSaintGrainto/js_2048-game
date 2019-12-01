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
            d.classList.add(`pos-${i}-${j}`);
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
//TODO need a function that detect if the floor at the corresponding side
function moveBox(side) {
    let floor = document.getElementsByClassName("floor");
    if (side == "up") {
        let count = 0;
        for (let top = 0; top < sizeMtx; top++) {
            for (let left = 0; left < sizeMtx; left++) {
                let f = floor[count].childElementCount;
                if (f == 1) {
                    //get position to know if can move
                    let box = floor[count].children.item(0);
                    let num = box.textContent;
                    console.log("box=" + box);
                    let pos = "pos-" + top + "-" + left;
                    checkToMove(top, left, num);
                }
                count++;
            }
        }
    }
}

function checkToMove(x, y, num) {
    //this parse mode can not be this way
    if (X == 0) {
        console.log("can not move up");
        return x;
    }
    if (y == 0) {
        console.log("can not move left");
        return y;
    }
    if (x == sizeMtx - 1) {
        console.log("can not move right");
        return x;
    }
    if (y == sizeMtx - 1) {
        console.log("can not move bottom");
        return y;
    }
    //checking x axis (from bottom to top) meanwhile test
    //this function works for y (from right to left) too
    let floor = document.getElementsByClassName("pos-" + x - 1 + "-" + y)[0];
    let childs = floor.childElementCount;
    if (childs == 0) { //recursion while empty floor
        checkToMove(x - 1, y, num);
    } else { //child==1
        let textNum = floor.textContent;
        if (textNum == num) {
            return x; //return to start sum and move right here
        } else {
            return x - 1; //return back box to dont move,or just less move
        }
    }
}