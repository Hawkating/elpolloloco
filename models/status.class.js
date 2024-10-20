class Status extends DrawableObject {

    percentage = 100;

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