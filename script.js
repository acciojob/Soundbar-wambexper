//your JS code here. If required.
//your JS code here. If required.
let audioPlayer = document.getElementById('audioPlayer');
let currentAudio = null;

function playAudio(soundFileName) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    audioPlayer.src = `sounds/${soundFileName}`;;
    audioPlayer.play(); 
    currentAudio = audioPlayer;
    
}

function stopAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}
