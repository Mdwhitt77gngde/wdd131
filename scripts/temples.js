document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('copyright').textContent =
    'Copyright ©️' + new Date().getFullYear() + ' - Last modified: ' + document.lastModified;

    const navMenu = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
});
