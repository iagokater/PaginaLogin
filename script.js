function slideWallpaper() {
  const wallpaper = document.querySelector(".wallpaper");
  const loginBox = document.querySelector(".login-box");
  let width = 100;

  function animateSlide() {
    wallpaper.style.width = width + "%";
    width -= 0.7; 
    if (width > 60) {
      requestAnimationFrame(animateSlide);
    } else {
      
      loginBox.style.display = "block";
    }
  }

  wallpaper.style.width = "100%";

  setTimeout(function () {
    animateSlide();
  }, 1200);
}

setTimeout(function () {
  slideWallpaper();
}, 500);
