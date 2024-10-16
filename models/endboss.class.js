class Endboss extends MovableObject {
    x = 5000;
    y = 50;
    width = 300;
    height = 400;
    justGotHit = false
    intervalId;
    firstContact = false;
    attackStarted = false;

    IMAGES_ALERT = [
        './img/4_enemie_boss_chicken/2_alert/G5.png',
        './img/4_enemie_boss_chicken/2_alert/G6.png',
        './img/4_enemie_boss_chicken/2_alert/G7.png',
        './img/4_enemie_boss_chicken/2_alert/G8.png',
        './img/4_enemie_boss_chicken/2_alert/G9.png',
        './img/4_enemie_boss_chicken/2_alert/G10.png',
        './img/4_enemie_boss_chicken/2_alert/G11.png',
        './img/4_enemie_boss_chicken/2_alert/G12.png',
    ]
    IMAGES_HURT = [
        './img/4_enemie_boss_chicken/4_hurt/G21.png',
        './img/4_enemie_boss_chicken/4_hurt/G22.png',
        './img/4_enemie_boss_chicken/4_hurt/G23.png'
    ]
    IMAGES_DEAD = [
        './img/4_enemie_boss_chicken/5_dead/G24.png',
        './img/4_enemie_boss_chicken/5_dead/G25.png',
        './img/4_enemie_boss_chicken/5_dead/G26.png'
    ]
    IMAGES_ATTACK = [
        './img/4_enemie_boss_chicken/3_attack/G13.png',
        './img/4_enemie_boss_chicken/3_attack/G14.png',
        './img/4_enemie_boss_chicken/3_attack/G15.png',
        './img/4_enemie_boss_chicken/3_attack/G16.png',
        './img/4_enemie_boss_chicken/3_attack/G17.png',
        './img/4_enemie_boss_chicken/3_attack/G18.png',
        './img/4_enemie_boss_chicken/3_attack/G19.png',
        './img/4_enemie_boss_chicken/3_attack/G20.png',
    ]
    IMAGES_WALK = [
        './img/4_enemie_boss_chicken/1_walk/G1.png',
        './img/4_enemie_boss_chicken/1_walk/G2.png',
        './img/4_enemie_boss_chicken/1_walk/G3.png',
        './img/4_enemie_boss_chicken/1_walk/G4.png'
    ]

    currentImageAlert = 0;
    currentImageHurt = 0;
    currentImageDead = 0;
    currentImageAttack = 0;
    currentImageWalk = 0;

    bossHurtSound = new Audio('./audio/bosshurt.mp3');
    bossAttackSound = new Audio('./audio/attack.mp3');
    winSound = new Audio('./audio/win.mp3');

    /**
     * loads the endboss images to imagecache
     */
    constructor() {
        super().loadImage('./img/4_enemie_boss_chicken/2_alert/G5.png', this.x);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_WALK);
    }

    /**
     *  setAnimationInterval
     */
    setAnimationInterval() {
        this.intervalId = setInterval(() => {
            this.animate();
        }, 1000 / 10);
        allIntervals.push(this.intervalId);
    }

    /**
     * increases the power of the chicken, after got hitten
     * @returns number for multiplicator
     */
    setEndbossPower() {
        if (this.health == 60) {
            return 3;
        }
        if (this.health == 40) {
            return 4;
        }
        if (this.health == 20) {
            return 8;
        } else {
            return 1;
        }
    }

    /**
     * endboss got a hit and the damage decreases his health
     * @param {number} damage 
     */
    hit(damage) {
        if (!this.justGotHit) {
            if (!mute) {
                this.bossHurtSound.play();
            }
            this.health -= damage;
            this.lastHit = new Date().getTime();
            if (this.health < 0) {
                this.health = 0;
            };
            this.justGotHit = true;
            this.world.statusHealthEndboss.setPercentage(this.health);
        }
    }

    /**
     * checks if the character is near the endboss to setup the first contact
     * @returns true or false
     */
    nearCharacterFirstContact() {
        return this.x - this.world.character.x < 400;
    }

    /**
     * Checks if the character is near the endbos, if he is, the endboss will attack
     * @returns true or false
     */
    nearCharacter() {
        return this.x - this.world.character.x < 200;
    }

    /**
     * Animates the endboss due to event
     */
    animate() {
        if (this.justGotHit) {
            if (this.isDead()) {
                this.deadEvent();
            } else {
                this.hurtEvent();
            }
        } else if (this.nearCharacter() || this.attackStarted) {
            this.attack();
        } else if (this.nearCharacterFirstContact() || this.firstContact) {
            this.firstContactEvent();
        } else {
            this.alertEvent();
        }
    }

    /**
     * animation and logic for dead endboss
     */
    deadEvent() {
        if (!mute) {this.winSound.play();}
        this.world.music.endbossTheme.pause();
        this.img = this.imageCache[this.IMAGES_DEAD[this.currentImageDead]];
        this.currentImageDead++;
        if (this.currentImageDead > 2) {
            this.y = 2000;
            this.world.character.won = true;
            this.world.music.endbossTheme.pause();
            document.getElementById('replay-button').classList.remove('v-hidden');
            clearAllIntervals();
        }
    }

    /**
     * animation and logic for first contact. Endboss begins to walk
     */
    firstContactEvent() {
        this.world.music.theme.pause();
        this.world.statusHealthEndboss.y = 420;
        if (!mute) {
            this.world.music.playEndbossTheme();
        }
        this.firstContact = true;
        this.img = this.imageCache[this.IMAGES_WALK[this.currentImageWalk]];
        this.currentImageWalk++;
        if (this.currentImageWalk > 3) {
            this.currentImageWalk = 0;
        }
        this.x -= 10 * this.setEndbossPower();
    }

    /**
     * animation and logic for alert
     */
    alertEvent() {
        this.img = this.imageCache[this.IMAGES_ALERT[this.currentImageAlert]];
        this.currentImageAlert++;
        if (this.currentImageAlert > 7) {
            this.currentImageAlert = 0;
        }
    }

    /**
     * animation and logic for attack
     */
    attack() {
        this.attackStarted = true;
        this.img = this.imageCache[this.IMAGES_ATTACK[this.currentImageAttack]];
        this.currentImageAttack++;
        if (this.currentImageAttack == 5 || this.currentImageAttack == 6) {
            this.x -= 70;
            if (!mute) { this.bossAttackSound.play(); }
        }
        if (this.currentImageAttack > 7) {
            this.currentImageAttack = 0;
            this.attackStarted = false;
        }
    }

    /**
     * animation and logic for endboss got hurt
     */
    hurtEvent() {
        this.img = this.imageCache[this.IMAGES_HURT[this.currentImageHurt]];
        this.currentImageHurt++;
        if (this.currentImageHurt > 2) {
            this.currentImageHurt = 0;
            this.justGotHit = false;
        }
    }

}