let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

// Sign-IN
let inUsername = id("in-username"),
    inPassword = id("in-password"),
    inForm = id("in-form"),
    inSubmit = id("in-submit");
inErrorMsg = classes("in-error");
// icon = classes("icon");
inSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    inEngine(inUsername, 0, "Username cannot be blank");
    inEngine(inPassword, 1, "Password cannot be blank");
})

let inEngine = (id, serial, message) => {
    if (id.value === "") {
        inErrorMsg[serial].innerHTML = message;
        inErrorMsg[serial].setAttribute("style", "opacity: 1;");
        id.style.border = "1px solid red";
        // icon[serial].style.opacity = "1";
    }

    else {
        inErrorMsg[serial].innerHTML = "";
        id.style.border = "1px solid var(--pink-op3)";
        // icon[serial].style.opacity = "0";
    }
}

// Sign-UP
let upUsername = id("up-username"),
    email = id("email"),
    upPassword = id("up-password"),
    repeatPassword = id("repeat-password"),
    upForm = id("up-form"),
    upSubmit = id("up-submit"),
    upErrorMsg = classes("up-error"),
    repeatErrorMsg = classes("repeat-error");
icon = classes("icon");

upSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    upEngine(upUsername, 0, "Username cannot be blank");
    upEngine(email, 1, "Email cannot be blank");
    upEngine(upPassword, 2, "Password cannot be blank");
    upEngine(repeatPassword, 3, "Password  cannot be blank");
    upEngine(repeatErrorMsg, 4, "Different password");
})

let upEngine = (id, serial, message) => {
    if (id.value === "") {
        upErrorMsg[serial].innerHTML = message;
        upErrorMsg[serial].setAttribute("style", "opacity: 1;");
        icon[serial].setAttribute("style", "opacity: 1;");
        id.style.border = "1px solid red";
        // icon[serial].style.opacity = "1";
    }
    else {
        upErrorMsg[serial].innerHTML = "";
        id.style.border = "1px solid var(--pink-op3)";
        icon[serial].setAttribute("style", "opacity: 0;");
        // icon[serial].style.opacity = "0";
    }
}
