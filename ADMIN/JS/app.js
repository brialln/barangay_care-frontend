// GENERAL JS FUNCTION

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

// Function for Barangay ID Requests
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

// Function for Barangay Clearance Requests
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

// Function for Barangay Clearance Requests
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

// Function for Barangay Disaster Responses
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

// Function for Dropdown Sort and Filter
// Toggle dropdown visibility
function toggleDropdown(button) {
    const dropdownContent = button.nextElementSibling; // Target the next sibling .dropdown-content
    dropdownContent.classList.toggle('open'); // Toggle the 'open' class
}

// Change the button text based on selected option
function selectOption(checkbox, type) {
    const checkboxes = checkbox.closest('ul').querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = false);
    checkbox.checked = true;

    const selectedText = checkbox.nextElementSibling.innerText;

    if (type === 'priority') {
        const prioritySpan = document.querySelector('.priority-btn .selected-priority');
        prioritySpan.innerText = selectedText;
        prioritySpan.className = `selected-priority ${selectedText.toLowerCase()}`;
    } else if (type === 'filter') {
        const filterSpan = document.querySelector('.filter-btn .selected-filter');
        filterSpan.innerText = selectedText;
        filterSpan.className = `selected-filter ${selectedText.toLowerCase()}`;
    }

    checkbox.closest('ul').classList.remove('open');
}


// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.priority_dropdown-content, .dropdown-content');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target) && !dropdown.previousElementSibling.contains(event.target)) {
            dropdown.classList.remove('open');
        }
    });
});



// Get modal elements
const modal = document.getElementById('responseModal');
const respondButton = document.querySelector('.approve_button');
const closeButton = document.querySelector('.close_button');

// Open the modal when "Respond" button is clicked
respondButton.addEventListener('click', () => {
    modal.classList.add('show');
});

// Close the modal when the "x" button is clicked
closeButton.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});