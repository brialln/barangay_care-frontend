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

  document.addEventListener('DOMContentLoaded', function() {
    // Ensure the lightbox is hidden on page load
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
});



// LIGHTBOX FUNCTION FOR IMAGE EXPAND
function openLightbox(imageSrc) {
    // Ensure the lightbox only opens when this function is called
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    if (!lightbox || !lightboxImg) return; // Extra safeguard
    
    lightboxImg.src = imageSrc;
    lightbox.style.display = 'flex'; // Show the lightbox
    document.body.style.overflow = 'hidden'; // Disable scroll on body
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return; // Safeguard if lightbox is missing
    
    lightbox.style.display = 'none'; // Hide the lightbox
    document.body.style.overflow = 'auto'; // Re-enable scroll on body
}

function handleImageClick(imageSrc) {
    // Make sure the lightbox is opened through a user interaction (click)
    openLightbox(imageSrc);
}



