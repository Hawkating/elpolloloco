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

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else if (this instanceof Character) {
            return this.y < 200
        } else if (this instanceof SmallChicken) {
            return this.y < 385
        }
    }

    isColliding(obj) {

        return (this.x + this.width - this.offsetX) >= obj.x && this.x <= (obj.x + obj.width) &&
            (this.y + this.height) >= obj.y &&
            (this.y + this.offsetY) <= (obj.y + obj.height)
    }

    hit(damage) {
        this.health -= damage;
        this.lastHit = new Date().getTime();
        if (this.health < 0) {
            this.health = 0;
        };
        if (this instanceof Chicken || this instanceof SmallChicken) {
            if (!mute) {
                this.chickenDeadSound.play();
            }
            this.world.character.justKilledChicken();
        };
        if (this instanceof Character && world.character.health > 0) {
            if (!mute) {
            this.ouchSound.play();
            }
        };
        if (this instanceof Character && world.character.health == 0) {
            if (!mute) {
            this.gameOverSound.play();
            }
        };
    }

    isDead() {
        return this.health == 0;
    }
}