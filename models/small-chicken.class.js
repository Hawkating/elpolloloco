
class SmallChicken extends MovableObject {
    x;
    y = 385;
    width = 49.6;
    height = 48.6;
    IMAGES_WALKING = [
        './img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];
    IMAGES_DEAD = ['./img/3_enemies_chicken/chicken_small/2_dead/dead.png'];
    animationStarted = false;

    currentImage = 0;

    /**
     * Setup the chicken via x-coordinate and load images
     * @param {number} startX 
     */
    constructor(startX) {
        super().loadImage('./img/3_enemies_chicken/chicken_small/1_walk/1_w.png', this.x);
        this.setStartPoint(startX)
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.applyGravity();
    }

    /**
     * Uses the handovered x-coordinate to have a startpoint and makes it variable with random number
     * @param {number} startX 
     */
    setStartPoint(startX) {
        this.x = startX + Math.random() * 500;
    }

    /**
     * Setup the animation-interval
     * @param {object} character 
     */
    setAnimationInterval(character) {
        let intervalId = setInterval(() => this.animate(character), 100);
        allIntervals.push(intervalId);
        pauseIntervalChicken.push(intervalId);
    }

    /**
     * Decides due conditions what animation will be played
     * @param {object} character 
     */
    animate(character) {
        if (this.isDead()) {
            this.deadEvent();
        } else {
            if (this.x - character.x < 1000 || this.animationStarted == true) {
                this.moving();
            }
        }
    }

    /**
     * animation and logic if small chicken is dead
     */
    deadEvent() {
        this.img = this.imageCache[this.IMAGES_DEAD[0]];
        if (this.y == 385) {
            this.y = 390;
        }
    }

    /**
     * animation and logic if small chicken is moving
     */
    moving(){
        let path = this.IMAGES_WALKING[this.currentImage];
        this.img = this.imageCache[path];
        this.x -= 10 * Math.random();
        this.currentImage++;
        this.animationStarted = true;
        if (this.currentImage > 2) {
            this.currentImage = 0;
        }
        this.jump();
    }
    
    /**
     * small chicken can jump
     */
    jump() {
        if (this.isAboveGround() == false) {
            this.speedY = 20;
        }
    }

}