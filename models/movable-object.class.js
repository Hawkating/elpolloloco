class MovableObject extends DrawableObject {

    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    offsetY = 130;
    offsetX = 45;
    health = 100;
    world;

    chickenDeadSound = new Audio('./audio/chickendead.mp3');
    ouchSound = new Audio('./audio/ouch.mp3');
    gameOverSound = new Audio('./audio/gameover.mp3');

    /**
     * Initializes the gravity for the game
     */
    applyGravity() {
        let interval = setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
        allIntervals.push(interval);
    }

    /**
     * Checks if the Object is not on ground
     * @returns true or false
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else if (this instanceof Character) {
            return this.y < 200
        } else if (this instanceof SmallChicken) {
            return this.y < 385
        }
    }

    /**
     * checks if the object is colliding with another one
     * @param {object} obj 
     * @returns true or false
     */
    isColliding(obj) {
        return (this.x + this.width - this.offsetX) >= obj.x && this.x <= (obj.x + obj.width) &&
            (this.y + this.height) >= obj.y &&
            (this.y + this.offsetY) <= (obj.y + obj.height)
    }

    /**
     * Logic for a damaged object
     * @param {number} damage 
     */
    hit(damage) {
        this.health -= damage;
        this.lastHit = new Date().getTime();
        if (this.health < 0) {
            this.health = 0;
        };
        if (this instanceof Chicken || this instanceof SmallChicken) {
            if (!mute) {this.chickenDeadSound.play();}
            this.world.character.justKilledChicken();
        };
        if (this instanceof Character && world.character.health > 0) {
            if (!mute) {this.ouchSound.play();}
        };
        if (this instanceof Character && world.character.health == 0) {
            if (!mute) {this.gameOverSound.play();}
        };
    }

    /**
     * Checks if the health of the object is 0
     * @returns true or false
     */
    isDead() {
        return this.health == 0;
    }

    /**
     * Calculate a modulo
     * @param {number} currentPic 
     * @param {number} arrayLength 
     * @returns 
     */
    calculateModulo(currentPic, arrayLength) {
        return currentPic % arrayLength;
    }

    /**
     * Setup the y-coordinate to the wanted one
     * @param {number} y 
     * @param {number} wantedY 
     */
    setupY(y, wantedY) {
        if (y > wantedY) {
            this.y = wantedY;
        }
    }
}