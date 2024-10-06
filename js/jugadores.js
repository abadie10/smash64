document.addEventListener('DOMContentLoaded', function () {
    const jugadores = document.querySelectorAll('.tabla-jugadores td');
    let jugadorSeleccionado = null;

    // Jugadores con información correspondiente
    const datosJugadores = {
        kaiser: {
            nombre: 'Kaiser',
            main: 'Capitán Falcon',
            victorias: ['Foca (4stock)', 'Marce', 'Roche'],
            resultado: ['4to', '2do (teams)'],
            imagen: 'https://ruta-a-la-imagen-de-capitan-falcon'
        },
        alls: {
            nombre: 'Alls',
            main: 'Kirby',
            victorias: ['Chapuz'],
            resultado: ['2to', '2do (teams)'],
            imagen: 'https://ruta-a-la-imagen-de-kirby'
        },
        // Añade más jugadores según sea necesario...
    };

    // Agrega eventos de clic a cada celda de la tabla
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
            mostrarInfoJugador(jugador.id);
        });
    });

    // Función para mostrar la información del jugador
    function mostrarInfoJugador(jugadorId) {
        const infoJugador = datosJugadores[jugadorId];
        if (infoJugador) {
            document.getElementById('info-jugador').innerHTML = `
                <h2>${infoJugador.nombre}</h2>
                <img src="${infoJugador.imagen}" alt="${infoJugador.main}" class="personaje-img">
                <p><strong>Main:</strong> ${infoJugador.main}</p>
                <p><strong>Mejores victorias:</strong> ${infoJugador.victorias.join(', ')}</p>
                <p><strong>Mejor resultado en torneo:</strong> ${infoJugador.resultado.join(', ')}</p>
            `;
        }
    }
});
