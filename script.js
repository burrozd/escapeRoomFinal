const hamburgerButton = document.getElementById("popupButton");
const hamburgerMenu = document.getElementById("menuPopup");
const closeButton = document.getElementById("closeButton");

hamburgerButton.addEventListener("click", function() {
    hamburgerMenu.style.display = "flex";
});

closeButton.addEventListener("click", function() {
    hamburgerMenu.style.display = "none";
});