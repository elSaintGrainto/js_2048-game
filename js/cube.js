/**
 * Class of the squares that make the game.
 * This squares have same size.
 * They start with the number 2 in his innerhtml
 * They change color when have some specific number(change class color)
 * RECOMENDATION to have a class "square" that have size and color of this square
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
            if (number == null || posX == null || posY == null) {
                console.log("can not make square, need to fill allt the params");
                return -1;
            }
            this.size = size;
            this.num = number;
            this.point = new PointerEvent(posX, posY);
        }
        /**
         * Return a "Div", that represent the square maked, this one have a class "square"
         * that have his size and colors setted
         */
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
    get getPosition() {
        return this.point;
    }
}