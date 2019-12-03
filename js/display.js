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

//right and down need to count down on variables of FOr loop
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
    c("randN=" + rNum);
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

function moveBox(side) {
    let floor = document.getElementsByClassName("floor");
    let count = 0;
    //TODO change the loop direction depending the side, change top and left
    if (side == "UP" || side == "LEFT") {
        for (let top = 0; top < sizeMtx; top++) {
            for (let left = 0; left < sizeMtx; left++) {
                let f = floor[count].childElementCount;
                if (f >= 1) {
                    //get position to know if can move
                    let box = floor[count].children.item(0);
                    let num = box.textContent;
                    c("box" + top + "-" + left);
                    if (side == "UP") {
                        c("moving UP");
                        checkToMove(box, top, left, num, true); //true for decrese y axis
                    }
                    if (side == "LEFT") {
                        c("moving LEFT");
                        checkToMove(box, left, top, num, true, "left"); //true for decrese x axis
                    }
                }
                count++;
            }
        }
    }
    count = floor.length - 1;
    if (side == "RIGHT" || side == "DOWN") {
        for (let top = sizeMtx - 1; top >= 0; top--) {
            for (let left = sizeMtx - 1; left >= 0; left--) {
                let f = floor[count].childElementCount;
                if (f == 1) {
                    //get position to know if can move
                    let box = floor[count].children.item(0);
                    let num = box.textContent;
                    c("box" + top + "-" + left);
                    if (side == "DOWN") {
                        c("moving DOWN");
                        checkToMove(box, top, left, num, false); //false for increse y axis
                    }
                    if (side == "RIGHT") {
                        c("moving RIGHT");
                        checkToMove(box, left, top, num, false, "left"); //false for increse x axis
                    }
                }
                count--;
            }
        }
    }

}

/**
 * Check if the next floor is empty or have a box. If have a Empty Box, return the position of the box.
 * If have a number check a match in numbers and return this Box position or the floor position at back
 * @param {HTMLDivElement} box htmlElement that contain the square with the number
 * @param {Integer} x X axis or Top, represents the position of the box
 * @param {Integer} y Y axis or Left, represents the position of the box
 * @param {String} num  represents the number in the box
 * @param {Boolean} bDecrese if is true this will check from bottom to top, else top to bottom
 * @param {String} axis to know the axis that i am checking , default "top"
 */
function checkToMove(box, x, y, num, bDecrese, axis = "top") {
    if (x == sizeMtx - 1 && !bDecrese) { //moved to max range of floor, empty place
        let clName = axis == "top" ? "pos-" + x + "-" + y : "pos-" + y + "-" + x;
        let floor = document.getElementsByClassName(clName);
        //transition, then remove
        translateSquare(box, floor[0]);
        //floor[0].appendChild(box);
        c("max move to " + clName);
        return;
    }
    x = bDecrese ? x - 1 : x + 1; //check if can move more
    if (x >= 0) { //moving to next floor seeking for a match
        let clName = axis == "top" ? "pos-" + x + "-" + y : "pos-" + y + "-" + x;
        let floor = document.getElementsByClassName(clName);
        c("checking =" + floor[0].className);
        let childs = floor[0].childElementCount;
        if (childs == 0) { //recursion while empty floor
            checkToMove(box, x, y, num, bDecrese, axis);
        } else { //child==1
            let textNum = floor[0].children.item(0).textContent;
            c("num in floor=" + textNum);
            if (textNum == num && num > 0) {
                c("xSum=" + x);
                //transition, then increse, then remove
                translateSquare(box, floor[0]);
                //box.ontransitionend=increseBoxNum(floor[0]);
                //delete append
                //floor[0].appendChild(box);
                return; //TODO return to start sum and move right here
            } else {
                x = bDecrese ? x - 1 : x + 1
                c("xDif=" + x);
                //transition, then remove
                translateSquare(box, floor[0]);
                //floor[0].appendChild(box);
                //return back box to dont move,or just less move
                return;
            }
        }
    }
}
/**
 * 
 * @param {HTMLElement} box 
 */
function increseBoxNum(firstBox) {
    firstBox.innerHTML = Math.pow(parseInt(firstBox.textContent), 2);
    //change color
}

/**
 * 
 * @param {HTMLElement} box 
 * @param {HTMLElement} parent 
 */
function translateSquare(box, parent) {
    let top = parent.getBoundingClientRect().top - box.getBoundingClientRect().top;
    let left = parent.getBoundingClientRect().left - box.getBoundingClientRect().left;
    c("MOV top=" + top + ";left=" + left);
    set_translate(box, top, left);
    //on translation end remove  box for sum or not
}
/**
 * 
 * @param {HTMLElement} e 
 * @param {Integer} pix 
 */
function set_translate(e, top, left) {
    e.style["-webkit-transform"] = "translate(" + top + "px, " + left + "px)";
    e.style["-moz-transform"] = "translate(" + top + "px, " + left + "px)";
    e.style["-ms-transform"] = "translate(" + top + "px, " + left + "px)";
    e.style["-o-transform"] = "translate(" + top + "px, " + left + "px)";
    e.style["transform"] = "translate(" + top + "px, " + left + "px)";
}