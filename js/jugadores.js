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
                <h2>${infoJugador.nombre}</h2>
                <img src="${infoJugador.imagen}" alt="${infoJugador.main}" class="personaje-img">
                <p><strong>Main:</strong> ${infoJugador.main}</p>
                <p><strong>Mejores victorias:</strong> ${infoJugador.mejores_victorias.join(', ')}</p>
                <p><strong>Mejor resultado en torneo:</strong> ${infoJugador.mejor_resultado.join(', ')}</p>
            `;
        }
    }
});
