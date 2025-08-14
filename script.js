// Contact form validation and feedback
const contactForm = document.getElementById('contactForm');
const formAlert = document.getElementById('formAlert');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            formAlert.innerHTML = '<div class="alert alert-danger">Please fill in all fields.</div>';
            return;
        }
        // Simulate successful submission
        formAlert.innerHTML = '<div class="alert alert-success">Thank you for contacting us! We will get back to you soon.</div>';
        contactForm.reset();
    });
}
