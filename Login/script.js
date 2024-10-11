// script.js
const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you would typically make an API call to authenticate the user
    // For demonstration purposes, we'll just log the credentials to the console
    console.log(`Email: ${email}, Password: ${password}`);
});