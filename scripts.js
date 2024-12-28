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

document.addEventListener('DOMContentLoaded', function () {
    // Inicialização dos popovers do Bootstrap
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  
    // Pop-up de cookies
    const cookiePopup = document.getElementById("cookiePopup");
    const acceptCookies = document.getElementById("acceptCookies");
    const declineCookies = document.getElementById("declineCookies");
  
    if (!localStorage.getItem("cookiesAccepted")) {
      cookiePopup.classList.add("show");
    }
  
    acceptCookies.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "true");
      cookiePopup.classList.remove("show");
    });
  
    declineCookies.addEventListener("click", () => {
      alert("Você recusou os cookies. Algumas funcionalidades podem não funcionar corretamente.");
      cookiePopup.classList.remove("show");
    });
  });
  