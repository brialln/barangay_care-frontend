// WINDOW NAV SCROLL ANIMATION
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})