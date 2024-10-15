class DrawableObject {

    x = 20;
    y = 20;
    width =20;
    height =20;
    img;
    imageCache = {};

    loadImage(path, x) {
        this.img = new Image();
        this.img.src = path;
        this.x = x
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


}