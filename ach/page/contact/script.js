document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop actual form submission

    const name = document.querySelector('input[placeholder="Name"]').value.trim();
    const phone = document.querySelector('input[placeholder="+91"]').value.trim();
    const email = document.querySelector('input[placeholder="E-mail"]').value.trim();
    const company = document.querySelector('input[placeholder="Company Name"]').value.trim();
    const message = document.querySelector('textarea[placeholder="Message"]').value.trim();

    // Check required fields
    if (!name || !phone || !email || !company) {
        alert('Please fill in all required fields.');
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // All good
    alert('Form submitted successfully!');

    // Optional: Reset form after submit
    this.reset();
});