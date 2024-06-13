document.addEventListener('DOMContentLoaded', function () {
    const pages = document.querySelectorAll('.page');
    const navButtons = document.querySelectorAll('.navButton');

    // Function to show the target page
    function showPage(pageId) {
        pages.forEach(page => {
            page.style.display = page.id === pageId ? 'block' : 'none';
        });
    }

    // Show the initial page (beranda)
    showPage('beranda');

    // Event listener for navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetPage = this.getAttribute('data-target');
            showPage(targetPage);
        });
    });

    // Event listener for "Get Started" button
    document.getElementById('getStarted').addEventListener('click', function () {
        showPage('menu');
    });
});
