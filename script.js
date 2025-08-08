 document.addEventListener('DOMContentLoaded', function () {


   const form = document.getElementById('registration-form');

   form.addEventListener('submit', (e) => {
     e.preventDefault();

     const usernameInput = document.getElementById('username');
     const username = usernameInput.value.trim();
     const emailInput = document.getElementById('email');
     const email = emailInput.value.trim();
     const passwordInput = document.getElementById('password');
     const password = passwordInput.value.trim();
     const feedbackDiv = document.getElementById('form-feedback');


     let isValid = true
     let messages = []



     //   username validation
     if (username.length < 3) {
       messages.push('Username is too short');
       usernameInput.style.border = '2px solid red';
       isValid = false;
     } else {
       usernameInput.style.border = '2px solid green';
     }


     // email validation
     if (!email.includes('@') || !email.includes('.')) {
       emailInput.style.border = '2px solid red';
       messages.push('Please enter valid email');
       isValid = false;
     } else {
       emailInput.style.border = '2px solid green';
     }

     // password validation

     if (password.length < 8) {
       messages.push("Password must be 8 or more characters.");
       passwordInput.style.border = '2px solid red';
       isValid = false
     } else {
       passwordInput.style.border = '2px solid green';
     }

     feedbackDiv.style.display = 'block';
     if (isValid) {
       feedbackDiv.textContent = 'Registration successful';
       feedbackDiv.style.color = '#28a745';
     } else {
       feedbackDiv.innerHTML = messages.join('<br>');
       feedbackDiv.style.color = '#dc3545';
     }



   })

 })