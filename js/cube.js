/**
 * Class of the cubes that make the game.
 * This cubes have same size, they are squares.
 * They start with the number 2 in his innerhtml
 * They change color when have some specific number
 * 
 */
class Cube {
    /**
     * 
     * @param {Integer} size the large of each side of the square
     * @param {Integer} number the number that show in the square
     * @param {Integer} posX  position in X axis, where the square gonna stay or spawn in the game
     * @param {Integer} posY  position in Y axis, where the square gonna stay or spawn in the game
     */
    constructor(size, number, posX, posY) {
        this.size = size;
        this.num = number;
        this.point = new PointerEvent(posX, posY);

    }
}