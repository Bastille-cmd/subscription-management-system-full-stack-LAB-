document.addEventListener('DOMContentLoaded', function() {
    const subscriptionForm = document.getElementById('subscriptionForm');
    
    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', function(event) {
            let isValid = true;
            const phoneNumber = document.getElementById('phoneNumber').value;
            const age = document.getElementById('age').value;
            const monthlyIncome = document.getElementById('monthlyIncome').value;
            const plan = document.getElementById('plan').value;
            const cost = document.getElementById('cost').value;
            const startDate = document.getElementById('startDate').value;
            const endDate = document.getElementById('endDate').value;

            // Clear previous error messages
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(msg => msg.textContent = '');

            // Validate phone number
            if (!/^\d{10}$/.test(phoneNumber)) {
                document.getElementById('phoneError').textContent = 'Phone number must be 10 digits.';
                isValid = false;
            }

            // Validate age
            if (age < 18 || age > 100) {
                document.getElementById('ageError').textContent = 'Age must be between 18 and 100.';
                isValid = false;
            }

            // Validate monthly income
            if (monthlyIncome <= 0) {
                document.getElementById('incomeError').textContent = 'Monthly income must be greater than 0.';
                isValid = false;
            }

            // Validate plan selection
            if (plan === '') {
                document.getElementById('planError').textContent = 'Please select a subscription plan.';
                isValid = false;
            }

            // Validate cost
            if (cost <= 0) {
                document.getElementById('costError').textContent = 'Cost must be greater than 0.';
                isValid = false;
            }

            // Validate date selection
            if (new Date(startDate) >= new Date(endDate)) {
                document.getElementById('dateError').textContent = 'End date must be after start date.';
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
            }
        });
    }
});