class backgroundObject extends MovableObject{

    x = 0;
    y = 0;
    width = 720;
    height = 480;

    /**
     * Loads the handovered Image
     * @param {string} imagePath - relative path
     * @param {number} x - x-coordinates
     */
    constructor(imagePath, x){
       super().loadImage(imagePath, x)
    }
    
}