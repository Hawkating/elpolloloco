class CollectableCoin extends CollectableObject {

    width =120;
    height =120;
    // otherDirection = false;
    IMAGES_PLING = [
        './img/8_coin/coin_1.png',
        './img/8_coin/coin_2.png'
    ];
    currentImage = 0;

constructor(x, y){
    super();
    this.x = x;
    this.y = y;
    this.loadImage('./img/8_coin/coin_1.png', this.x);
    this.loadImages(this.IMAGES_PLING)
    this.animate()
}

animate(){

    setInterval(() => {
        this.img = this.imageCache[this.IMAGES_PLING[this.currentImage]]
        this.currentImage ++
        if(this.currentImage > 1){
            this.currentImage = 0;
        }

    }, 1000)
}

}