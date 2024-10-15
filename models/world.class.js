class World {

    character = new Character();
    statusHealth = new StatusHealth();
    statusHealthEndboss = new StatusHealthEndboss();
    bottleCounter = new BottleCounter();
    coinCounter = new CoinCounter();
    lastThrow = 0;
    intervalId;
    level = level1;
    music = new Music();
    screenAfterStart;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    throwableObjects = [];
    // enemieLineOne = false;
    // enemieLineTwo = false;
    // enemieLineThree = false;



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObject();
            // this.checkNewEnemies();
          }, 1000 / 25);
          this.level.enemies.forEach((enemy) => {enemy.animate(this.character)});
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if(this.character.isFalling() && !enemy.isDead()){
                    enemy.hit(100);
                    this.character.smallJump();
                } else if(enemy.isDead()){

                } else if(this.character.justKilledChicken() || !this.character.isAboveGround()){
                    if(enemy instanceof Endboss){
                        this.character.hit(40);
                    } else {
                    this.character.hit(20);
                }
                    this.statusHealth.setPercentage(this.character.health);
                }

            }
        });

        if(this.throwableObjects.length > 0){

        this.throwableObjects.forEach((bottle) =>{
            if(bottle.splashStarted){
                bottle.breakBottle();
            }
            this.level.enemies.forEach((enemy) => {
                if(bottle.isColliding(enemy) && !enemy.isDead()){
                    if(enemy instanceof Endboss){
                        enemy.hit(20)
                        bottle.breakBottle();
                    } else {
                    enemy.hit(100);
                }
                }

            })
        })
    }

        this.level.collectableObjects.forEach((obj) => {
            if (this.character.isColliding(obj)) {
                if(obj instanceof CollectableBottle){
              this.bottleCounter.collect(obj);
            };
            if(obj instanceof CollectableCoin){
                this.coinCounter.collect(obj);
              };
        }
            
        });

    }

    checkThrowObject() {
        let currentTime = new Date().getTime();
        let timePassed = currentTime - this.lastThrow;
        if (this.keyboard.D && this.bottleCounter.bottlecount > 0 && timePassed > 1000 && !this.character.isAboveGround()) {
            let bottle = new ThrowableObject(300);
            // this.throwableObjects.throw();
            this.throwableObjects.push(bottle);
            this.bottleCounter.bottlecount --;
            this.character.setLastMove();

        }

    }

    // checkNewEnemies(){
    //     if(this.character.x == 1000)
    // }

    setWorld() {
        this.character.world = this;
        this.level.enemies.forEach((enemy) => {enemy.world = this})
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      
        this.ctx.translate(this.camera_x, 0);


        this.arrayToMap(this.level.backgroundObjects);
        this.arrayToMap(this.level.clouds);
        this.arrayToMap(this.level.collectableObjects);
        this.ctx.translate(-this.camera_x, 0);
        //write fixed objects here

        this.addToMap(this.bottleCounter);
        this.addToMap(this.coinCounter);
        this.ctx.font = '20px Sans-serif';
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 8;
        this.ctx.strokeText(`X   ${this.bottleCounter.bottlecount}`, 60, 85);
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(`X   ${this.bottleCounter.bottlecount}`, 60, 85);

        this.ctx.strokeText(`X   ${this.coinCounter.coincount}`, 650, 40);
        this.ctx.fillText(`X   ${this.coinCounter.coincount}`, 650, 40);

        // this.ctx.font = "48px serif white";
        // this.ctx.strokeText(`${this.bottleCounter.bottlecount}`, 10, 50);
        this.addToMap(this.statusHealth);
        this.addToMap(this.statusHealthEndboss);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.arrayToMap(this.level.enemies);
        this.arrayToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);
        if (this.character.isDead()) {
            drawScreen('./img/9_intro_outro_screens/game_over/you lost.png');
            
        } 
        if (this.character.won == true) {
            drawScreen('./img/9_intro_outro_screens/win/won_2.png');
            
        } 

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    
    
}

    arrayToMap(transferredObject) {
        transferredObject.forEach(object => {
            this.addToMap(object);
            // this.ctx.drawImage(object['img'], object['x'], object['y'], object['width'], object['height']);
        })
    }

    addToMap(transferredObject) {
        if (transferredObject.otherDirection) {
            this.ctx.save();
            this.ctx.translate(transferredObject.width, 0);
            this.ctx.scale(-1, 1);
            transferredObject.x = transferredObject.x * -1;
        };
        this.ctx.drawImage(transferredObject['img'], transferredObject['x'], transferredObject['y'], transferredObject['width'], transferredObject['height']);

        // if (transferredObject instanceof Character || transferredObject instanceof Chicken ||  transferredObject instanceof CollectableBottle) {
        //     this.ctx.beginPath();
        //     this.ctx.lineWidth = '3';
        //     this.ctx.strokeStyle = 'blue';
        //     this.ctx.rect(transferredObject['x'], transferredObject['y'], transferredObject['width'], transferredObject['height']);
        //     this.ctx.stroke();
        // }


        if (transferredObject.otherDirection) {
            transferredObject.x = transferredObject.x * -1;
            this.ctx.restore();
        }
    }


}