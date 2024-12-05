/*
    * This file contains the General Javascript functions for the ADMIN.
*/

/*
    * This file contains the General Javascript functions for the ADMIN.
*/

// Function Image Preview (Add Post and Edit Post)
document.addEventListener('change', function (event) {
    // Check if the changed element is a file input with id="thumbnail"
    if (event.target.id === 'thumbnail') {
        const formSection = event.target.closest('.form_section');
        const imagePreview = formSection.querySelector('.image_preview, .imagePreview'); // Handle both "image_preview" and "imagePreview"
        const previewImg = imagePreview.querySelector('img');

        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewImg.src = e.target.result; // Set the preview image source
                imagePreview.style.display = 'block'; // Show the preview
            };
            reader.readAsDataURL(event.target.files[0]); // Read the file as a data URL
        } else {
            previewImg.src = '';
            imagePreview.style.display = 'none'; // Hide the preview
        }
    }
});


// Function for Back Button 
document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.getElementById("backButton");

    // Store the referrer in sessionStorage if it's not coming from a form submission
    if (document.referrer && !sessionStorage.getItem("submittedForm")) {
        sessionStorage.setItem("prevPage", document.referrer);
    }

    backButton.addEventListener("click", () => {
        // Retrieve the saved referrer
        const prevPage = sessionStorage.getItem("prevPage");
        if (prevPage) {
            window.location.href = prevPage;
        }
    });

    // Prevent referrer overwrite on form submission
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", () => {
            sessionStorage.setItem("submittedForm", true);
        });
    }
});

// Helper function for handling tab switching
function handleTabSwitching(tabsSelector, contentSelector) {
    document.addEventListener('DOMContentLoaded', function() {
        const tabs = document.querySelectorAll(tabsSelector);
        const content = document.querySelectorAll(contentSelector);

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                content.forEach(c => c.classList.remove('active'));
                content[index].classList.add('active');
            });
        });
    });
}

// Initialize tab switching for different sections
handleTabSwitching('#barangayIDRequests .tab_btn', '#barangayIDRequests .request');
handleTabSwitching('#barangayClearanceRequests .tab_btn', '#barangayClearanceRequests .request');
handleTabSwitching('#barangayIndigencyRequests .tab_btn', '#barangayIndigencyRequests .request');
handleTabSwitching('#barangayDisasterRequests .tab_btn', '#barangayDisasterRequests .request');
handleTabSwitching('#barangayJusticeRequests .tab_btn', '#barangayJusticeRequests .request');
handleTabSwitching('#barangayIdeaSubmissions .tab_btn', '#barangayIdeaSubmissions .request');
handleTabSwitching('#barangayVolunteerSignUps .tab_btn', '#barangayVolunteerSignUps .request');
handleTabSwitching('#barangayContactSubmissions .tab_btn', '#barangayContactSubmissions .request');
handleTabSwitching('#barangayYouthSportsRequest .tab_btn', '#barangayYouthSportsRequest .request');
handleTabSwitching('#barangayHealthAlertsRequest .tab_btn', '#barangayHealthAlertsRequest .request');
handleTabSwitching('#barangayResidentApproval .tab_btn', '#barangayResidentApproval .request');
handleTabSwitching('#barangayFeedbackResponses .tab_btn', '#barangayFeedbackResponses .request');
handleTabSwitching('#barangayStaffApproval .tab_btn', '#barangayStaffApproval .request');
handleTabSwitching('#barangayHeaderSection .tab_btn', '#barangayHeaderSection .request');
handleTabSwitching('#barangayAnnouncementSection .tab_btn', '#barangayAnnouncementSection .request');
handleTabSwitching('#barangayFacilitySection .tab_btn', '#barangayFacilitySection .request');

// ----------------------------------- Function for Dropdown Sort and Filter -----------------------------------
// Toggle dropdown visibility for each button individually
function toggleDropdown(button) {
    const dropdownContent = button.nextElementSibling; // Target the specific dropdown next to the clicked button
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        if (dropdown !== dropdownContent) dropdown.classList.remove('open');
    });
    dropdownContent.classList.toggle('open');
}

// Change the button text based on selected option
function selectOption(checkbox, type) {
    const dropdown = checkbox.closest('ul'); // Get the specific dropdown
    const checkboxes = dropdown.querySelectorAll('input[type="checkbox"]');
    
    // Uncheck other checkboxes within the same dropdown
    checkboxes.forEach(cb => cb.checked = false);
    checkbox.checked = true; // Check the selected one

    const selectedText = checkbox.nextElementSibling.innerText;
    
    // Update only the specific button related to the dropdown type
    if (type === 'priority') {
        const priorityBtn = dropdown.closest('.priority-dropdown').querySelector('.priority-btn .selected-priority');
        priorityBtn.innerText = selectedText;
        priorityBtn.className = `selected-priority ${selectedText.toLowerCase()}`;
    } else if (type === 'filter') {
        const filterBtn = dropdown.closest('.filter-dropdown').querySelector('.filter-btn .selected-filter');
        filterBtn.innerText = selectedText;
        filterBtn.className = `selected-filter ${selectedText.toLowerCase()}`;
    }
    
    // Close the dropdown after selection
    dropdown.classList.remove('open');
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target) && !dropdown.previousElementSibling.contains(event.target)) {
            dropdown.classList.remove('open');
        }
    });
});

// Function for Modals (Approve, Decline, Delete, VIew Details, Read Remarks)
document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modals = [
        { id: 'responseModal', class: 'approve_button' },
        { id: 'declineModal', class: 'decline_button' },
        { id: 'deleteModal', class: 'delete_button-m' },
        { id: 'restoreModal', class: 'restore_button' },
        { id: 'detailModal', class: 'details_button' },
        { id: 'viewModal', class: 'view_button' },
        { id: 'remarksModal', class: 'remarks_button' },
        { id: 'resolveModal', class: 'resolve_button' },
        { id: 'editModal', class: 'edit_button-m' },
        { id: 'deleteEmergencyModal', class: 'delete_emergency-m' },
        { id: 'editActionModal', class: 'edit_button-action'},
        { id: 'deleteActionModal', class: 'delete_button-action'},
        { id: 'feedbackModal', class: 'feedback_button' },
        { id: 'addPostModal', class: 'add_post-button' },
        { id: 'editPostModal', class: 'edit_post-button' },
        { id: 'deletePostModal', class: 'delete_post-button' },
    ];

    modals.forEach(modalInfo => {
        const modal = document.getElementById(modalInfo.id);
        const modalContent = modal ? modal.querySelector('.modal-content') : null;

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

    const closeButtons = document.querySelectorAll('.close-button');
    const cancelButtons = document.querySelectorAll('.cancelDelete');

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            const modalContent = modal.querySelector('.modal-content');
            modal.classList.add('fade-out');
            modalContent.classList.add('fade-out');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300); // Match the duration of the fade-out animation
        });
    });

    cancelButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            const modalContent = modal.querySelector('.modal-content');
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
                const modalContent = modal.querySelector('.modal-content');
                modalContent.classList.add('fade-out');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300); // Match the duration of the fade-out animation
            }
        });
    });
});

// Function for Trash Modal (Barangay ID, Barangay Indigency, Barangay Clearance, Disaster, Justice, Idea)
document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modals = [
        { id: 'trashIDModal', class: 'trash_id' },
        { id: 'trashClearanceModal', class: 'trash_clearance' },
        { id: 'trashIndigencyModal', class: 'trash_indigency' },
        { id: 'trashDisasterModal', class: 'trash_disaster' },
        { id: 'trashJusticeModal', class: 'trash_justice' },
        { id: 'trashIdeaModal', class: 'trash_idea' },
        { id: 'trashVolunteerModal', class: 'trash_volunteer' },
        { id: 'trashContactModal', class: 'trash_contact' },
        { id: 'trashYouthSportsModal', class: 'trash_youthsports' },
        { id: 'trashResidentModal', class: 'trash_resident' }
    ];

    modals.forEach(modalInfo => {
        const modal = document.getElementById(modalInfo.id);
        const modalContent = modal ? modal.querySelector('.trash_modal-content') : null;

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

    const closeButtons = document.querySelectorAll('.close_button');

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.trash_modal');
            const modalContent = modal.querySelector('.trash_modal-content');
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
                const modalContent = modal.querySelector('.trash_modal-content');
                modalContent.classList.add('fade-out');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300); // Match the duration of the fade-out animation
            }
        });
    });
});


// Function for Add People (Add Resident, Staffs, SK)
document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modals = [
        { id: 'addPeopleModal', class: 'add_people' },
    ];

    modals.forEach(modalInfo => {
        const modal = document.getElementById(modalInfo.id);
        const modalContent = modal ? modal.querySelector('.add_people-modal-content') : null;

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

    const closeButtons = document.querySelectorAll('.close_button');

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.add_people-modal');
            const modalContent = modal.querySelector('.add_people-modal-content');
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
                const modalContent = modal.querySelector('.add_people-modal-content');
                modalContent.classList.add('fade-out');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300); // Match the duration of the fade-out animation
            }
        });
    });
});


// Function for Idea Submission Modal & Volunteer Sign Ups (Read Idea, Read Reason)
document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality for Idea Submission and Volunteer Sign Ups
    const modals = [
        { id: 'ideaModal', class: 'read_idea-button' },
        { id: 'volunteerModal', class: 'read_reason-button' },
        { id: 'contactModal', class: 'read_contact-button' }
    ];

    modals.forEach(modalInfo => {
        const modal = document.getElementById(modalInfo.id);
        const modalContent = modal ? modal.querySelector('.modal-content') : null;

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

    const closeButtons = document.querySelectorAll('.close-button');
    const cancelButtons = document.querySelectorAll('.cancelDelete');

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            const modalContent = modal.querySelector('.modal-content');
            modal.classList.add('fade-out');
            modalContent.classList.add('fade-out');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300); // Match the duration of the fade-out animation
        });
    });

    cancelButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            const modalContent = modal.querySelector('.modal-content');
            modal.classList.add('fade-out');
            modalContent.classList.add('slide-out');
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
                const modalContent = modal.querySelector('.modal-content');
                modalContent.classList.add('fade-out');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300); // Match the duration of the fade-out animation
            }
        });
    });
});

// * Current Date & Time for Dashboard
document.addEventListener("DOMContentLoaded", () => {
    const currentDateElement = document.getElementById("currentDate");
    const currentTimeElement = document.getElementById("currentTime");
    const today = new Date();

    // Options for date formatting
    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, // To use 12-hour format (AM/PM)
    };

    // Set the date and time dynamically
    currentDateElement.textContent = today.toLocaleDateString("en-US", dateOptions);
    currentTimeElement.textContent = today.toLocaleTimeString("en-US", timeOptions);

    // Update the time every second
    setInterval(() => {
        const newTime = new Date();
        currentTimeElement.textContent = newTime.toLocaleTimeString("en-US", timeOptions);
    }, 1000); // Updates every 1 second
});


// * General Function for Dropdown Menu ---------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.action-menu-button').forEach(menuButton => {
        const menuContent = menuButton.nextElementSibling;

        menuButton.addEventListener('click', function (event) {
            menuContent.classList.toggle('show'); // Toggle visibility
            event.stopPropagation(); // Prevent click propagation
        });

        // Close the dropdown when clicking outside
        document.addEventListener('click', function (event) {
            if (!menuButton.contains(event.target) && !menuContent.contains(event.target)) {
                menuContent.classList.remove('show');
            }
        });
    });
});

// * General Function Modal for Edit, Delete, Submit ---------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modals = [
        { id: 'editActionModal', class: 'edit_button-action'},
        { id: 'deleteActionModal', class: 'delete_button-action'}
    ];

    modals.forEach(modalInfo => {
        const modal = document.getElementById(modalInfo.id);
        const modalContent = modal ? modal.querySelector('.modal_content-action') : null;

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

    const closeButtons = document.querySelectorAll('.close-button');
    const cancelButtons = document.querySelectorAll('.cancelButton');

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            const modalContent = modal.querySelector('.modal_content-action');
            modal.classList.add('fade-out');
            modalContent.classList.add('fade-out');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300); // Match the duration of the fade-out animation
        });
    });

    cancelButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            const modalContent = modal.querySelector('.modal_content-action');
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
                const modalContent = modal.querySelector('.modal_content-action');
                modalContent.classList.add('fade-out');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300); // Match the duration of the fade-out animation
            }
        });
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
        const modalContent = modal ? modal.querySelector('.modal_content-action') : null;

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
            const modalContent = modal.querySelector('.modal_content-action');
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
            const modalContent = modal.querySelector('.modal_content-action');
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
                const modalContent = modal.querySelector('.modal_content-action');
                modalContent.classList.add('fade-out');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300); // Match fade-out animation duration
            }
        });
    });
});