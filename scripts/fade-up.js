$(document).ready(() => {
    $(".fade-up").fadeIn(2000)
})

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar-custom").style.top = "0";
  } else {
    document.querySelector(".navbar-custom").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

let projectImg = document.querySelector('.project-img')
projectImg.addEventListener('mouseenter', () => {
    document.querySelector('.img-on-hover').style.display = "inline-block"
})

projectImg.addEventListener('mouseleave', () => {
    document.querySelector('.img-on-hover').style.display = "none"
})