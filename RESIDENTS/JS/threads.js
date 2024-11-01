
// Functionality for Like Threads, Comment on Threads, Report Modal Pop-up, Like Comment, Reply Comment, Open and Close Reply, and View Replies Expand 
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
    const modal = document.getElementById('reportModal');
    const modalContent = modal.querySelector('.modal-content');
    const closeButton = document.querySelector('.close-button');

    document.querySelectorAll('.report-button').forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'block';
            modal.classList.remove('fade-out');
            modalContent.classList.remove('slide-out');
        });
    });

    closeButton.addEventListener('click', function() {
        modal.classList.add('fade-out');
        modalContent.classList.add('slide-out');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500); // Match the duration of the fade-out animation
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.add('fade-out');
            modalContent.classList.add('slide-out');
            setTimeout(() => {
                modal.style.display = 'none';
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
    document.querySelectorAll('.comment-report-button').forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'block';
            modal.classList.remove('fade-out');
            modalContent.classList.remove('slide-out');
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


// Functionality for Edit and Delete User Tweets (My Feeds)
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.threads-menu-button');
    const menuContent = document.querySelector('.threads-menu-content');

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

// Functionality after Clicking the Submit Idea/Sign up Button (Acknowledgement Message)
document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("ideaModal");
    var submitIdeaBtn = document.getElementById("submitIdeaBtn");
    var volunteerSignUpBtn = document.getElementById("volunteerSignUpBtn");
    var doneBtn = document.getElementById("doneSubmit");

    var submitIdeaMessage = document.getElementById("submitIdeaMessage");
    var volunteerSignUpMessage = document.getElementById("volunteerSignUpMessage");

    submitIdeaBtn.onclick = function() {
        submitIdeaMessage.style.display = "block";
        volunteerSignUpMessage.style.display = "none";
        modal.style.display = "block";
        submitIdeaMessage.style.color = "#FD5B32";

    }

    volunteerSignUpBtn.onclick = function() {
        submitIdeaMessage.style.display = "none";
        volunteerSignUpMessage.style.display = "block";
        modal.style.display = "block";
        volunteerSignUpMessage.style.color = "#FD5B32";
    }

    doneBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});