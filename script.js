const form = document.getElementById('infoForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    clearErrors();

    // Validate form inputs
    let isValid = true;

    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();

    if (fullName === '') {
        showError('fullNameError', 'Full Name is required');
        isValid = false;
    }

    if (email === '') {
        showError('emailError', 'Email Address is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid Email Address');
        isValid = false;
    }

    if (phone === '') {
        showError('phoneError', 'Phone Number is required');
        isValid = false;
    } else if (!isValidPhone(phone)) {
        showError('phoneError', 'Please enter a valid 10-digit Phone Number');
        isValid = false;
    }

    // If form is valid, proceed with submission
    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

function clearErrors() {
    document.querySelectorAll('.error').forEach(error => {
        error.textContent = '';
    });
}

function isValidEmail(email) {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isValidPhone(phone) {
    // Basic 10-digit phone number validation
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
}
