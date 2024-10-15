class Cloud extends MovableObject {
    x;
    y = 30;
    width = 400;
    height = 250;


    constructor(startpoint) {
        super();
        this.setupX(startpoint);
        this.loadImage('./img/5_background/layers/4_clouds/1.png', this.x)
        this.animate()
    }

    setupX(startpoint){
        this.x = startpoint + Math.random() * 500;
    }

    animate() {
        setInterval(() => {
            this.x -= 0.15;
        }, 1000 / 60);
    }
}