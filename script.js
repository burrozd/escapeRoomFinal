const button = document.getElementById("#hamburgerButton");

let menuModal = document.createElement("div");
menuModal.className = "menu-modal";

let online = document.createElement("h1");
online.className = "menu-online";

let onSite = document.createElement("h1");
onSite.className = "menu-onsite";

let story = document.createElement("h1");
story.className = "menu-story";

let contact = document.createElement("h1");
contact.className = "menu-contact";

let menuClose = document.createElement("button");
menuClose.className = "close-button";

function menuModal() {
    addEventListener("click", menuModal);
    menuModal.style.display = "flex";
}