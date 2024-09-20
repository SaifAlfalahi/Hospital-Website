document.addEventListener('DOMContentLoaded', function() {
    const firstNameInput = document.getElementById('firstname');
    const lastNameInput = document.getElementById('lastname');
    const dateOfBirthInput = document.getElementById('date');
    const phoneNumberInput = document.getElementById('phone');
    const experienceYearsInput = document.getElementById('number');
    const cvInput = document.getElementById('cv');
    const certificatesInput = document.getElementById('certificates');
    const profileImageInput = document.getElementById('profileImage');

    const nameRegex = /^[A-Za-z]+$/;

    // Validation for first name and last name fields
    firstNameInput.addEventListener('input', function() {
        validateInput(firstNameInput, nameRegex, 'Only alphabetic characters are allowed (e.g., John)');
    });

    lastNameInput.addEventListener('input', function() {
        validateInput(lastNameInput, nameRegex, 'Only alphabetic characters are allowed (e.g., Doe)');
    });

    // Phone number format (123)45-6789012
    phoneNumberInput.addEventListener('input', function() {
        const phoneRegex = /^\(\d{3}\)\d{2}-\d{7}$/;
        validateInput(phoneNumberInput, phoneRegex, 'Please enter a phone number in the format (123)45-6789012');
    });

    // Maximum experience years: 20, doesn't accept less than 0
    experienceYearsInput.addEventListener('input', function() {
        const maxExperienceYears = 20;
        if (experienceYearsInput.value < 0 || experienceYearsInput.value > maxExperienceYears) {
            experienceYearsInput.setCustomValidity(`Experience years should be between 0 and ${maxExperienceYears}`);
        } else {
            experienceYearsInput.setCustomValidity('');
        }
    });

    // Only accept PDF for CV
    cvInput.addEventListener('change', function() {
        validateFileType(cvInput, ['application/pdf'], 'Please select a PDF file for CV');
    });

    // Accept only PDF or PNG for certificates
    certificatesInput.addEventListener('change', function() {
        validateFileType(certificatesInput, ['application/pdf', 'image/png'], 'Please select a PDF or PNG file for certificates');
    });

    // Accept only images (PNG or JPG) for profile image
    profileImageInput.addEventListener('change', function() {
        validateFileType(profileImageInput, ['image/png', 'image/jpeg'], 'Please select a PNG or JPG image for profile');
    });

    // Function to validate input fields with regex and display tooltips
    function validateInput(inputField, regex, tooltipText) {
        if (!regex.test(inputField.value)) {
            inputField.setCustomValidity(tooltipText);
        } else {
            inputField.setCustomValidity('');
        }
    }

    // Function to validate file type
    function validateFileType(fileInput, allowedTypes, tooltipText) {
        const file = fileInput.files[0];
        if (file && !allowedTypes.includes(file.type)) {
            fileInput.setCustomValidity(tooltipText);
        } else {
            fileInput.setCustomValidity('');
        }
    }
});