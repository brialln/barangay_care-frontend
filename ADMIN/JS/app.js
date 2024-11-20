/*
    * This file contains the General Javascript functions for the ADMIN.
*/

// ----------------------------------- Function for Barangay ID Requests -----------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const barangayIDTabs = document.querySelectorAll('#barangayIDRequests .tab_btn');
    const barangayIDContent = document.querySelectorAll('#barangayIDRequests .request');

    barangayIDTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            barangayIDTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            barangayIDContent.forEach(content => content.classList.remove('active'));
            barangayIDContent[index].classList.add('active');
        });
    });
});

// ----------------------------------- Function for Barangay Clearance Requests -----------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const barangayClearanceTabs = document.querySelectorAll('#barangayClearanceRequests .tab_btn');
    const barangayClearanceContent = document.querySelectorAll('#barangayClearanceRequests .request');

    barangayClearanceTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            barangayClearanceTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            barangayClearanceContent.forEach(content => content.classList.remove('active'));
            barangayClearanceContent[index].classList.add('active');
        });
    });
});

// ----------------------------------- Function for Barangay Indigency Requests -----------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const barangayIndigencyTabs = document.querySelectorAll('#barangayIndigencyRequests .tab_btn');
    const barangayIndigencyContent = document.querySelectorAll('#barangayIndigencyRequests .request');

    barangayIndigencyTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            barangayIndigencyTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            barangayIndigencyContent.forEach(content => content.classList.remove('active'));
            barangayIndigencyContent[index].classList.add('active');
        });
    });
});

// ----------------------------------- Function for Barangay Disaster Responses -----------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const barangayDisasterTabs = document.querySelectorAll('#barangayDisasterRequests .tab_btn');
    const barangayDisasterContent = document.querySelectorAll('#barangayDisasterRequests .request');

    barangayDisasterTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            barangayDisasterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            barangayDisasterContent.forEach(content => content.classList.remove('active'));
            barangayDisasterContent[index].classList.add('active');
        });
    });
});

// ----------------------------------- Function for Barangay Justice Responses -----------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const barangayJusticeTabs = document.querySelectorAll('#barangayJusticeRequests .tab_btn');
    const barangayJusticeContent = document.querySelectorAll('#barangayJusticeRequests .request');

    barangayJusticeTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            barangayJusticeTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            barangayJusticeContent.forEach(content => content.classList.remove('active'));
            barangayJusticeContent[index].classList.add('active');
        });
    });
});

// ----------------------------------- Function for Barangay Idea Submissions -----------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const barangayIdeaTabs = document.querySelectorAll('#barangayIdeaSubmissions .tab_btn');
    const barangayIdeaContent = document.querySelectorAll('#barangayIdeaSubmissions .request');

    barangayIdeaTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            barangayIdeaTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            barangayIdeaContent.forEach(content => content.classList.remove('active'));
            barangayIdeaContent[index].classList.add('active');
        });
    });
});


// ----------------------------------- Function for Barangay Volunteer Sign Ups -----------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const barangayVolunteerTabs = document.querySelectorAll('#barangayVolunteerSignUps .tab_btn');
    const barangayVolunteerContent = document.querySelectorAll('#barangayVolunteerSignUps .request');

    barangayVolunteerTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            barangayVolunteerTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            barangayVolunteerContent.forEach(content => content.classList.remove('active'));
            barangayVolunteerContent[index].classList.add('active');
        });
    });
});

// ----------------------------------- Function for Barangay Contact Submissions -----------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const barangayContactTabs = document.querySelectorAll('#barangayContactSubmissions .tab_btn');
    const barangayContactContent = document.querySelectorAll('#barangayContactSubmissions .request');

    barangayContactTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            barangayContactTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            barangayContactContent.forEach(content => content.classList.remove('active'));
            barangayContactContent[index].classList.add('active');
        });
    });
});

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
        { id: 'remarksModal', class: 'remarks_button' },
        { id: 'editModal', class: 'edit_button-m' },
        { id: 'deleteEmergencyModal', class: 'delete_emergency-m' }
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
        { id: 'trashContactModal', class: 'trash_contact' }
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