function togglePassword() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
}
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
}

document.getElementById('facebook-login').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecionando para login com Facebook...');
});

document.getElementById('google-login').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecionando para login com Google...');
});

document.getElementById('apple-login').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecionando para login com Apple...');
});