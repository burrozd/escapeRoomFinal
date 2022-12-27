const hamburgerButton = document.getElementById("popupButton");
const hamburgerMenu = document.getElementById("menuPopup");
const closeButton = document.getElementById("closeButton");

/* hamburgerButton.addEventListener("click", function() {
    hamburgerMenu.style.display = "flex";
}); */

hamburgerButton.addEventListener("click", () => {
    hamburgerMenu.style.display = "flex";
    hamburgerMenu.classList.add("popped");
});

closeButton.addEventListener("click", function() {
    hamburgerMenu.style.display = "none";
});

/* function fadeIn(el) {
    el.style.opacity = 0;
  
    var tick = function() {
      el.style.opacity = +el.style.opacity + 0.01;
  
      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
      }
    };
  
    tick();
  }
  
  document.getElementById('popupButton').addEventListener('click', function() {
    fadeIn(document.getElementById('element'));
  }); */

/* const menuFadein = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
];

const fadeinTiming = {
    duration: 2000,
    iterations: 1,
}; */