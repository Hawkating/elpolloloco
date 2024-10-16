class Music {
    endbossTheme = new Audio('./audio/endbosstheme.mp3');
    theme = new Audio('./audio/normalmusic.mp3');

    intervalId;
    intervalIdEndboss

    /**
     * Prepares to play the music
     */
    constructor() {
        this.setVolume(0.2);
        this.playMusicNormal();
    }

    /**
     * Set Interval for normal music
     */
    playMusicNormal() {
        this.intervalId = setInterval(() => {
            if (mute == true) {
                this.theme.pause();
            } else {
                this.theme.play();
            }
        }, 100)
        allIntervals.push(this.intervalId)
    }

    /**
     * Set Interval for endboss music
     */
    playEndbossTheme() {
        this.theme.pause();
        this.intervalIdEndboss = setInterval(() => {
            if (mute == true) {
                this.endbossTheme.pause();
            } else {
                this.endbossTheme.play();
            }
        }, 100)
        allIntervals.push(this.intervalIdEndboss)
    }

    /**
     * creates the volume
     * @param {number} volumeLevel 
     */
    setVolume(volumeLevel) {
        this.theme.volume = volumeLevel;
        this.endbossTheme.volume = volumeLevel;
    }

}