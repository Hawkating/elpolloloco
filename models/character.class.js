class Character extends MovableObject {

    x = 0;
    y = 200;
    width = 128;
    height = 240;
    lastMove = 0;

    intervalIdAnimate;
    intervalIdWalk;

    IMAGES_WALKING = [
        './img/2_character_pepe/2_walk/W-21.png',
        './img/2_character_pepe/2_walk/W-22.png',
        './img/2_character_pepe/2_walk/W-23.png',
        './img/2_character_pepe/2_walk/W-24.png',
        './img/2_character_pepe/2_walk/W-25.png',
        './img/2_character_pepe/2_walk/W-26.png',
    ];
    IMAGES_JUMPING = [
        './img/2_character_pepe/3_jump/J-31.png',
        './img/2_character_pepe/3_jump/J-32.png',
        './img/2_character_pepe/3_jump/J-33.png',
        './img/2_character_pepe/3_jump/J-34.png',
        './img/2_character_pepe/3_jump/J-35.png',
        './img/2_character_pepe/3_jump/J-36.png',
        './img/2_character_pepe/3_jump/J-37.png',
        './img/2_character_pepe/3_jump/J-38.png',
        './img/2_character_pepe/3_jump/J-39.png',
    ];
    IMAGES_DEAD = [
        './img/2_character_pepe/5_dead/D-51.png',
        './img/2_character_pepe/5_dead/D-52.png',
        './img/2_character_pepe/5_dead/D-53.png',
        './img/2_character_pepe/5_dead/D-54.png',
        './img/2_character_pepe/5_dead/D-55.png',
        './img/2_character_pepe/5_dead/D-56.png',
        './img/2_character_pepe/5_dead/D-57.png',
    ]
    IMAGES_HURT = [
        './img/2_character_pepe/4_hurt/H-41.png',
        './img/2_character_pepe/4_hurt/H-42.png',
        './img/2_character_pepe/4_hurt/H-43.png'
    ]
    IMAGES_IDLE = [
        './img/2_character_pepe/1_idle/idle/I-1.png',
        './img/2_character_pepe/1_idle/idle/I-2.png',
        './img/2_character_pepe/1_idle/idle/I-3.png',
        './img/2_character_pepe/1_idle/idle/I-4.png',
        './img/2_character_pepe/1_idle/idle/I-5.png',
        './img/2_character_pepe/1_idle/idle/I-6.png',
        './img/2_character_pepe/1_idle/idle/I-7.png',
        './img/2_character_pepe/1_idle/idle/I-8.png',
        './img/2_character_pepe/1_idle/idle/I-9.png',
        './img/2_character_pepe/1_idle/idle/I-10.png'
    ]
    IMAGES_LONGIDLE = [
        './img/2_character_pepe/1_idle/long_idle/I-11.png',
        './img/2_character_pepe/1_idle/long_idle/I-12.png',
        './img/2_character_pepe/1_idle/long_idle/I-13.png',
        './img/2_character_pepe/1_idle/long_idle/I-14.png',
        './img/2_character_pepe/1_idle/long_idle/I-15.png',
        './img/2_character_pepe/1_idle/long_idle/I-16.png',
        './img/2_character_pepe/1_idle/long_idle/I-17.png',
        './img/2_character_pepe/1_idle/long_idle/I-18.png',
        './img/2_character_pepe/1_idle/long_idle/I-19.png',
        './img/2_character_pepe/1_idle/long_idle/I-20.png'
    ]

    currentImageWalking = 0;
    currentImageJumping = 0;
    currentImageGetsHurt = 0;
    currentImageDead = 0;
    currentImageIdle = 0;
    currentImageLongIdle = 0;

    walkingSound = new Audio('./audio/steps.mp3');
    jumpingSound = new Audio('./audio/jump.mp3')
    hurt = false;
    lastHit = 0;
    lastKilledChicken = 501;
    won = false;

    /**
     * Initializes the character parameters and load images
     */
    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png', this.x);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONGIDLE);
        this.setLastMove();
        this.setMovementInterval();
        this.setAnimationInterval();
        this.applyGravity();
        this.walkingSound.volume = 1;
    }

    /**
     * Setup the interval for the movement of the character
     */
    setMovementInterval() {
        this.intervalIdWalk = setInterval(() => this.movementInterval(), 1000 / 30);
        allIntervals.push(this.intervalIdWalk);
        pauseIntervalCharacter.push(this.intervalIdWalk);
    }

    /**
    * Setup the interval for the animation of the character
    */
    setAnimationInterval() {
        this.intervalIdAnimate = setInterval(() => this.animationInterval(), 1000 / 30);
        allIntervals.push(this.intervalIdAnimate);
        pauseIntervalCharacter.push(this.intervalIdAnimate);
    }

    /**
     * Creates the movement of the character due different conditions
     */
    movementInterval() {
        if (!this.canMoveLeft() && !this.canMoveRight()) {
            this.walkingSound.pause();
        } else if (this.canMoveRight()) {
            this.moveRight();
        } else if (this.canMoveLeft()) {
            this.moveLeft();
        }
        if (this.canJump()) {
            this.jump()
        }
        this.world.camera_x = -this.x + 100;
    }

    /**
    * Uses the keyboardkeys to manipulate the animations of the character
    */
    animationInterval() {
        this.setupY(this.y, 200);
        if (this.isDead()) {
            this.isDeadEvent();
        } else if (this.justGotHurt()) {
            this.justGotHurtEvent();
        } else if (this.isAboveGround()) {
            this.jumpEvent();
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.moveEvent();
        } else {
            this.animateIdle();
        }
    }

    /**
     * Checks if the conditions are true
     * @returns true or false
     */
    canMoveRight() {
        return this.world.keyboard.RIGHT && this.x < 5000 && !this.justGotHurt() && !this.isDead();
    }

    /**
     * Checks if the conditions are true
     * @returns true or false
     */
    canMoveLeft() {
        return this.world.keyboard.LEFT && this.x > -500 && !this.isDead();
    }

    /**
     * Checks if the conditions are true
     * @returns true or false
     */
    canJump() {
        return this.world.keyboard.SPACE && this.y == 200 && !this.isDead();
    }

    /**
     * manipulates the x-coordinate to move right
     */
    moveRight() {
        this.otherDirection = false;
        if (!mute) {
            this.walkingSound.play();
        }
        this.x += 15;
        this.setLastMove();
    }

    /**
     * manipulates the x-coordinate to move right
     */
    moveLeft() {
        this.otherDirection = true;
        if (!mute) {
            this.walkingSound.play();
        }
        this.x -= 15;
        this.setLastMove();
    }

    /**
     * Lets the player jump
     */
    jump() {
        if (!mute) {
            this.jumpingSound.play();
        }
        this.speedY = 25;
        this.setLastMove();
    }

    /**
     * Small Jump after jumping on a chicken
     */
    smallJump() {
        this.currentImageJumping = 3;
        this.speedY = 10;
    }

    /**
     * Due to timePassed condition it uses the short or long idle function to animate it
     */
    animateIdle() {
        let timePassed = this.createTimePassed(this.lastMove);
        this.img = this.imageCache[this.IMAGES_IDLE[0]]
        if (timePassed > 5000) {
            this.shortIdleEvent();
        }
        if (timePassed > 9000) {
            this.longIdleEvent();
        }
    }

    /**
     * Returns the time after last hit
     * @returns number
     */
    justGotHurt() {
        let timePassed = this.createTimePassed(this.lastHit);
        return timePassed < 500;
    }

    /**
     * Returns the time after last killed chicken
     * @returns number
     */
    justKilledChicken() {
        let timePassed = this.createTimePassed(this.lastKilledChicken);
        return timePassed < 100;
    }

    /**
     * Says if the characters speedY is positive or negative
     * @returns true or false
     */
    isFalling() {
        return this.speedY < 0 && this.isAboveGround();
    }

    /**
     * setup the last movement in variable to prepre the idle animation
     */
    setLastMove() {
        this.currentImageIdle = 0;
        this.lastMove = new Date().getTime();
    }

    /**
     * Animation and events if the character dies
     */
    isDeadEvent() {
        document.getElementById('replay-button').classList.remove('d-none');
        document.getElementById('pause-button').classList.add('d-none');
        document.getElementById('pauseEnd-button').classList.add('d-none');
        this.img = this.imageCache[this.IMAGES_DEAD[this.currentImageDead]];
        this.currentImageDead++;
        this.world.music.endbossTheme.pause();
        this.world.music.theme.pause();
        clearAllIntervals();
        if (this.currentImageDead > 6) {
            this.currentImageDead = 6;
        }
    }

    /**
     * Animation and events if the character get a hit
     */
    justGotHurtEvent() {
        this.x -= 10;
        this.img = this.imageCache[this.IMAGES_HURT[this.currentImageGetsHurt]];
        this.currentImageGetsHurt++;
        if (this.currentImageGetsHurt > 2) {
            this.currentImageGetsHurt = 0;
        }
    }

    /**
     * Animation and events if the character jumps
     */
    jumpEvent() {
        let path = this.IMAGES_JUMPING[this.currentImageJumping];
        this.img = this.imageCache[path];
        if (this.speedY > 0) {
        this.jumpUp(path);
        }
        if (this.speedY < 0 && this.currentImageJumping == 3) {
        this.jumpDownStartAnimation(path);
        }
        this.jumpDownLandingAnimation(path);
    }

    /**
     * starts the jumping animation
     * @param {string} path 
     */
    jumpUp(path){
        this.img = this.imageCache[path];
        this.currentImageJumping++;
        if (this.currentImageJumping > 3) {
            this.currentImageJumping = 3;
        }
    }

    /**
     * jumping animation after setting speedY to 0
     * @param {string} path 
     */
    jumpDownStartAnimation(path){
        this.currentImageJumping = 4;
        path = this.IMAGES_JUMPING[this.currentImageJumping];
        this.img = this.imageCache[path];
        this.currentImageJumping++;
    }

    /**
     * Landing animation
     * @param {string} path 
     */
    jumpDownLandingAnimation(path){
        if (this.speedY < 0 && this.currentImageJumping == 5 && this.y < 170) {
        }
        if (this.speedY < 0 && this.currentImageJumping >= 5 && this.currentImageJumping <= 8 && this.y > 170) {
            this.currentImageJumping++;
            path = this.IMAGES_JUMPING[this.currentImageJumping];
        }
        if (this.currentImageJumping > 8) {
            this.currentImageJumping = 8;
            path = this.IMAGES_JUMPING[this.currentImageJumping];
        }
        this.img = this.imageCache[path];
    }

    /**
     * Animation and events if the character moves
     */
    moveEvent() {
        let path = this.IMAGES_WALKING[this.currentImageWalking];
        this.img = this.imageCache[path];
        this.currentImageWalking++;
        if (this.currentImageWalking > 5) {
            this.currentImageWalking = 0;
        }
    }

    /**
     * Short Idle animation
     */
    shortIdleEvent() {
        this.img = this.imageCache[this.IMAGES_IDLE[this.currentImageIdle]];
        this.currentImageIdle++
        if (this.currentImageIdle > 9) {
            this.currentImageIdle = 9
        }
    }

    /**
     * Long Idle animation
     */
    longIdleEvent() {
        this.img = this.imageCache[this.IMAGES_LONGIDLE[this.currentImageLongIdle]];
        this.currentImageLongIdle++
        if (this.currentImageLongIdle > 9) {
            this.currentImageLongIdle = 0
        }
    }

    /**
     * 
     * @param {number} par - returns the passed Time between current time and parameter
     * @returns number
     */
    createTimePassed(par) {
        let currentTime = new Date().getTime();
        return currentTime - par
    }
}