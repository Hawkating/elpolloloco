class CollectableBottle extends CollectableObject {

    width = 80;
    height = 100;
    y = 345;
    IMAGES_BOTTLE = [
        './img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        './img/6_salsa_bottle/2_salsa_bottle_on_ground.png'

    ]
    currentImage = 0;

    /**
     * Setup the images and coordinates
     * @param {number} x 
     */
    constructor(x) {
        super();
        this.x = x;

        this.loadImage('./img/6_salsa_bottle/1_salsa_bottle_on_ground.png', this.x);
        this.loadImages(this.IMAGES_BOTTLE);
        this.animate();
    }

    /**
     * Start the animation interval
     */
    animate() {
        let interval = setInterval(() => {
            this.img = this.imageCache[this.IMAGES_BOTTLE[this.currentImage]];
            this.currentImage++;
            if (this.currentImage > 1) {
                this.currentImage = 0;
            }
        }, 800);
        allIntervals.push(interval);
    }

}