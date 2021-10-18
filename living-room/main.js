const openVideo = document.querySelector(".open-video");
const overlayModal = document.querySelector(".overlay-modal");
const modal = document.querySelector(".modal");
let video = document.getElementById('video');
let source = document.createElement('source');

openVideo.addEventListener("click", function () {
    overlayModal.setAttribute("style", "z-index: 1; opacity: 1;");
    source.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/transcoded/e/ee/Thomas_Edison_Black_Maria_film_Carmencita%2C_1894.webm/Thomas_Edison_Black_Maria_film_Carmencita%2C_1894.webm.360p.vp9.webm");
    video.setAttribute("style", "z-index: 2;")
    video.appendChild(source);
    video.play();
});

overlayModal.addEventListener("click", function () {
    overlayModal.setAttribute("style", "z-index: -1; opacity: 0;");
});

modal.addEventListener("click", (event) => {
    event.stopPropagation();
});

