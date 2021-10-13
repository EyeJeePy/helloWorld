const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const container = document.getElementById("container");
const color = document.getElementsByClassName("color")[0];// const color = document.querySelector(".color");
const sidebar = document.getElementById("sidebar");
const openSidebarBtn = document.getElementById("open-sidebar-btn");
const closeSidebarBtn = document.getElementById("close-sidebar-btn");
const social = document.getElementById("social");

// ** Random Picker ** //
btn.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }


    color.textContent = hexColor;
    color.setAttribute("style", `color:${hexColor}`);
    container.setAttribute("style", `background:${hexColor}`);

});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

// ** Sidebar **
openSidebarBtn.addEventListener("click", function() {
    openSidebarBtn.setAttribute("style", "display: none;");
    sidebar.setAttribute("style", "right: 0; transition: ease-in-out 0.3s;");
    setTimeout(() => {closeSidebarBtn.setAttribute("style", "display: block; right: 242px; transform: scaleX(-1);");}, 285);
    
});

closeSidebarBtn.addEventListener("click", function () {
    closeSidebarBtn.setAttribute("style", "display: none;");
    sidebar.setAttribute("style", "right: -222px; transition: ease-in-out 0.3s;");
    setTimeout(() => {openSidebarBtn.setAttribute("style", "display: block;");}, 285);
    
});
 