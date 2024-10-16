class Screen extends DrawableObject{

    x = 0;
    y = 0;
    width = 720;
    height = 480;

/**
 * Loads the handovered still
 */
    constructor(imgRef){
        super().loadImage(imgRef, this.x);
    }

}