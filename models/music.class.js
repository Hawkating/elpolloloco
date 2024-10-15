class Music {
    endbossTheme = new Audio('./audio/endbosstheme.mp3');
    theme = new Audio('./audio/normalmusic.mp3');

intervalId;

constructor(){
    this.setVolume(0.2);
    this.playMusicNormal();

}

playMusicNormal(){

    this.intervalId = setInterval(() => {
        if (mute == true){
            this.theme.pause();
        } else {
        this.theme.play();
    }
    }, 100)
}

playEndbossTheme(){
    this.theme.pause();
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
        if (mute == true){
            this.endbossTheme.pause();
        } else {
        this.endbossTheme.play();
        }
    }, 100)

}

setVolume(volumeLevel) {
    this.theme.volume = volumeLevel;
    this.endbossTheme.volume = volumeLevel;
}



}