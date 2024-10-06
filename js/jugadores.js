document.addEventListener('DOMContentLoaded', function () {
    const selector = document.getElementById('selector-jugador');
    const infoJugador = document.getElementById('info-jugador');

    // Cargar jugadores desde el archivo JSON
    fetch('https://abadie10.github.io/smash64/jugadores.json')
        .then(response => response.json())
        .then(jugadores => {
            jugadores.forEach(jugador => {
                const option = document.createElement('option');
                option.value = jugador.nombre;
                option.textContent = jugador.nombre;
                selector.appendChild(option);
            });

            // Mostrar datos al seleccionar un jugador
            selector.addEventListener('change', function () {
                const jugadorSeleccionado = jugadores.find(j => j.nombre === selector.value);
                if (jugadorSeleccionado) {
                    mostrarInfoJugador(jugadorSeleccionado);
                }
            });
        });

    // Función para mostrar la información del jugador
    function mostrarInfoJugador(jugador) {
        infoJugador.innerHTML = `
    <h2>${jugador.nombre}</h2>
    <img src="${jugador.imagen}" alt="${jugador.main}" class="personaje-img">
    <p><strong>Main:</strong> ${jugador.main}</p>
    <p><strong>Mejores victorias:</strong> ${jugador.mejores_victorias.join(', ')}</p>
    <p><strong>Mejores resultados en torneo:</strong> ${jugador.mejor_resultado.join(', ')}</p>
    <a href="${jugador.startgg}" target="_blank">
        <img src="https://abadie10.github.io/smash64/images/startgg.png" alt="Start.gg" width="30px">
    </a>
`;
        if (jugador.startgg) {
            cargarResultadosStartGG(jugador.startgg);
        }
    }

    // Cargar resultados de Start.gg (esto requiere un API Key)
    function cargarResultadosStartGG(urlStartGG) {
        // Aquí implementarás la lógica para conectarte con la API de Start.gg
        // usando su API y mostrar resultados del perfil del jugador.
        console.log("Resultados de Start.gg de:", urlStartGG);
    }
});
