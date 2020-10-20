$(document).ready(() => {
    $(".fade-up").fadeIn(2000)
})

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar-custom").style.top = "0";
  } else {
    document.querySelector(".navbar-custom").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

// use the intersection observer API for fade in up https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// https://www.selbekk.io/blog/2019/08/how-to-fade-in-content-as-it-scrolls-into-view/