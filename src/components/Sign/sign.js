
export function toggleLog() {
    // Variables
let signupButton = document.getElementById('signup-button'),
loginButton = document.getElementById('login-button'),
userForms = document.getElementById('user_options-forms')

if (signupButton) {
    // Add event listener to the "Sign Up" button
    signupButton.addEventListener('click', () => {
    userForms.classList.remove('login-click')
    userForms.classList.add('signup-click')
    }, false)
}


if (loginButton) {
    // Add event listener to the "Login" button
    loginButton.addEventListener('click', () => {
    userForms.classList.remove('signup-click')
    userForms.classList.add('login-click')
    }, false)
}
}