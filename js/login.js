document.addEventListener('DOMContentLoaded', function() {
    cargarMenu();
    verificarLogin();
});

function cargarMenu() {
    // Cargar el menú desde el archivo menu.html en todas las páginas
    fetch('partials/menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
            configurarLogin();
        });
}

function configurarLogin() {
    const loginButton = document.getElementById('login-button');

    // Mostrar u ocultar el formulario de login cuando se haga clic en el botón
    loginButton.addEventListener('click', function() {
        const loginForm = document.getElementById('login-form');
        if (loginButton.textContent === 'Login') {
            loginForm.style.display = loginForm.style.display === 'block' ? 'none' : 'block';
        } else {
            logout();
        }
    });
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar credenciales
    if (username === 'kaiser' && password === 'eo9ka76L') {
        localStorage.setItem('loggedIn', 'true');
        alert('Login exitoso');
        window.location.reload(); // Recargar la página para actualizar el menú
    } else {
        alert('Credenciales incorrectas');
    }
}

function verificarLogin() {
    const isLoggedIn = localStorage.getItem('loggedIn');
    const adminMenu = document.getElementById('admin-menu');
    const loginButton = document.getElementById('login-button');

    // Actualizar el menú según el estado de login
    if (isLoggedIn === 'true') {
        adminMenu.style.display = 'block';
        loginButton.textContent = 'Logout'; // Cambia a "Logout"
    } else {
        adminMenu.style.display = 'none';
        loginButton.textContent = 'Login'; // Mantiene "Login" si no está logueado
    }
}

function logout() {
    localStorage.removeItem('loggedIn');
    alert('Sesión cerrada');
    window.location.reload(); // Recargar la página para reflejar el estado de logout
}
