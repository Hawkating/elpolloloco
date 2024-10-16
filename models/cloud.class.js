class Cloud extends MovableObject {
    x;
    y = 30;
    width = 400;
    height = 250;

    /**
     * Loads Images and setup clouds
     * @param {number} startpoint 
     */
    constructor(startpoint) {
        super();
        this.setupX(startpoint);
        this.loadImage('./img/5_background/layers/4_clouds/1.png', this.x)
        this.animate()
    }

    /**
     * Sets the x-coordinate
     * @param {number} startpoint 
     */
    setupX(startpoint){
        this.x = startpoint + Math.random() * 500;
    }

    /**
     * Interval to animate clouds
     */
    animate() {
        let interval = setInterval(() => {
            this.x -= 0.15;
        }, 1000 / 60);
        // allIntervals.push(interval);
    }
}