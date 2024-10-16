let level1enemies = [];
let level1clouds = [];
let level1BackgroundObjects = []
let level1CollectableObjects = []

// let level1enemiesArray = [new Chicken(200), new Chicken(200), new Chicken(200), new Chicken(200),
// new Chicken(1500), new Chicken(1500), new Chicken(1500), new Chicken(1500),
// new SmallChicken(1700),
// new SmallChicken(2000),
// new SmallChicken(3000),
// new Chicken(2500), new Chicken(2500), new Chicken(2500), new Chicken(2500),
// new SmallChicken(4000),
// new SmallChicken(4200),
// new Chicken(4500), new Chicken(4500), new Chicken(4500), new Chicken(4500),
// new Chicken(5500), new Chicken(5500), new Chicken(5500), new Chicken(5500),
// new Endboss()]

// let level1cloudsArray = [new Cloud(200), new Cloud(1000), new Cloud(2200), new Cloud(5000), new Cloud(6000)]


// let level1BackgroundObjectsArray =
//     [
//         new backgroundObject('./img/5_background/layers/3_third_layer/2.png', -720),
//         new backgroundObject('./img/5_background/layers/2_second_layer/2.png', -720),
//         new backgroundObject('./img/5_background/layers/1_first_layer/2.png', -720),

//         new backgroundObject('./img/5_background/layers/3_third_layer/1.png', 0),
//         new backgroundObject('./img/5_background/layers/2_second_layer/1.png', 0),
//         new backgroundObject('./img/5_background/layers/1_first_layer/1.png', 0),

//         new backgroundObject('./img/5_background/layers/3_third_layer/2.png', 720),
//         new backgroundObject('./img/5_background/layers/2_second_layer/2.png', 720),
//         new backgroundObject('./img/5_background/layers/1_first_layer/2.png', 720),

//         new backgroundObject('./img/5_background/layers/3_third_layer/1.png', 720 * 2),
//         new backgroundObject('./img/5_background/layers/2_second_layer/1.png', 720 * 2),
//         new backgroundObject('./img/5_background/layers/1_first_layer/1.png', 720 * 2),

//         new backgroundObject('./img/5_background/layers/3_third_layer/2.png', 720 * 3),
//         new backgroundObject('./img/5_background/layers/2_second_layer/2.png', 720 * 3),
//         new backgroundObject('./img/5_background/layers/1_first_layer/2.png', 720 * 3),

//         new backgroundObject('./img/5_background/layers/3_third_layer/1.png', 720 * 4),
//         new backgroundObject('./img/5_background/layers/2_second_layer/1.png', 720 * 4),
//         new backgroundObject('./img/5_background/layers/1_first_layer/1.png', 720 * 4),

//         new backgroundObject('./img/5_background/layers/3_third_layer/2.png', 720 * 5),
//         new backgroundObject('./img/5_background/layers/2_second_layer/2.png', 720 * 5),
//         new backgroundObject('./img/5_background/layers/1_first_layer/2.png', 720 * 5),

//         new backgroundObject('./img/5_background/layers/3_third_layer/1.png', 720 * 6),
//         new backgroundObject('./img/5_background/layers/2_second_layer/1.png', 720 * 6),
//         new backgroundObject('./img/5_background/layers/1_first_layer/1.png', 720 * 6),

//         new backgroundObject('./img/5_background/layers/3_third_layer/2.png', 720 * 7),
//         new backgroundObject('./img/5_background/layers/2_second_layer/2.png', 720 * 7),
//         new backgroundObject('./img/5_background/layers/1_first_layer/2.png', 720 * 7),


//     ]

// let level1CollectableObjectsArray = [
//     new CollectableBottle(-400),
//     new CollectableBottle(200),
//     new CollectableBottle(1100),
//     new CollectableBottle(1500),
//     new CollectableBottle(1900),
//     new CollectableBottle(2000),
//     new CollectableBottle(3000),
//     new CollectableCoin(300, 100),
//     new CollectableCoin(340, 100),
//     new CollectableCoin(380, 100),
//     new CollectableCoin(420, 100),
//     new CollectableCoin(460, 100),
//     new CollectableCoin(300, 140),
//     new CollectableCoin(340, 140),
//     new CollectableCoin(380, 140),
//     new CollectableCoin(420, 140),
//     new CollectableCoin(460, 140),

//     new CollectableCoin(600, 300),
//     new CollectableCoin(640, 300),
//     new CollectableCoin(680, 300),
//     new CollectableCoin(720, 300),
//     new CollectableCoin(760, 300),
//     new CollectableCoin(600, 340),
//     new CollectableCoin(640, 340),
//     new CollectableCoin(680, 340),
//     new CollectableCoin(720, 340),
//     new CollectableCoin(760, 340),

//     new CollectableCoin(1600, 300),
//     new CollectableCoin(1640, 300),
//     new CollectableCoin(1680, 300),
//     new CollectableCoin(1720, 300),
//     new CollectableCoin(1760, 300),
//     new CollectableCoin(1600, 340),
//     new CollectableCoin(1640, 340),
//     new CollectableCoin(1680, 340),
//     new CollectableCoin(1720, 340),
//     new CollectableCoin(1760, 340),

//     new CollectableCoin(2300, 100),
//     new CollectableCoin(2340, 100),
//     new CollectableCoin(2380, 100),
//     new CollectableCoin(2420, 100),
//     new CollectableCoin(2460, 100),
//     new CollectableCoin(2300, 140),
//     new CollectableCoin(2340, 140),
//     new CollectableCoin(2380, 140),
//     new CollectableCoin(2420, 140),
//     new CollectableCoin(2460, 140),


//     new CollectableCoin(3300, 100),
//     new CollectableCoin(3340, 100),
//     new CollectableCoin(3380, 100),
//     new CollectableCoin(3420, 100),
//     new CollectableCoin(3460, 100),
//     new CollectableCoin(3300, 140),
//     new CollectableCoin(3340, 140),
//     new CollectableCoin(3380, 140),
//     new CollectableCoin(3420, 140),
//     new CollectableCoin(3460, 140),

//     new CollectableCoin(3600, 300),
//     new CollectableCoin(3640, 300),
//     new CollectableCoin(3680, 300),
//     new CollectableCoin(3720, 300),
//     new CollectableCoin(3760, 300),
//     new CollectableCoin(3600, 340),
//     new CollectableCoin(3640, 340),
//     new CollectableCoin(3680, 340),
//     new CollectableCoin(3720, 340),
//     new CollectableCoin(3760, 340),

//     new CollectableCoin(3300, 100),
//     new CollectableCoin(3340, 100),
//     new CollectableCoin(3380, 100),
//     new CollectableCoin(3420, 100),
//     new CollectableCoin(3460, 100),
//     new CollectableCoin(3300, 140),
//     new CollectableCoin(3340, 140),
//     new CollectableCoin(3380, 140),
//     new CollectableCoin(3420, 140),
//     new CollectableCoin(3460, 140),

//     new CollectableCoin(4600, 300),
//     new CollectableCoin(4640, 300),
//     new CollectableCoin(4680, 300),
//     new CollectableCoin(4720, 300),
//     new CollectableCoin(4760, 300),
//     new CollectableCoin(4600, 340),
//     new CollectableCoin(4640, 340),
//     new CollectableCoin(4680, 340),
//     new CollectableCoin(4720, 340),
//     new CollectableCoin(4760, 340),

//     new CollectableCoin(4300, 100),
//     new CollectableCoin(4340, 100),
//     new CollectableCoin(4380, 100),
//     new CollectableCoin(4420, 100),
//     new CollectableCoin(4460, 100),
//     new CollectableCoin(4300, 140),
//     new CollectableCoin(4340, 140),
//     new CollectableCoin(4380, 140),
//     new CollectableCoin(4420, 140),
//     new CollectableCoin(4460, 140),

//     new CollectableCoin(4300, 180),
//     new CollectableCoin(4340, 180),
//     new CollectableCoin(4380, 180),
//     new CollectableCoin(4420, 180),
//     new CollectableCoin(4460, 180),
//     new CollectableCoin(4300, 220),
//     new CollectableCoin(4340, 220),
//     new CollectableCoin(4380, 220),
//     new CollectableCoin(4420, 220),
//     new CollectableCoin(4460, 220),
// ]


function fillLevel1enemies() {
    level1enemies.push(new Chicken(200));
    level1enemies.push(new Chicken(200));
    level1enemies.push(new Chicken(200));
    level1enemies.push(new Chicken(200));

    level1enemies.push(new Chicken(1500));
    level1enemies.push(new Chicken(1500));
    level1enemies.push(new Chicken(1500));
    level1enemies.push(new Chicken(1500));

    level1enemies.push(new Chicken(2500));
    level1enemies.push(new Chicken(2500));
    level1enemies.push(new Chicken(2500));
    level1enemies.push(new Chicken(2500));

    level1enemies.push(new Chicken(4500));
    level1enemies.push(new Chicken(4500));
    level1enemies.push(new Chicken(4500));
    level1enemies.push(new Chicken(4500));
    
    level1enemies.push(new Chicken(5500));
    level1enemies.push(new Chicken(5500));
    level1enemies.push(new Chicken(5500));
    level1enemies.push(new Chicken(5500));
    
    level1enemies.push(new SmallChicken(1700));
    level1enemies.push(new SmallChicken(2000));
    level1enemies.push(new SmallChicken(300));
    level1enemies.push(new SmallChicken(4000));
    level1enemies.push(new SmallChicken(4200));

    level1enemies.push(new Endboss());
}

function fillLevel1clouds() {
        level1clouds.push(new Cloud(200));
        level1clouds.push(new Cloud(1000));
        level1clouds.push(new Cloud(2200));
        level1clouds.push(new Cloud(500));
        level1clouds.push(new Cloud(600));
}

function fillLevel1BackgroundObjects() {
        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/3_third_layer/2.png', -720));
        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/2_second_layer/2.png', -720));
        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/1_first_layer/2.png', -720));

        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/3_third_layer/1.png', 0));
        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/2_second_layer/1.png', 0));
        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/1_first_layer/1.png', 0));

        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/3_third_layer/2.png', 720));
        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/2_second_layer/2.png', 720));
        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/1_first_layer/2.png', 720));

        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/3_third_layer/1.png', 720 * 2));
        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/2_second_layer/1.png', 720 * 2));
        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/1_first_layer/1.png', 720 * 2));

        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/3_third_layer/2.png', 720 * 3));
        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/2_second_layer/2.png', 720 * 3));
        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/1_first_layer/2.png', 720 * 3));

        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/3_third_layer/1.png', 720 * 4));
        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/2_second_layer/1.png', 720 * 4));
        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/1_first_layer/1.png', 720 * 4));

        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/3_third_layer/2.png', 720 * 5));
        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/2_second_layer/2.png', 720 * 5));
        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/1_first_layer/2.png', 720 * 5));

        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/3_third_layer/1.png', 720 * 6));
        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/2_second_layer/1.png', 720 * 6));
        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/1_first_layer/1.png', 720 * 6));

        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/3_third_layer/2.png', 720 * 7));
        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/2_second_layer/2.png', 720 * 7));
        level1BackgroundObjects.push(new backgroundObject('./img/5_background/layers/1_first_layer/2.png', 720 * 7));


}

function fillLevel1CollectableObjects() {
    level1CollectableObjects.push(new CollectableBottle(-400));
    level1CollectableObjects.push(new CollectableBottle(200));
    level1CollectableObjects.push(new CollectableBottle(1100));
    level1CollectableObjects.push(new CollectableBottle(1500));
    level1CollectableObjects.push(new CollectableBottle(1900));
    level1CollectableObjects.push(new CollectableBottle(2000));
    level1CollectableObjects.push(new CollectableBottle(3000));
    level1CollectableObjects.push(new CollectableCoin(300, 100));
    level1CollectableObjects.push(new CollectableCoin(340, 100));
    level1CollectableObjects.push(new CollectableCoin(380, 100));
    level1CollectableObjects.push(new CollectableCoin(420, 100));
    level1CollectableObjects.push(new CollectableCoin(460, 100));
    level1CollectableObjects.push(new CollectableCoin(300, 140));
    level1CollectableObjects.push(new CollectableCoin(340, 140));
    level1CollectableObjects.push(new CollectableCoin(380, 140));
    level1CollectableObjects.push(new CollectableCoin(420, 140));
    level1CollectableObjects.push(new CollectableCoin(460, 140));

    level1CollectableObjects.push(new CollectableCoin(600, 300));
    level1CollectableObjects.push(new CollectableCoin(640, 300));
    level1CollectableObjects.push(new CollectableCoin(680, 300));
    level1CollectableObjects.push(new CollectableCoin(720, 300));
    level1CollectableObjects.push(new CollectableCoin(760, 300));
    level1CollectableObjects.push(new CollectableCoin(600, 340));
    level1CollectableObjects.push(new CollectableCoin(640, 340));
    level1CollectableObjects.push(new CollectableCoin(680, 340));
    level1CollectableObjects.push(new CollectableCoin(720, 340));
    level1CollectableObjects.push(new CollectableCoin(760, 340));

    level1CollectableObjects.push(new CollectableCoin(1600, 300));
    level1CollectableObjects.push(new CollectableCoin(1640, 300));
    level1CollectableObjects.push(new CollectableCoin(1680, 300));
    level1CollectableObjects.push(new CollectableCoin(1720, 300));
    level1CollectableObjects.push(new CollectableCoin(1760, 300));
    level1CollectableObjects.push(new CollectableCoin(1600, 340));
    level1CollectableObjects.push(new CollectableCoin(1640, 340));
    level1CollectableObjects.push(new CollectableCoin(1680, 340));
    level1CollectableObjects.push(new CollectableCoin(1720, 340));
    level1CollectableObjects.push(new CollectableCoin(1760, 340));

    level1CollectableObjects.push(new CollectableCoin(2300, 100));
    level1CollectableObjects.push(new CollectableCoin(2340, 100));
    level1CollectableObjects.push(new CollectableCoin(2380, 100));
    level1CollectableObjects.push(new CollectableCoin(2420, 100));
    level1CollectableObjects.push(new CollectableCoin(2460, 100));
    level1CollectableObjects.push(new CollectableCoin(2300, 140));
    level1CollectableObjects.push(new CollectableCoin(2340, 140));
    level1CollectableObjects.push(new CollectableCoin(2380, 140));
    level1CollectableObjects.push(new CollectableCoin(2420, 140));
    level1CollectableObjects.push(new CollectableCoin(2460, 140));


    level1CollectableObjects.push(new CollectableCoin(3300, 100));
    level1CollectableObjects.push(new CollectableCoin(3340, 100));
    level1CollectableObjects.push(new CollectableCoin(3380, 100));
    level1CollectableObjects.push(new CollectableCoin(3420, 100));
    level1CollectableObjects.push(new CollectableCoin(3460, 100));
    level1CollectableObjects.push(new CollectableCoin(3300, 140));
    level1CollectableObjects.push(new CollectableCoin(3340, 140));
    level1CollectableObjects.push(new CollectableCoin(3380, 140));
    level1CollectableObjects.push(new CollectableCoin(3420, 140));
    level1CollectableObjects.push(new CollectableCoin(3460, 140));

    level1CollectableObjects.push(new CollectableCoin(3600, 300));
    level1CollectableObjects.push(new CollectableCoin(3640, 300));
    level1CollectableObjects.push(new CollectableCoin(3680, 300));
    level1CollectableObjects.push(new CollectableCoin(3720, 300));
    level1CollectableObjects.push(new CollectableCoin(3760, 300));
    level1CollectableObjects.push(new CollectableCoin(3600, 340));
    level1CollectableObjects.push(new CollectableCoin(3640, 340));
    level1CollectableObjects.push(new CollectableCoin(3680, 340));
    level1CollectableObjects.push(new CollectableCoin(3720, 340));
    level1CollectableObjects.push(new CollectableCoin(3760, 340));

    level1CollectableObjects.push(new CollectableCoin(3300, 100));
    level1CollectableObjects.push(new CollectableCoin(3340, 100));
    level1CollectableObjects.push(new CollectableCoin(3380, 100));
    level1CollectableObjects.push(new CollectableCoin(3420, 100));
    level1CollectableObjects.push(new CollectableCoin(3460, 100));
    level1CollectableObjects.push(new CollectableCoin(3300, 140));
    level1CollectableObjects.push(new CollectableCoin(3340, 140));
    level1CollectableObjects.push(new CollectableCoin(3380, 140));
    level1CollectableObjects.push(new CollectableCoin(3420, 140));
    level1CollectableObjects.push(new CollectableCoin(3460, 140));

    level1CollectableObjects.push(new CollectableCoin(4600, 300));
    level1CollectableObjects.push(new CollectableCoin(4640, 300));
    level1CollectableObjects.push(new CollectableCoin(4680, 300));
    level1CollectableObjects.push(new CollectableCoin(4720, 300));
    level1CollectableObjects.push(new CollectableCoin(4760, 300));
    level1CollectableObjects.push(new CollectableCoin(4600, 340));
    level1CollectableObjects.push(new CollectableCoin(4640, 340));
    level1CollectableObjects.push(new CollectableCoin(4680, 340));
    level1CollectableObjects.push(new CollectableCoin(4720, 340));
    level1CollectableObjects.push(new CollectableCoin(4760, 340));

    level1CollectableObjects.push(new CollectableCoin(4300, 100));
    level1CollectableObjects.push(new CollectableCoin(4340, 100));
    level1CollectableObjects.push(new CollectableCoin(4380, 100));
    level1CollectableObjects.push(new CollectableCoin(4420, 100));
    level1CollectableObjects.push(new CollectableCoin(4460, 100));
    level1CollectableObjects.push(new CollectableCoin(4300, 140));
    level1CollectableObjects.push(new CollectableCoin(4340, 140));
    level1CollectableObjects.push(new CollectableCoin(4380, 140));
    level1CollectableObjects.push(new CollectableCoin(4420, 140));
    level1CollectableObjects.push(new CollectableCoin(4460, 140));

    level1CollectableObjects.push(new CollectableCoin(4300, 180));
    level1CollectableObjects.push(new CollectableCoin(4340, 180));
    level1CollectableObjects.push(new CollectableCoin(4380, 180));
    level1CollectableObjects.push(new CollectableCoin(4420, 180));
    level1CollectableObjects.push(new CollectableCoin(4460, 180));
    level1CollectableObjects.push(new CollectableCoin(4300, 220));
    level1CollectableObjects.push(new CollectableCoin(4340, 220));
    level1CollectableObjects.push(new CollectableCoin(4380, 220));
    level1CollectableObjects.push(new CollectableCoin(4420, 220));
    level1CollectableObjects.push(new CollectableCoin(4460, 220));
}


