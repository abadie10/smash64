function verificarLogin() {
    const isLoggedIn = localStorage.getItem('loggedIn');
    const adminMenu = document.getElementById('admin-menu');
    const loginButton = document.getElementById('login-button');

    // Actualizar el menú según el estado de login
    if (isLoggedIn === 'true') {
        adminMenu.style.display = 'block';
        loginButton.textContent = 'Cerrar sesión'; // Cambia a "Cerrar sesión"
    } else {
        adminMenu.style.display = 'none';
        loginButton.textContent = 'Login'; // Mantiene "Login" si no está logueado
    }
}
