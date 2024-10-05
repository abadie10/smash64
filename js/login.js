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
    // Mostrar u ocultar el formulario de login cuando se haga clic en el botón
    document.getElementById('login-button').addEventListener('click', function() {
        const loginForm = document.getElementById('login-form');
        loginForm.style.display = loginForm.style.display === 'block' ? 'none' : 'block';
    });
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'kaiser' && password === 'eo9ka76L') {
        localStorage.setItem('loggedIn', 'true');
        alert('Login exitoso');
        window.location.reload();
    } else {
        alert('Credenciales incorrectas');
    }
}

function verificarLogin() {
    const isLoggedIn = localStorage.getItem('loggedIn');
    const adminMenu = document.getElementById('admin-menu');

    if (isLoggedIn === 'true') {
        adminMenu.style.display = 'block';
        document.getElementById('login-button').textContent = 'Cerrar sesión';
        document.getElementById('login-button').addEventListener('click', logout);
    } else {
        adminMenu.style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('loggedIn');
    alert('Sesión cerrada');
    window.location.reload();
}
