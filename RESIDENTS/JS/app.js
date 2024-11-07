/*
    * This file contains the General Javascript functions for the RESIDENTS.
*/

// Window Navigation Scroll Animation -----------------------------------------------------------
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

// LIGHTBOX FUNCTION FOR IMAGE EXPAND -----------------------------------------------------------
function openLightbox(imageSrc) {
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
    openLightbox(imageSrc);
}

// Close lightbox when clicking outside of it
document.addEventListener('click', function(event) {
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');
    
    if (lightbox && lightboxContent && lightbox.style.display === 'flex') {
        if (!lightboxContent.contains(event.target)) {
            closeLightbox();
        }
    }
});

function hideLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
}

// Ensure the lightbox is hidden as soon as the script runs
(function() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
})();

// Functionality for Idea Submission Acknowledgement -----------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modals = [
        { id: 'acknowledgeModal', class: 'acknowledge-button' }
    ];

    modals.forEach(modalInfo => {
        const modal = document.getElementById(modalInfo.id);
        const modalContent = modal ? modal.querySelector('.thread_modal-content') : null;

        if (modal && modalContent) {
            document.querySelectorAll(`.${modalInfo.class}`).forEach(button => {
                button.addEventListener('click', function() {
                    modal.style.display = 'block';
                    modal.classList.remove('fade-out');
                    modalContent.classList.remove('fade-out');
                });
            });
        }
    });

    const acknowledgeButtonDone = document.querySelectorAll('.acknowledge-done-btn');

    acknowledgeButtonDone.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.thread_modal');
            const modalContent = modal.querySelector('.thread_modal-content');
            modal.classList.add('fade-out');
            modalContent.classList.add('fade-out');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300); // Match the duration of the fade-out animation
        });
    });

    window.addEventListener('click', function(event) {
        modals.forEach(modalInfo => {
            const modal = document.getElementById(modalInfo.id);
            if (event.target === modal) {
                modal.classList.add('fade-out');
                const modalContent = modal.querySelector('.thread_modal-content');
                modalContent.classList.add('fade-out');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300); // Match the duration of the fade-out animation
            }
        });
    });
});