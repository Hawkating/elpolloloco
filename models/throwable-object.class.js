class ThrowableObject extends MovableObject {

    width = 80;
    height = 120;
    IMAGES_ROTATION = [
        './img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];
    IMAGES_SPLASH = [
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ]
    intervalId;
    currentImageRotation = 0;
    currentImageSplash = 0;
    otherDirection = false;
    splashStarted = false;
    throwSound = new Audio('./audio/throw.mp3');
    brokenBottleSound = new Audio('./audio/brokenbottle.mp3');

    /**
     * setup the bottle to the character via coordinates and load images
     * @param {number} y 
     */
    constructor(y) {
        super();
        this.x = world.character.x;
        this.y = y;
        this.loadImage('./img/6_salsa_bottle/salsa_bottle.png', this.x);
        this.loadImages(this.IMAGES_ROTATION);
        this.loadImages(this.IMAGES_SPLASH);
        if (world.character.otherDirection) {
            this.otherDirection = true;
        }
        this.throw();
    }

    /**
     * Prepares the logic for the bottle and the interval
     */
    throw() {
        if (!mute) {
            this.throwSound.play();
        }
        this.speedY = 30;
        this.applyGravity();
        world.lastThrow = new Date().getTime();
        this.intervalId = setInterval(() => this.throwInterval(), 50)
    }

    /**
     * animation for the bottle
     */
    throwInterval(){
        if (this.bottleSplashBecauseOfGround()) {
            this.breakBottle();
        } else if (this.currentImageSplash == 0) {
            this.img = this.imageCache[this.IMAGES_ROTATION[this.currentImageRotation]];
            this.currentImageRotation++;
            if (this.currentImageRotation > 3) {
                this.currentImageRotation = 0;
            }
            if (this.otherDirection) {
                this.x -= 15;
            } else if (!this.otherDirection) {
                this.x += 15;
            }
        }
    }

    /**
     * checks if the bottle is on ground
     * @returns true or false
     */
    bottleSplashBecauseOfGround() {
        return this.y > 350;
    }

    /**
     * animation for the breaking bottle
     */
    breakBottle() {
        this.splashStarted = true;
        if (!mute) {
            this.brokenBottleSound.play();
        }
        this.acceleration = 0;
        this.speedY = 0;
        this.img = this.imageCache[this.IMAGES_SPLASH[this.currentImageSplash]];
        this.currentImageSplash++;
        if (this.currentImageSplash > 5) {
            this.currentImageSplash = 5;
            clearInterval(this.intervalId);
            this.stopImage();
            this.splashStarted = false;
        }
    }

    /**
     * puts the image outside of the canvas
     */
    stopImage() {
        this.y = 2000;
    }

}