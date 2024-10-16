class Level {

    enemies;
    clouds;
    backgroundObjects;
    collectableObjects;

    /**
     * Setup the level
     * @param {array} enemies 
     * @param {array} clouds 
     * @param {array} backgroundObjects 
     * @param {array} collectableObjects 
     */
    constructor(enemies, clouds, backgroundObjects, collectableObjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.collectableObjects = collectableObjects;
    }

}