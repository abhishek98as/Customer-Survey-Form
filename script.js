function validateForm() {
    // Basic validation
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let dob = document.getElementById('dob').value;
    let country = document.getElementById('country').value;
    let male = document.getElementById('male').checked;
    let female = document.getElementById('female').checked;
    let profession = document.getElementById('profession').value;
    let email = document.getElementById('email').value;
   let mobile = document.getElementById('mobile').value;

    if (!firstName || !lastName || !dob || !country || (!male && !female) || !profession || !email || !mobile) {
        alert('Please fill all the required fields.');
        return false;
    }


    let isConfirmed = confirm('Submit the form with the entered data?');
    if (!isConfirmed) {
        return false;
    }
    resetForm();
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}
