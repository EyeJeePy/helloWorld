const openVideo = document.querySelector(".open-video");
const overlayModal = document.querySelector(".overlay-modal");
const modal = document.querySelector(".modal");

openVideo.addEventListener("click", function () {
    overlayModal.setAttribute("style", "z-index: 1; opacity: 1;");

});

overlayModal.addEventListener("click", function () {
    overlayModal.setAttribute("style", "z-index: -1; opacity: 0;");
});

modal.addEventListener("click", (event) => {
    event.stopPropagation();
});

