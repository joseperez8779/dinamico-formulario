const $btnSignIn = document.querySelector('.sign-in-btn'),
    $btnSignIn = document.querySelector('.sign-up-btn'),
    $btnSignIn = document.querySelector('.sign-in-btn'),
    $btnSignIn = document.querySelector('.sign-up-btn');
document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        SignIn.classList.toggle('active');
        SignUp.classList.toggle('active')
    }
})