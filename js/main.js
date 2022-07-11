const navbar = document.querySelector(".sticky-top");
window.onscroll = () => {
  if (window.scrollY > 1) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};



let watchme = document.getElementById('watchme')

watchme.className = 'slidein'
const listener = (e) => {
  watchme.className = 'slidein stopped'
}
watchme.addEventListener('click', () =>
  watchme.addEventListener('animationiteration', listener, false)
)
