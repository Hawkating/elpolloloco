class StatusHealth extends Status {

    x = 20;
    y = 0;
    width = 200;
    height = 52;

    IMAGES_HEALTHBAR = [
        './img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png'
    ];
    otherDirection = false;
    percentage = 100;

    /**
     * constructort load images
     */
    constructor() {
        super().loadImage('./img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png', this.x);
        this.loadImages(this.IMAGES_HEALTHBAR);
    }

}