document.addEventListener('DOMContentLoaded', function () {
    const jugadores = document.querySelectorAll('.tabla-jugadores td');
    let jugadorSeleccionado = null;

    // Cargar jugadores desde el archivo JSON
    fetch('https://abadie10.github.io/smash64/jugadores.json')
        .then(response => response.json())
        .then(datosJugadores => {
            // Agregar eventos de clic a cada celda de la tabla
            jugadores.forEach(jugador => {
                jugador.addEventListener('click', function () {
                    // Remover la clase del jugador previamente seleccionado
                    if (jugadorSeleccionado) {
                        jugadorSeleccionado.classList.remove('jugador-seleccionado');
                    }

                    // Marcar el jugador actual como seleccionado
                    jugadorSeleccionado = jugador;
                    jugadorSeleccionado.classList.add('jugador-seleccionado');

                    // Mostrar la información del jugador seleccionado
                    mostrarInfoJugador(jugador.id, datosJugadores);
                });
            });
        })
        .catch(error => console.error('Error al cargar los jugadores:', error));

    // Función para mostrar la información del jugador
function mostrarInfoJugador(jugadorId, datosJugadores) {
    const infoJugador = datosJugadores.find(jugador => jugador.nombre.toLowerCase() === jugadorId);
    if (infoJugador) {
        document.getElementById('info-jugador').innerHTML = `
            <table class="tabla-info-jugador">
                <tr>
                    <td rowspan="5">
                        <img src="${infoJugador.imagen}" alt="${infoJugador.main}" class="personaje-img">
                    </td>
                    <td><strong>Nombre:</strong> ${infoJugador.nombre}</td>
                </tr>
                <tr>
                    <td><strong>Main:</strong> ${infoJugador.main}</td>
                </tr>
                <tr>
                    <td><strong>Mejores victorias:</strong> ${infoJugador.mejores_victorias.join(', ')}</td>
                </tr>
                <tr>
                    <td><strong>Mejor resultado en torneo:</strong> ${infoJugador.mejor_resultado.join(', ')}</td>
                </tr>
                <tr>
                    <td><strong>Otros Personajes:</strong> ${infoJugador.otros.join(', ')}</td>
                </tr>
                <tr>
                    <td colspan="2">
                        <a href="${infoJugador.startgg}" target="_blank">
                            <img src="images/startgg-icon.png" alt="Start.gg" width="30px">
                        </a>
                    </td>
                </tr>
            </table>
        `;
    }
}


