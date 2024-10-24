// GENERAL JS FUNCTION

// Window Navigation Scroll Animation
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// Page refresh once
window.onload = function() {
    // Check if the page was refreshed before
    if (!sessionStorage.getItem('refreshed')) {
      // If not, set a delay before refreshing the page
      setTimeout(function() {
        sessionStorage.setItem('refreshed', 'true');
        location.reload();
      }, 2500); // Refresh after 2500 milliseconds (2.5 seconds)
    }
  }