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
    document.body.style.overflowX = 'hidden'; // Disable scroll on body
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return; // Safeguard if lightbox is missing
    
    lightbox.style.display = 'none'; // Hide the lightbox
    document.body.style.overflow = 'auto'; // Re-enable scroll on body
    document.body.style.overflowX = 'hidden'; // Disable scroll on body
}

function handleImageClick(imageSrc) {
    // Make sure the lightbox is opened through a user interaction (click)
    openLightbox(imageSrc);
}

// Functionality for Idea Submission Acknowledgement
document.addEventListener('DOMContentLoaded', function() {
  // Modal functionality
  const acknowledgeModal = document.getElementById('acknowledgeModal');
  const acknowledgeModalContent = acknowledgeModal.querySelector('.thread_modal-content');

  const acknowledgeButtonDone = document.querySelectorAll('.acknowledge-done-btn');

  document.querySelectorAll('.acknowledge-button').forEach(button => {
      button.addEventListener('click', function() {
          acknowledgeModal.style.display = 'block';
          acknowledgeModal.classList.remove('fade-out');
          acknowledgeModalContent.classList.remove('fade-out');
      });
  });

  acknowledgeButtonDone.forEach(button => {
      button.addEventListener('click', function() {
          const modal = this.closest('.thread_modal');
          modal.classList.add('fade-out');
          setTimeout(() => {
              modal.style.display = 'none';
          }, 300)
      })
  })

  window.addEventListener('click', function(event) {
      if (event.target === acknowledgeModal ) {
          event.target.classList.add('fade-out');
          event.target.querySelector('.thread_modal-content');
          setTimeout(() => {
              event.target.style.display = 'none';
          }, 300); // Match the duration of the fade-out animation
      }
  });
})