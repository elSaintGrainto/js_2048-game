/**
 * Class of the squares that make the game.
 * This squares have same size.
 * They start with the number 2 in his innerhtml
 * They change color when have some specific number(change class color)
 * RECOMENDATION to have a class "square" that have size and color of this square
 * 
 */
class Square {
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
            if (number < 2) {
                console.log("can not set number below 2")
            }
            this.num = number;
            this.position = new function() {
                this.x = posX;
                this.y = posY;
            }
            this.div = document.createElement("div");
        }
        /**
         * Return a "Div", that represent the square maked, this one have a class "square"
         * that have his size and colors setted
         */
    get square() {
            let textN;
            if (this.num != null) {
                textN = document.createTextNode(this.num);
                this.div.appendChild(textN);
                this.div.classList.add("square"); //setting size, colors
                return this.div;
            } else {
                console.log("can not make square, need to set a number to show in");
                return null;
            }
        }
        /**return the position in x,y of the square */
    get getPosition() {
            return this.position;
        }
        /**set the position in x of the square not accept null*/
    set setPositionX(posX) {
            if (posX != null)
                this.position.x = posX;
        }
        /**set the position in y of the square not accept null*/
    set setPositionY(posY) {
            if (posY != null)
                this.position.y = posY;
        }
        /**set the number to show in the div */
    set setNumber(number) {
        if (number != null || number > 1) {
            this.num = number;
            div.appendChild(document.createTextNode = "" + this.num);
        }
    }
}