/**
 * Class of the cubes that make the game.
 * This cubes have same size, they are squares.
 * They start with the number 2 in his innerhtml
 * They change color when have some specific number(change class color)
 * 
 */
class Cube {
    /**
     * 
     * @param {Integer} number the number that show in the square
     * @param {Integer} posX  position in X axis, where the square gonna stay or spawn in the game
     * @param {Integer} posY  position in Y axis, where the square gonna stay or spawn in the game
     */
    constructor(number, posX, posY) {
        this.size = size;
        this.num = number;
        this.point = new PointerEvent(posX, posY);

    }
    get square() {
        let div = document.createElement("div");
        let textN;
        if (this.num != null) {
            textN = document.createTextNode = "" + this.num;
            div.appendChild(textN);
            div.classList.add("square"); //setting size, colors
            return div;
        } else {
            console.log("can not make square, need to set a number to show in");
            return null;
        }

    }
}