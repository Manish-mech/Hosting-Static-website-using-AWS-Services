document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.querySelector('.sidebar');

    // Toggle the sidebar when the menu icon is clicked
    menuIcon.addEventListener('click', function () {
        sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
    });

    // Close the sidebar when a menu item is clicked
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            sidebar.style.left = '-250px';
        });
    });
});


