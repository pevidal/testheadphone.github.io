function playAudio(audioId) {
    const allAudios = document.querySelectorAll("audio");
    allAudios.forEach(audio => {
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0; // Reinicia o áudio
        }
    });

    // Reproduz o áudio solicitado
    const audio = document.getElementById(audioId);
    audio.play();
}