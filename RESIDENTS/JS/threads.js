// Function for Threads (Like Buttons, View Comments, View Replies, etc.)
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

// Functionality for Edit and Delete User Threads Dropdown
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

// Functionality for Edit, Flag, and Delete Modals
document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const reportThreadModal = document.getElementById('reportThreadModal');
    const reportThreadModalContent = reportThreadModal.querySelector('.thread_modal-content');

    const deleteThreadModal = document.getElementById('deleteThreadModal');
    const deleteThreadModalContent = deleteThreadModal.querySelector('.thread_modal-content');

    const closeThreadButton = document.querySelectorAll('.thread_close-button');
    const cancelThreadButton = document.querySelectorAll('.thread_cancel-button');

    document.querySelectorAll('.report-thread-btn').forEach(button => {
        button.addEventListener('click', function() {
            reportThreadModal.style.display = 'block';
            reportThreadModal.classList.remove('fade-out');
            reportThreadModalContent.classList.remove('fade-out');
        });
    });

    document.querySelectorAll('.delete-thread-btn').forEach(button => {
        button.addEventListener('click', function() {
            deleteThreadModal.style.display = 'block';
            deleteThreadModal.classList.remove('fade-out');
            deleteThreadModalContent.classList.remove('fade-out');
        });
    });

    cancelThreadButton.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.thread_modal');
            modal.classList.add('fade-out');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300)
        })
    })

    closeThreadButton.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.thread_modal');
            modal.classList.add('fade-out');
            modal.querySelector('.thread_modal-content');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300); // Match the duration of the fade-out animation
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === reportThreadModal || event.target === deleteThreadModal) {
            event.target.classList.add('fade-out');
            event.target.querySelector('.thread_modal-content');
            setTimeout(() => {
                event.target.style.display = 'none';
            }, 300); // Match the duration of the fade-out animation
        }
    });
})