const btnEl = document.getElementById("btn")
const closeIconEl = document.getElementById("close-icon")
const trailerContainerEl = document.querySelector(".trailer-container")
const iframeEl =document.getElementById("iframe")


btnEl.addEventListener("click", () => {
    trailerContainerEl.classList.remove("active")

})

closeIconEl.addEventListener("click", () => {
    trailerContainerEl.classList.add("active")
    iframeEl.pause()
    iframeEl.currentTime = 0
} )