document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('copyright').textContent=
    'Copyright ©️' + new Date().getFullYear() + ' - Last modified: ' + document.lastModified;

    const navMenu = document.querySelector('nav');
    const hamburger = document.createElement('button');
    hamburger.innerHTML = '&#9776;';

    document.querySelector('header').appendChild(hamburger);

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    }); 
});
