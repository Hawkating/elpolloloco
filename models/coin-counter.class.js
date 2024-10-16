class CoinCounter extends DrawableObject {

    x = 600;
    y = 7;
    width = 45;
    height = 45;
    coincount = 0;
    collectbottleSound = new Audio('./audio/collectcoin.mp3');

    /**
     * Loads image
     */
    constructor() {
        super().loadImage('./img/7_statusbars/3_icons/icon_coin.png', this.x);
    }

    /**
     * Collect a coin: setup the y-coordinate of this coin outside of the canvas / increases the coincounter
     * @param {object} obj - coin
     */
    collect(obj) {
        if (!mute) {
            this.collectbottleSound.play();
        }
        this.coincount++;
        obj.y = -2000;
    }
}