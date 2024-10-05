document.addEventListener('DOMContentLoaded', function() {
    verificarLogin();

    // Mostrar el formulario de login cuando se haga clic en el botón
    document.getElementById('login-button').addEventListener('click', function() {
        const loginForm = document.getElementById('login-form');
        loginForm.style.display = loginForm.style.display === 'block' ? 'none' :
