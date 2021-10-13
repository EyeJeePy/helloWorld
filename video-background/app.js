const video = document.querySelector("video");
const playPause = document.querySelector(".play-pause");

playPause.addEventListener("click", playPauseVideo);

function playPauseVideo() {
    if(video.paused) {
        video.play();
        playPause.innerHTML = "❙❙";
    } else {
        video.pause();
        playPause.innerHTML = "►";
    }
}
