document.addEventListener('DOMContentLoaded', function() {
    cargarMenu(); // Cargar el menú cuando el documento esté listo
    verificarLogin(); // Verificar el estado de login
});

function cargarMenu() {
    fetch('partials/menu.html')  // Cargar el archivo menu.html
        .then(response => response.text())  // Convertir la respuesta a texto
        .then(data => {
            document.getElementById('menu-container').innerHTML = data; // Insertar el contenido del menú
            configurarLogin();  // Configurar el botón de login
        })
        .catch(error => console.error('Error al cargar el menú:', error)); // Manejar errores
}

function configurarLogin() {
    const loginButton = document.getElementById('login-button');

    // Mostrar u ocultar el formulario de login cuando se haga clic en el botón
    loginButton.addEventListener('click', function() {
        const loginForm = document.getElementById('login-form');
        if (loginButton.textContent === 'Login') {
            loginForm.style.display = loginForm.style.display === 'block' ? 'none' : 'block';
        } else {
            logout();  // Llamar a logout si el botón dice "Cerrar sesión"
        }
    });
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar las credenciales
    if (username === 'kaiser' && password === 'eo9ka76L') {
        localStorage.setItem('loggedIn', 'true');  // Guardar el estado de login en localStorage
        alert('Login exitoso');
        window.location.reload();  // Recargar la página para actualizar el menú
    } else {
        alert('Credenciales incorrectas');
    }
}

function verificarLogin() {
    const isLoggedIn = localStorage.getItem('loggedIn');
    const adminMenu = document.getElementById('admin-menu');
    const loginButton = document.getElementById('login-button');

    // Actualizar el estado del menú según si el usuario está logeado o no
    if (isLoggedIn === 'true') {
        adminMenu.style.display = 'block';  // Mostrar el menú de administración
        loginButton.textContent = 'Cerrar sesión';  // Cambiar el texto del botón a "Cerrar sesión"
    } else {
        adminMenu.style.display = 'none';  // Ocultar el menú de administración
        loginButton.textContent = 'Login';  // Cambiar el texto del botón a "Login"
    }
}

function logout() {
    localStorage.removeItem('loggedIn');  // Eliminar el estado de login de localStorage
    alert('Sesión cerrada');
    window.location.reload();  // Recargar la página para reflejar el estado de logout
}
