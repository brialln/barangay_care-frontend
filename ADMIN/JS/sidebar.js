(function() {
    document.addEventListener('DOMContentLoaded', () => {
        loadSidebar();
    });

    function loadSidebar() {
        const sidebarContainer = document.getElementById('sidebar-container');

        if (sidebarContainer) {
            fetch('sidebar.html')
                .then((response) => response.text())
                .then((html) => {
                    sidebarContainer.innerHTML = html;
                    attachSidebarFunctionality(); // Initialize sidebar JS after loading
                    highlightActivePage();        // Highlight the current page
                })
                .catch((error) => console.error('Error loading sidebar:', error));
        }
    }

    function highlightActivePage() {
        const currentPage = window.location.pathname.split('/').pop().split('.html')[0];
        const items = document.querySelectorAll('#sidebar li[data-page]');
    
        items.forEach(item => {
            if (item.getAttribute('data-page') === currentPage) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    function attachSidebarFunctionality() {
        const toggleButton = document.getElementById('toggle-btn');
        const sidebar = document.getElementById('sidebar');

        function toggleSidebar() {
            sidebar.classList.toggle('close');
            toggleButton.classList.toggle('rotate');
            closeAllSubMenus();
        }

        function toggleSubMenu(button) {
            // Check if the sidebar is collapsed
            if (sidebar.classList.contains('close')) {
                // Expand the sidebar and toggle the button rotation
                sidebar.classList.remove('close');
                toggleButton.classList.remove('rotate');
            }
        
            // Toggle the current sub-menu
            if (!button.nextElementSibling.classList.contains('show')) {
                closeAllSubMenus(); // Close other sub-menus
            }
            button.nextElementSibling.classList.toggle('show');
            button.classList.toggle('rotate');
        }
        

        function closeAllSubMenus() {
            Array.from(sidebar.getElementsByClassName('show')).forEach((ul) => {
                ul.classList.remove('show');
                ul.previousElementSibling.classList.remove('rotate');
            });
        }

        if (toggleButton) toggleButton.addEventListener('click', toggleSidebar);

        Array.from(document.getElementsByClassName('dropdown-btn')).forEach((button) => {
            button.addEventListener('click', function () {
                toggleSubMenu(this);
            });
        });
    }
})();