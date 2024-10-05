window.onload = function() {
    cargarMenu();
};

function cargarMenu() {
    fetch('../partials/menu.html')
        .then(response => response.text())
        .then(data => {
            const menuContainer = document.getElementById('menu-container');
            if (menuContainer) {
                menuContainer.innerHTML = data;
                verificarLogin(); // Ejecutar después de cargar el menú
                configurarLogin(); // Configurar el login/logout
            }
        })
        .catch(error => console.error('Error al cargar el menú:', error));
}

function verificarLogin() {
    const loginButton = document.getElementById('login-button');
    const adminMenu = document.getElementById('admin-menu');

    // Verificar si los elementos del menú existen antes de acceder a ellos
    if (loginButton && adminMenu) {
        const isLoggedIn = localStorage.getItem('loggedIn');

        if (isLoggedIn === 'true') {
            adminMenu.style.display = 'block';
            loginButton.textContent = 'Cerrar sesión';
        } else {
            adminMenu.style.display = 'none';
            loginButton.textContent = 'Login';
        }
    } else {
        console.error('Elementos admin-menu o login-button no encontrados');
    }
}

function configurarLogin() {
    const loginButton = document.getElementById('login-button');

    // Solo configurar el botón de login si está disponible en el DOM
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            const loginForm = document.getElementById('login-form');
            if (loginButton.textContent === 'Login') {
                loginForm.style.display = loginForm.style.display === 'block' ? 'none' : 'block';
            } else {
                logout();
            }
        });
    }
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

function logout() {
    localStorage.removeItem('loggedIn');
    alert('Sesión cerrada');
    window.location.reload();
}
