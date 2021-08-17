const navMenu = document.querySelector("#nav-menu");
const navButton = document.querySelector("#menu-bars");
const navExitButton = document.querySelector("#exit");

const bio = document.querySelector("#bio");
const porfolio = document.querySelector("#works");
const connect = document.querySelector("#connect");

// when button is clicked, show and hide nav menu in mobile mode
navButton.addEventListener("click", showMenu);
navExitButton.addEventListener("click", hideMenu);

function showMenu() {
     navMenu.style.display = "flex";
     navButton.style.display = "none"
}

function hideMenu() {
    navMenu.style.display = "";
    navButton.style.display = "";
}