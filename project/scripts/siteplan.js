document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript is running.');

    // Event listener for form validation on submit
    const contactForm = document.forms['contactForm'];
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            if (!validateForm(contactForm)) {
                event.preventDefault();
            }
        });
    }

    const infoForm = document.forms['infoForm'];
    if (infoForm) {
        infoForm.addEventListener('submit', function (event) {
            if (!validateForm(infoForm)) {
                event.preventDefault();
            }
        });
    }

    // Form validation function
    function validateForm(form) {
        let isValid = true;
        const name = form['name'] ? form['name'].value.trim() : null;
        const email = form['email'].value.trim();
        const subject = form['subject'] ? form['subject'].value.trim() : null;
        const message = form['message'] ? form['message'].value.trim() : null;

        if ((name !== null && name === '') || email === '' || (message !== null && message === '') || (subject !== null && subject === '')) {
            alert('All fields are required.');
            isValid = false;
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        return isValid;
    }

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Adding event listener for navigation highlighting
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Adding dynamic content button functionality
    const dynamicContentButton = document.getElementById('dynamic-content-button');
    const dynamicContent = document.getElementById('dynamic-content');
    const financialTips = [
        "Start investing early to take advantage of compounding.",
        "Always have an emergency fund for unexpected expenses.",
        "Track your expenses to understand your spending habits.",
        "Review your financial goals regularly and adjust as needed.",
        "Automate your savings to make it easier to save consistently.",
        "Avoid high-interest debt whenever possible."
    ];

    dynamicContentButton.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * financialTips.length);
        dynamicContent.textContent = financialTips[randomIndex];
    });
});
