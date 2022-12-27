const hamburgerButton = document.getElementById("popupButton");
const hamburgerMenu = document.getElementById("menuPopup");
const closeButton = document.getElementById("closeButton");

hamburgerButton.addEventListener("click", () => {
    hamburgerMenu.style.display = "flex";
    hamburgerMenu.classList.add("popped");
});

closeButton.addEventListener("click", function() {
    hamburgerMenu.style.display = "none";
});