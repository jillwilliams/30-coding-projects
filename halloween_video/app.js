const video= document.getElementById("video")
const clickMeButton = document.querySelector(".clickMe")


clickMeButton.addEventListener("click", () => {
    if (clickMeButton.classList.contains("pause")) {
        clickMeButton.classList.remove("pause")
        video.paused()
    } else {
        clickMeButton.classList.add("pause")
        video.play()
    }
})


const audio = document.getElementById("scaryMusic");

clickMeButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        clickMeButton.textContent = 'Stop Music';
    } else {
        audio.pause();
        clickMeButton.textContent = 'Play Music';
    }
});







