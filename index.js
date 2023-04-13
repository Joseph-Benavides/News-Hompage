let menuBtnOpen = document.querySelector(".menu-open");
let menuBtnClose = document.querySelector(".menu-close");
let navItems = document.querySelector(".nav-items");
let overlay = document.querySelector(".overlay");


function menuBtnClicked() {
    console.log("Heroooo")
    document.body.classList.toggle("slide")
    menuBtnOpen.style.display = "none";
    menuBtnClose.classList.add("display");
    overlay.classList.add("display");
    
}

function menuBtnCloseClicked() {
    console.log("Hiyaa");
    document.body.classList.toggle("slide")
    menuBtnClose.classList.remove("display");
    menuBtnOpen.style.display = "initial";
    overlay.classList.remove("display")
}

menuBtnOpen.addEventListener("click", menuBtnClicked)
menuBtnClose.addEventListener("click", menuBtnCloseClicked)
