class Chicken extends MovableObject {
    x; 
    y = 385;
    width = 49.6;
    height = 48.6;
    IMAGES_WALKING = [
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    animationStarted = false;

    IMAGES_DEAD = ['./img/3_enemies_chicken/chicken_normal/2_dead/dead.png'];

    currentImage = 0;

    constructor(startX) {
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png', this.x);
        this.setStartPoint(startX)
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
    }

    setStartPoint(startX){

        this.x = startX + Math.random() * 500;
    }

    animate(character) {

        setInterval(() => {
            if (this.isDead()) {
                
                this.img = this.imageCache[this.IMAGES_DEAD[0]];
                if(this.y == 385){
                    this.y = 390;
                }
            } else {
                if(this.x - character.x < 1000 || this.animationStarted == true){
                let path = this.IMAGES_WALKING[this.currentImage];
                this.img = this.imageCache[path];
                this.x -= 10 * Math.random();
                this.currentImage++;
                this.animationStarted = true;
                if (this.currentImage > 2) {
                    this.currentImage = 0;
                }
            }
            }
        }, 100);
    }


}