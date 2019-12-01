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
moveBox("RIGHT");

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
/** transition effect of box, delete when move to sum
 */
//TODO
function sqrMoved() {

}
//TODO need a function that detect if the floor at the corresponding side
function moveBox(side) {
    let floor = document.getElementsByClassName("floor");
    let count = 0;
    for (let top = 0; top < sizeMtx; top++) {
        for (let left = 0; left < sizeMtx; left++) {
            let f = floor[count].childElementCount;
            if (f == 1) {
                //get position to know if can move
                let box = floor[count].children.item(0);
                let num = box.textContent;
                let moveTop = 0,
                    moveLeft = 0;
                c("box" + top + "-" + left);
                if (side == "UP") {
                    c("moving UP");
                    moveTop = checkToMove(top, left, num, true); //true for decrese y axis
                }
                if (side == "DOWN") {
                    c("moving DOWN");
                    moveTop = checkToMove(top, left, num, false); //false for increse y axis
                }
                if (side == "RIGHT") {
                    c("moving RIGHT");
                    moveLeft = checkToMove(left, top, num, false); //false for increse x axis
                }
                if (side == "LEFT") {
                    c("moving LEFT");
                    moveLeft = checkToMove(left, top, num, true); //true for decrese x axis
                }
                if (moveTop == top && moveLeft == left) {
                    //dont move, stay there
                    c("nope, im not moving")
                } else {
                    c("movingT=" + moveTop);
                    c("movingL=" + moveLeft);
                    //do translation
                }


            }
            count++;
        }
    }
}

/**
 * Check if the next floor is empty or have a box. If have a Empty Box, return the position of the box.
 * If have a number check a match in numbers and return this Box position or the floor position at back
 * @param {Integer} x X axis or Top, represents the position of the box
 * @param {Integer} y Y axis or Left, represents the position of the box
 * @param {String} num  represents the number in the box
 * @param {Boolean} bDecrese if is true this will check from bottom to top, else top to bottom
 */
1, 2

function checkToMove(x, y, num, bDecrese) {
    //checking x axis (from bottom to top) meanwhile test
    //this function works for y (from right to left) too
    if (x == 0) {
        console.log("can not move less");
        c("x=" + x);
        return parseInt(x);
    }
    if (x == sizeMtx - 1) {
        console.log("can not move more");
        c("x=" + x);
        return parseInt(x);
    }

    x = bDecrese ? x - 1 : x + 1;
    c("checking pos-" + x + "-" + y);
    let floor = document.getElementsByClassName("pos-" + x + "-" + y);
    c("checking =" + floor[0]);
    let childs = floor[0].childElementCount;
    if (childs == 0) { //recursion while empty floor
        checkToMove(x, y, num, bDecrese);
    } else { //child==1
        let textNum = floor.textContent;
        if (textNum == num) {
            c("xSum=" + x);
            return parseInt(x); //return to start sum and move right here
        } else {

            x = bDecrese ? x - 1 : x + 1
            c("xDif=" + x);
            //return back box to dont move,or just less move
            return parseInt(x);
        }
    }
}