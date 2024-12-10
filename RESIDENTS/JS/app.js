/*
    * This file contains the General Javascript functions for the RESIDENTS.
*/

// * Window Navigation Scroll Animation -----------------------------------------------------------
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// * Back Button Function -----------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.getElementById("backButton");

    // Store the referrer in sessionStorage if not from a form submission
    if (document.referrer && !sessionStorage.getItem("submittedForm")) {
        sessionStorage.setItem("prevPage", document.referrer);
    }

    // Reset submittedForm flag on load
    sessionStorage.removeItem("submittedForm");

    if (backButton) {
        backButton.addEventListener("click", () => {
            const prevPage = sessionStorage.getItem("prevPage");
            if (prevPage) {
                window.location.href = prevPage;
            } else {
                // Optional: Fallback behavior
                window.history.back();
            }
        });
    }

    // Handle modal form submissions
    const modalForms = document.querySelectorAll(".modal-content");
    modalForms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent page reload
            const actionButton = e.submitter; // Get the clicked button

            if (actionButton.classList.contains("delete_button-m")) {
                // Handle "Delete" action
                console.log("Post deleted!");
                sessionStorage.setItem("submittedForm", true);
            } else if (actionButton.classList.contains("restore_button")) {
                // Handle "Restore" action
                console.log("Post restored!");
                sessionStorage.setItem("submittedForm", true);
            }

            // Close the modal (you can add modal-specific logic here)
            const modal = form.closest(".modal");
            if (modal) modal.style.display = "none";
        });
    });

    // Optional: Add event listeners for cancel buttons
    const cancelButtons = document.querySelectorAll(".cancelDelete");
    cancelButtons.forEach(cancelButton => {
        cancelButton.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default button action
            const modal = cancelButton.closest(".modal");
            if (modal) modal.style.display = "none";
        });
    });
});


// * Horizontal Scroll Functionality for Barangay Section -----------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const scrollContainers = document.querySelectorAll(".barangay_section-container");

    scrollContainers.forEach((container) => {
        const leftArrow = container.previousElementSibling; // Assuming left arrow is before the container
        const rightArrow = container.nextElementSibling; // Assuming right arrow is after the container

        if (leftArrow && rightArrow) {
            addScrollFunctionality(leftArrow, rightArrow, container);
        } else {
            console.error('One or more arrows not found for a container');
        }
    });
});

function addScrollFunctionality(leftArrow, rightArrow, container) {
    // Left arrow click event
    leftArrow.addEventListener("click", () => {
        scrollContainer(container, -200); // Adjust the distance as needed
    });

    // Right arrow click event
    rightArrow.addEventListener("click", () => {
        scrollContainer(container, 200); // Adjust the distance as needed
    });

    // Horizontal scrolling with trackpad or mouse wheel
    container.addEventListener("wheel", (e) => {
        // Use deltaY to scroll horizontally
        if (e.deltaY !== 0) {
            e.preventDefault(); // Prevent vertical scrolling
            scrollContainer(container, e.deltaY * 2); // Adjust multiplier for speed
        }
    });

    // Horizontal scrolling with touchscreen
    let isTouching = false;
    let startX;
    let scrollLeft;

    container.addEventListener("touchstart", (e) => {
        isTouching = true;
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener("touchmove", (e) => {
        if (!isTouching) return;
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Adjust multiplier for speed
        container.scrollLeft = scrollLeft - walk;
    });

    container.addEventListener("touchend", () => {
        isTouching = false;
    });

    // Optional: Enable keyboard navigation for accessibility
    container.setAttribute("tabindex", "0"); // Make container focusable
    container.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
            scrollContainer(container, -200);
        } else if (e.key === "ArrowRight") {
            scrollContainer(container, 200);
        }
    });
}

function scrollContainer(container, distance) {
    container.scrollBy({ left: distance, behavior: "smooth" });
}

// * Page refresh once for lightbox -----------------------------------------------------------
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

// * Lightbox Function Expand -----------------------------------------------------------
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

// * Functionality for Idea Submission Acknowledgement -----------------------------------------------------------
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

// * Functionality for Centralized Navigation Bar -----------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    fetch('navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar-container').innerHTML = html;

            // Get current page filename
            const currentPage = location.pathname.split('/').pop();

            // Highlight active links
            const links = document.querySelectorAll('.nav_items a');
            links.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    // Add active class to the current link
                    link.classList.add('active');

                    // Check if the link is part of a dropdown
                    const dropdownParent = link.closest('.nav_dropdown');
                    if (dropdownParent) {
                        // Highlight the dropdown parent link
                        const parentLink = dropdownParent.querySelector('a:not([href])');
                        if (parentLink) {
                            parentLink.classList.add('active');
                        }
                    }
                }
            });
        });
});

// * Functionality for Feedback Modal -----------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    fetch('navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar-container').innerHTML = html;

            // Define modal configuration
            const modals = [
                { id: 'feedback-modal', class: 'give-feedback' }
            ];

            // Open modal functionality
            modals.forEach(modalInfo => {
                const modal = document.getElementById(modalInfo.id);
                const modalContent = modal ? modal.querySelector('.modal-content') : null;

                if (modal && modalContent) {
                    document.querySelectorAll(`.${modalInfo.class}`).forEach(button => {
                        button.addEventListener('click', function () {
                            modal.style.display = 'block';
                            modal.classList.remove('fade-out');
                            modalContent.classList.remove('fade-out');
                        });
                    });
                }
            });

            // Submit button action
            document.querySelectorAll('.submit-modal-m').forEach(button => {
                button.addEventListener('click', function () {
                    // Perform the desired action on submit
                    alert('Successfully Submitted!');
                    const modal = this.closest('.modal');
                    const modalContent = modal.querySelector('.modal-content');
                    modal.classList.add('fade-out');
                    modalContent.classList.add('fade-out');
                    setTimeout(() => {
                        modal.style.display = 'none';
                    }, 300); // Match fade-out animation duration
                });
            });

            // Close modal functionality
            document.querySelectorAll('.cancel-modal-m, .close-button').forEach(button => {
                button.addEventListener('click', function () {
                    const modal = this.closest('.modal');
                    const modalContent = modal.querySelector('.modal-content');
                    modal.classList.add('fade-out');
                    modalContent.classList.add('fade-out');
                    setTimeout(() => {
                        modal.style.display = 'none';
                    }, 300); // Match fade-out animation duration
                });
            });

            // Close modal when clicking outside
            window.addEventListener('click', function (event) {
                modals.forEach(modalInfo => {
                    const modal = document.getElementById(modalInfo.id);
                    if (event.target === modal) {
                        modal.classList.add('fade-out');
                        const modalContent = modal.querySelector('.modal-content');
                        modalContent.classList.add('fade-out');
                        setTimeout(() => {
                            modal.style.display = 'none';
                        }, 300); // Match fade-out animation duration
                    }
                });
            });
        });
});

// * Functionality for Ctrl + B to open Feedback Modal -----------------------------------------------------------
document.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}, Ctrl: ${event.ctrlKey}`);
    if (event.ctrlKey && event.key === 'b') {
        event.preventDefault(); // Prevent default browser behavior (e.g., bold in some editors)
        const feedbackModal = document.getElementById('feedback-modal');
        if (feedbackModal) {
            feedbackModal.style.display = 'block';
            console.log("Ctrl + B triggered: Modal opened");
        } else {
            console.error("Feedback modal not found!");
        }
    }
});

// * Functionality for Star Rating -----------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".star-rating span");
    const ratingValueDisplay = document.getElementById("rating-value");
    let selectedRating = 0;

    // Star hover and click events
    stars.forEach(star => {
        star.addEventListener("mouseover", () => {
            highlightStars(star.dataset.rating);
        });

        star.addEventListener("mouseout", () => {
            highlightStars(selectedRating);
        });

        star.addEventListener("click", () => {
            selectedRating = star.dataset.rating;
            highlightStars(selectedRating);
            ratingValueDisplay.textContent = `Rating: ${selectedRating}`;
        });
    });

    function highlightStars(rating) {
        stars.forEach(star => {
            star.classList.toggle("selected", star.dataset.rating <= rating);
        });
    }

    // Submit feedback (example functionality)
    const submitFeedbackButton = document.getElementById("submit-feedback");
    submitFeedbackButton.addEventListener("click", () => {
        const feedbackText = document.getElementById("feedback-text").value;
        if (selectedRating > 0 && feedbackText.trim()) {
            alert(`Thank you for your feedback!\nRating: ${selectedRating}\nFeedback: ${feedbackText}`);
            // Close modal after submission
            document.getElementById("feedback-modal").style.display = "none";
        } else {
            alert("Please provide a rating and your feedback before submitting.");
        }
    });
});

// * Show and Hide Upcoming Sports Events -----------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const sportsEvents = document.querySelectorAll('.sports_event');

    sportsEvents.forEach(sportsEvent => {
        sportsEvent.addEventListener('click', () => {
            toggleEvent(sportsEvent);
        });
    });
});

function toggleEvent(sportsEvent) {
    const description = sportsEvent.querySelector('p');
    const isOpen = sportsEvent.classList.contains('open');

    if (isOpen) {
        // Collapse content
        description.style.height = '0px';
    } else {
        // Expand content
        description.style.height = description.scrollHeight + 'px';
    }

    // Toggle open class
    sportsEvent.classList.toggle('open');

    // Change the icon
    toggleIcon(sportsEvent);
}

function toggleIcon(sportsEvent) {
    const icon = sportsEvent.querySelector('.sports_event-icon i');
    if (icon.className === 'uil uil-angle-down') {
        icon.className = 'uil uil-angle-up';
    } else {
        icon.className = 'uil uil-angle-down';
    }
}

// * Functionality for Confirmation Modal -----------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    // Define modal configuration
    const modals = [
        { id: 'confirmationModal', class: 'confirmation' }, 
        { id: 'pw-confirmationModal', class: 'pw-confirmation' }
    ];

    // Open modal functionality
    modals.forEach(modalInfo => {
        const modal = document.getElementById(modalInfo.id);
        const modalContent = modal ? modal.querySelector('.modal-content') : null;

        if (modal && modalContent) {
            document.querySelectorAll(`.${modalInfo.class}`).forEach(button => {
                button.addEventListener('click', function (event) {
                    event.preventDefault(); // Prevent form submission if needed
                    modal.style.display = 'block';
                    modal.classList.remove('fade-out');
                    modalContent.classList.remove('fade-out');
                });
            });
        }
    });

    // Close modal functionality
    document.querySelectorAll('.cancel-modal-m, .close-button').forEach(button => {
        button.addEventListener('click', function () {
            const modal = this.closest('.modal');
            const modalContent = modal.querySelector('.modal-content');
            modal.classList.add('fade-out');
            modalContent.classList.add('fade-out');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300); // Match fade-out animation duration
        });
    });

    // Submit button action
    document.querySelectorAll('.submit-modal-m').forEach(button => {
        button.addEventListener('click', function () {
            // Perform the desired action on submit
            alert('Successfully Submitted!');
            const modal = this.closest('.modal');
            const modalContent = modal.querySelector('.modal-content');
            modal.classList.add('fade-out');
            modalContent.classList.add('fade-out');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300); // Match fade-out animation duration
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function (event) {
        modals.forEach(modalInfo => {
            const modal = document.getElementById(modalInfo.id);
            if (event.target === modal) {
                modal.classList.add('fade-out');
                const modalContent = modal.querySelector('.modal-content');
                modalContent.classList.add('fade-out');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300); // Match fade-out animation duration
            }
        });
    });
});