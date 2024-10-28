// Datos de las estadísticas de los jugadores
const jugadoresEstadisticas = [
    { nombre: "Yazawa", goles: 12, asistencias: 5, puntosFantasy: 134 },
    { nombre: "Martawis", goles: 8, asistencias: 2, puntosFantasy: 115 },
    { nombre: "Mario", goles: 4, asistencias: 9, puntosFantasy: 113 },
    { nombre: "Nike", goles: 2, asistencias: 3, puntosFantasy: 75 },
    { nombre: "Chalex", goles: 2, asistencias: 0, puntosFantasy: 35 },
    { nombre: "Bustos", goles: 1, asistencias: 1, puntosFantasy: 75 },
    { nombre: "Stark", goles: 1, asistencias: 2, puntosFantasy: 68 },
    { nombre: "Riviere", goles: 1, asistencias: 0, puntosFantasy: 51 },
    { nombre: "Yazy", goles: 1, asistencias: 2, puntosFantasy: 41 },
    { nombre: "Ale", goles: 1, asistencias: 0, puntosFantasy: 29 },
    { nombre: "Mister", goles: 0, asistencias: 0, puntosFantasy: 65 },
    { nombre: "Pablo", goles: 0, asistencias: 1, puntosFantasy: 64 }, // Actualizado Pablo
    { nombre: "Alain", goles: 0, asistencias: 1, puntosFantasy: 51 }, // Actualizado Alain
    { nombre: "Hugo", goles: 0, asistencias: 0, puntosFantasy: 46 }, // Actualizado Hugo
    { nombre: "Vehí", goles: 0, asistencias: 0, puntosFantasy: 30 }, // Actualizado Vehí
    { nombre: "Krazer", goles: 0, asistencias: 0, puntosFantasy: 29 }, // Actualizado Krazer
    { nombre: "Etarky", goles: 0, asistencias: 1, puntosFantasy: 14 }, // Actualizado Etarky
    { nombre: "Armando", goles: 0, asistencias: 0, puntosFantasy: 13 }, // Actualizado Armando
    { nombre: "Raigo", goles: 0, asistencias: 0, puntosFantasy: 12 }, // Actualizado Raigo
    { nombre: "Berni", goles: 0, asistencias: 0, puntosFantasy: 9 },  // Actualizado Berni
    { nombre: "Joanet", goles: 0, asistencias: 0, puntosFantasy: 8 },  // Actualizado Joanet
    { nombre: "Walter", goles: 0, asistencias: 0, puntosFantasy: 3 },  // Actualizado Walter
    { nombre: "Berni", goles: 0, asistencias: 0, puntosFantasy: 9 },  // Actualizado Berni
    { nombre: "Joanet", goles: 0, asistencias: 0, puntosFantasy: 8 }  // Actualizado Joanet
    
];

// Función para mostrar las estadísticas de los jugadores
function mostrarEstadisticas() {
    const statsDiv = document.getElementById("jugadorStats");
    statsDiv.innerHTML = ""; // Limpiar el contenido previo

    jugadoresEstadisticas.forEach(jugador => {
        const jugadorDiv = document.createElement("div");
        jugadorDiv.className = "jugador";

        jugadorDiv.innerHTML = `
            <strong>${jugador.nombre}</strong><br>
            Goles: ${jugador.goles}<br>
            Asistencias: ${jugador.asistencias}<br>
            Puntos Fantasy: ${jugador.puntosFantasy}
        `;

        statsDiv.appendChild(jugadorDiv);
    });
}

// Función para filtrar y ordenar estadísticas
function filtrarYOrdenar() {
    const filterInput = document.getElementById("filterInput").value.toLowerCase();
    const sortSelect = document.getElementById("sortSelect").value;

    let filteredJugadores = jugadoresEstadisticas.filter(jugador => 
        jugador.nombre.toLowerCase().includes(filterInput)
    );

    // Ordenar según la opción seleccionada
    if (sortSelect === "goles") {
        filteredJugadores.sort((a, b) => b.goles - a.goles);
    } else if (sortSelect === "asistencias") {
        filteredJugadores.sort((a, b) => b.asistencias - a.asistencias);
    } else if (sortSelect === "puntosFantasy") {
        filteredJugadores.sort((a, b) => b.puntosFantasy - a.puntosFantasy);
    }

    // Mostrar estadísticas
    const statsDiv = document.getElementById("jugadorStats");
    statsDiv.innerHTML = ""; // Limpiar el contenido previo

    filteredJugadores.forEach(jugador => {
        const jugadorDiv = document.createElement("div");
        jugadorDiv.className = "jugador";

        jugadorDiv.innerHTML = `
            <strong>${jugador.nombre}</strong><br>
            Goles: ${jugador.goles}<br>
            Asistencias: ${jugador.asistencias}<br>
            Puntos Fantasy: ${jugador.puntosFantasy}
        `;

        statsDiv.appendChild(jugadorDiv);
    });
}

// Event listeners para filtrar y ordenar
document.getElementById("filterInput").addEventListener("input", filtrarYOrdenar);
document.getElementById("sortSelect").addEventListener("change", filtrarYOrdenar);

// Llamar a la función para mostrar las estadísticas al cargar la página
mostrarEstadisticas();
