window.onload = function() {
    cargarMenu();
    verificarLogin();
};

function cargarMenu() {
    fetch('/partials/menu.html')
        .then(response => response.text())
        .then(data => {
            console.log("Contenedor encontrado:", document.getElementById('menu-container'));
            document.getElementById('menu-container').innerHTML = data;
            configurarLogin();
        })
        .catch(error => console.error('Error al cargar el menú:', error));
}

function configurarLogin() {
    const loginButton = document.getElementById('login-button');

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
    const loginButton = document.getElementById('login-button');

    if (isLoggedIn === 'true') {
        adminMenu.style.display = 'block';
        loginButton.textContent = 'Cerrar sesión';
    } else {
        adminMenu.style.display = 'none';
        loginButton.textContent = 'Login';
    }
}

function logout() {
    localStorage.removeItem('loggedIn');
    alert('Sesión cerrada');
    window.location.reload();
}
