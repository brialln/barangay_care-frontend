document.addEventListener('DOMContentLoaded', function() {
    // Ensure the lightbox is hidden on page load
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }

    // Add event listener for comment buttons
    document.querySelectorAll('.comment-button').forEach(button => {
        button.addEventListener('click', function() {
            const commentsSection = this.closest('.threads_post').querySelector('.threads_comments');
            if (commentsSection) {
                commentsSection.classList.toggle('expanded');
            }
        });
    });

    // Add event listener for like buttons
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // Modal functionality
    const reportModal = document.getElementById('reportModal');
    const reportModalContent = reportModal.querySelector('.modal-content');
    const deleteModal = document.getElementById('deleteModal');
    const deleteModalContent = deleteModal.querySelector('.modal-content');
    const cancelButtons = document.querySelectorAll('.cancelDelete');
    const closeButtons = document.querySelectorAll('.close-button');

    document.querySelectorAll('.report-thread-btn').forEach(button => {
        button.addEventListener('click', function() {
            reportModal.style.display = 'block';
            reportModal.classList.remove('fade-out');
            reportModalContent.classList.remove('slide-out');
        });
    });

    document.querySelectorAll('.delete-thread-btn').forEach(button => {
        button.addEventListener('click', function() {
            deleteModal.style.display = 'block';
            deleteModal.classList.remove('fade-out');
            deleteModalContent.classList.remove('slide-out');
        });
    });

    cancelButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.classList.add('fade-out');
            modal.querySelector('.modal-content').classList.add('slide-out');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 500)
        })
    })

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.classList.add('fade-out');
            modal.querySelector('.modal-content').classList.add('slide-out');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 500); // Match the duration of the fade-out animation
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === reportModal || event.target === deleteModal) {
            event.target.classList.add('fade-out');
            event.target.querySelector('.modal-content').classList.add('slide-out');
            setTimeout(() => {
                event.target.style.display = 'none';
            }, 500); // Match the duration of the fade-out animation
        }
    });

    // Add event listener for comment like buttons
    document.querySelectorAll('.comment-like-button').forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // Add event listener for comment report buttons
    document.querySelectorAll('.comment-report-btn').forEach(button => {
        button.addEventListener('click', function() {
            reportModal.style.display = 'block';
            reportModal.classList.remove('fade-out');
            reportModalContent.classList.remove('slide-out');
        });
    });

    // Add event listener for comment reply buttons
    document.querySelectorAll('.comment-reply-button').forEach(button => {
        button.addEventListener('click', function() {
            const replyInput = this.closest('.comment_info').querySelector('.reply_input');
            if (replyInput) {
                replyInput.style.display = 'flex';
            }
        });
    });

    // Add event listener for close reply buttons
    document.querySelectorAll('.close-reply-btn').forEach(button => {
        button.addEventListener('click', function() {
            const replyInput = this.closest('.reply_input');
            if (replyInput) {
                replyInput.style.display = 'none';
            }
        });
    });

    // Add event listener for view replies buttons
    document.querySelectorAll('.view-replies-btn').forEach(button => {
        button.addEventListener('click', function() {
            const repliesSection = this.nextElementSibling;
            if (repliesSection) {
                repliesSection.classList.toggle('expanded');
                this.textContent = repliesSection.classList.contains('expanded') ? 'Hide Replies' : 'View Replies';
            }
        });
    });
});

// Functionality for Threads Tab Switching (Barangay Feeds & My Feeds)
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.threads_tab');
    const contents = document.querySelectorAll('.threads_content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to the clicked tab
            this.classList.add('active');

            // Hide all content sections
            contents.forEach(content => content.classList.remove('active'));
            // Show the content section corresponding to the clicked tab
            const activeContent = document.getElementById(this.getAttribute('data-tab'));
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });
});

// Functionality for Edit and Delete User Threads (My Feeds)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.threads-menu-button').forEach(menuButton => {
        const menuContent = menuButton.nextElementSibling;

        menuButton.addEventListener('click', function() {
            menuContent.classList.toggle('show');
        });

        // Optional: Close the menu if clicked outside
        document.addEventListener('click', function(event) {
            if (!menuButton.contains(event.target) && !menuContent.contains(event.target)) {
                menuContent.classList.remove('show');
            }
        });
    });
});

// Functionality after Clicking the Submit Idea/Sign up Button (Acknowledgement Message)
document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    var modal = document.querySelector(".ideaModal");
    var btn = document.getElementById("readIdeaBtn");
    var span = document.querySelector(".closeIdea");

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
        setTimeout(function() {
            modal.classList.add("show");
        }, 10); // Slight delay to trigger transition
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.classList.remove("show");
        setTimeout(function() {
            modal.style.display = "none";
        }, 500); // Match the transition duration
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove("show");
            setTimeout(function() {
                modal.style.display = "none";
            }, 500); // Match the transition duration
        }
    }
});