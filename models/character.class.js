class Character extends MovableObject {

    x = 0;
    y = 200;
    width = 128;
    height = 240;

    lastMove = 0;
    IMAGES_WALKING = ['./img/2_character_pepe/2_walk/W-21.png',
        './img/2_character_pepe/2_walk/W-22.png',
        './img/2_character_pepe/2_walk/W-23.png',
        './img/2_character_pepe/2_walk/W-24.png',
        './img/2_character_pepe/2_walk/W-25.png',
        './img/2_character_pepe/2_walk/W-26.png',];

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


    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png', this.x);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONGIDLE);
        this.setLastMove();
        this.animateWalking();
        this.applyGravity();

    }



    animateWalking() {

        let intervalIdWalk = setInterval(() => {
            this.walkingSound.pause();
            if (this.world.keyboard.RIGHT && this.x < 5000 && !this.justGotHurt() && !this.isDead()) {
                this.otherDirection = false;
                if (!mute) {
                this.walkingSound.play();
                }
                this.x += 15;
                this.setLastMove();
            }
            if (this.world.keyboard.LEFT && this.x > -500 && !this.isDead()) {
                this.otherDirection = true;
                if (!mute) {
                this.walkingSound.play()
                }
                this.x -= 15;
                this.setLastMove();
            }
            if (this.world.keyboard.SPACE && this.y == 200 && !this.isDead()) {
                if (!mute) {
                this.jumpingSound.play();
                }
                this.speedY = 25;
                this.setLastMove();
            }
            this.world.camera_x = -this.x + 100;



        }, 1000 / 30);

        let intervalIdAnimate = setInterval(() => {

            if (this.y > 200) {
                this.y = 200;
            }
            let currentTime = new Date().getTime();
            let timePassed = currentTime - this.lastMove;
            if (this.isDead()) {
                document.getElementById('replay-button').classList.remove('v-hidden');
                this.img = this.imageCache[this.IMAGES_DEAD[this.currentImageDead]];
                this.currentImageDead++;
                this.world.music.endbossTheme.pause();
                this.world.music.theme.pause();
                clearInterval(this.world.music.intervalId)
                if (this.currentImageDead > 6) {
                    this.currentImageDead = 6;
                    clearInterval(intervalIdAnimate);
                    clearInterval(intervalIdWalk);

                }
            } else if (this.justGotHurt()) {
                this.x -= 10;
                this.img = this.imageCache[this.IMAGES_HURT[this.currentImageGetsHurt]];

                this.currentImageGetsHurt++;
                if (this.currentImageGetsHurt > 2) {
                    this.currentImageGetsHurt = 0;
                    // this.hurt = false;
                }




            } else if (this.isAboveGround()) {
                let path = this.IMAGES_JUMPING[this.currentImageJumping];
                this.img = this.imageCache[path];
                if (this.speedY > 0) {

                    this.img = this.imageCache[path];
                    this.currentImageJumping++;
                    if (this.currentImageJumping > 3) {
                        this.currentImageJumping = 3;
                    }
                }

                if (this.speedY < 0 && this.currentImageJumping == 3) {
                    this.currentImageJumping = 4;
                    path = this.IMAGES_JUMPING[this.currentImageJumping];
                    this.img = this.imageCache[path];
                    this.currentImageJumping++;
                }
                if (this.speedY < 0 && this.currentImageJumping == 5 && this.y < 140) {
                    this.img = this.imageCache[path];
                }
                if (this.speedY < 0 && this.currentImageJumping >= 5 && this.currentImageJumping <= 8 && this.y > 140) {
                    this.currentImageJumping++;
                    path = this.IMAGES_JUMPING[this.currentImageJumping];
                    this.img = this.imageCache[path];
                }
                if (this.currentImageJumping > 8) {
                    this.currentImageJumping = 8;
                    path = this.IMAGES_JUMPING[this.currentImageJumping];
                    this.img = this.imageCache[path];
                }

            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                let path = this.IMAGES_WALKING[this.currentImageWalking];
                this.img = this.imageCache[path];
                this.currentImageWalking++;
                if (this.currentImageWalking > 5) {
                    this.currentImageWalking = 0;
                }
            } else {
                this.img = this.imageCache[this.IMAGES_IDLE[0]]
                if (timePassed > 5000) {
                    this.img = this.imageCache[this.IMAGES_IDLE[this.currentImageIdle]];
                    this.currentImageIdle++


                    if (this.currentImageIdle > 9) {
                        this.currentImageIdle = 9
                    }
                }
                if (timePassed > 9000) {
                    this.img = this.imageCache[this.IMAGES_LONGIDLE[this.currentImageLongIdle]];
                    this.currentImageLongIdle++

                    if (this.currentImageLongIdle > 9) {
                        this.currentImageLongIdle = 0
                    }
                }

            }

        }, 1000 / 30);

    }


    smallJump() {
        this.speedY = 10;
    }

    justGotHurt() {
        let currentTime = new Date().getTime();
        let timePassed = currentTime - this.lastHit;
        return timePassed < 500;


    }

    justKilledChicken() {
        let currentTime = new Date().getTime();
        let timePassed = currentTime - this.lastKilledChicken;
        return timePassed < 100;
    }

    isFalling() {
        return this.speedY < 0 && this.isAboveGround();
    }

    setLastMove() {
        this.currentImageIdle = 0;
        this.lastMove = new Date().getTime();
    }


}