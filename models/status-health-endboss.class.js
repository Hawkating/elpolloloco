class StatusHealthEndboss extends DrawableObject {

    x = 500;
    y = 2000;
    width = 200;
    height = 52;

    IMAGES_HEALTHBAR = [
        './img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
        './img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
        './img/7_statusbars/2_statusbar_endboss/orange/orange40.png',
        './img/7_statusbars/2_statusbar_endboss/orange/orange60.png',
        './img/7_statusbars/2_statusbar_endboss/orange/orange80.png',
        './img/7_statusbars/2_statusbar_endboss/orange/orange100.png'
    ];
    otherDirection = false;
    percentage = 100;

    /**
     * constructor to load images
     */
    constructor() {
        super().loadImage('./img/7_statusbars/2_statusbar_endboss/orange/orange100.png', this.x);
        this.loadImages(this.IMAGES_HEALTHBAR);
    }

    /**
     * creates the image due to the percentage
     * @param {number} percentage 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        if(this.percentage >= 80){
            this.img = this.imageCache[this.IMAGES_HEALTHBAR[4]]
        } else if (this.percentage >= 60){
            this.img = this.imageCache[this.IMAGES_HEALTHBAR[3]]
        }else if (this.percentage >= 40){
            this.img = this.imageCache[this.IMAGES_HEALTHBAR[2]]
        }else if (this.percentage >= 20){
            this.img = this.imageCache[this.IMAGES_HEALTHBAR[1]]
        }else {
            this.img = this.imageCache[this.IMAGES_HEALTHBAR[0]]
        }
    }


}