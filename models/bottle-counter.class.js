class BottleCounter extends DrawableObject {

    x = 0;
    y = 50;
    width = 75;
    height = 52;
    bottlecount = 0;
    collectbottleSound = new Audio ('./audio/collectbottle.mp3');

    /**
     * Loads image
     */
    constructor() {
        super().loadImage('./img/7_statusbars/3_icons/icon_salsa_bottle.png', this.x);
    }

    /**
     * Collect a bottle: setup the y-coordinate of this bottle outside of the canvas / increases the bottlecounter
     * @param {object} obj - bottle on the ground
     */
    collect(obj){
        if (!mute) {
        this.collectbottleSound.play();
        }
        this.bottlecount ++;
        obj.y = -2000;
    }
}