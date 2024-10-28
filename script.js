// script.js

// Función para detectar si el elemento está en la vista
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animación al hacer scroll
function animateSectionsOnScroll() {
    const sections = document.querySelectorAll('.apartado');
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.style.opacity = 1;
        }
    });
}

// Escuchar el evento de scroll
window.addEventListener('scroll', animateSectionsOnScroll);



/* plantilla

// script.js

// Cargar datos de los jugadores desde el archivo JSON*/

fetch('jugadores.json')
    .then(response => response.json())
    .then(data => {
        const tablaJugadores = document.getElementById('tabla-jugadores');

        // Función para mostrar jugadores en la tabla
        function mostrarJugadores(jugadores) {
            tablaJugadores.innerHTML = '';
            jugadores.forEach(jugador => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${jugador.nombre}</td>
                    <td>${jugador.posicion}</td>
                    <td>${jugador.edad}</td>
                    <td>${jugador.valor_mercado.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</td>
                    <td>${jugador.valor_fifa}</td>
                `;
                tablaJugadores.appendChild(fila);
            });
        }

        mostrarJugadores(data);

        // Función de ordenación
        function ordenarJugadores(propiedad) {
            const jugadoresOrdenados = data.sort((a, b) => a[propiedad] - b[propiedad]);
            mostrarJugadores(jugadoresOrdenados);
        }

        function ordenarJugadores(criterio, ascendente) {
            jugadores.sort((a, b) => {
                if (ascendente) {
                    return a[criterio] - b[criterio];
                } else {
                    return b[criterio] - a[criterio];
                }
            });
            cargarJugadores();
        }
        

        // Event listeners para los botones de ordenación
        document.getElementById('ordenar-edad').addEventListener('click', () => {
            ordenarJugadores('edad');
        });

        document.getElementById('ordenar-valor-mercado').addEventListener('click', () => {
            ordenarJugadores('valor_mercado');
        });

        document.getElementById('ordenar-valor-fifa').addEventListener('click', () => {
            ordenarJugadores('valor_fifa');
        });
    })
    .catch(error => console.error('Error cargando los datos:', error));

    const jugadores = [
        { nombre: "Yazawa", posicion: "DC", edad: 29, valorMercado: 190000000, valorFIFA: 92, nacionalidad: "esp.jpg", goles: 12, asistencias: 5 },
        { nombre: "Mario", posicion: "MCO", edad: 27, valorMercado: 140000000, valorFIFA: 90, nacionalidad: "esp.jpg", goles: 4, asistencias: 9 },
        { nombre: "Mister", posicion: "DFC", edad: 32, valorMercado: 50000000, valorFIFA: 89, nacionalidad: "esp.jpg", goles: 0, asistencias: 0 },
        { nombre: "Hugo", posicion: "DFC", edad: 30, valorMercado: 40000000, valorFIFA: 88, nacionalidad: "eng.png", goles: 0, asistencias: 0 },
        { nombre: "Vehí", posicion: "POR", edad: 29, valorMercado: 35000000, valorFIFA: 88, nacionalidad: "esp.jpg", goles: 0, asistencias: 1 },
        { nombre: "Stark", posicion: "MD", edad: 25, valorMercado: 110000000, valorFIFA: 87, nacionalidad: "esp.jpg", goles: 1, asistencias: 2 },
        { nombre: "Joanet", posicion: "MC", edad: 26, valorMercado: 70000000, valorFIFA: 87, nacionalidad: "usa.png", goles: 0, asistencias: 1 },
        { nombre: "Bustos", posicion: "MC", edad: 33, valorMercado: 30000000, valorFIFA: 87, nacionalidad: "esp.jpg", goles: 1, asistencias: 1 },
        { nombre: "Pablo", posicion: "DFC", edad: 31, valorMercado: 25000000, valorFIFA: 86, nacionalidad: "esp.jpg", goles: 0, asistencias: 0 },
        { nombre: "Alain", posicion: "MI", edad: 27, valorMercado: 50000000, valorFIFA: 85, nacionalidad: "fra.png", goles: 0, asistencias: 1 },
        { nombre: "Riviere", posicion: "MC", edad: 27, valorMercado: 50000000, valorFIFA: 85, nacionalidad: "ita.png", goles: 1, asistencias: 0 },
        { nombre: "Martawis", posicion: "DC", edad: 24, valorMercado: 60000000, valorFIFA: 84, nacionalidad: "esp.jpg", goles: 8, asistencias: 2 },
        { nombre: "Ale", posicion: "DC", edad: 23, valorMercado: 24000000, valorFIFA: 82, nacionalidad: "esp.jpg", goles: 1, asistencias: 0 },
        { nombre: "Nike", posicion: "MCO", edad: 19, valorMercado: 60000000, valorFIFA: 81, nacionalidad: "esp.jpg", goles: 2, asistencias: 3 },
        { nombre: "Chalex", posicion: "MC", edad: 24, valorMercado: 18000000, valorFIFA: 81, nacionalidad: "fra.png", goles: 2, asistencias: 0 },
        { nombre: "Raigo", posicion: "MC", edad: 28, valorMercado: 12000000, valorFIFA: 80, nacionalidad: "esp.jpg", goles: 0, asistencias: 0 },
        { nombre: "Walter", posicion: "DFC", edad: 30, valorMercado: 6000000, valorFIFA: 80, nacionalidad: "per.jpeg", goles: 0, asistencias: 0 },
        { nombre: "Berni", posicion: "DFC", edad: 38, valorMercado: 800000, valorFIFA: 79, nacionalidad: "eng.png", goles: 0, asistencias: 0 },
        { nombre: "Armando", posicion: "MD", edad: 27, valorMercado: 7000000, valorFIFA: 78, nacionalidad: "esp.jpg", goles: 0, asistencias: 0 },
        { nombre: "Etarky", posicion: "DFC", edad: 25, valorMercado: 6000000, valorFIFA: 77, nacionalidad: "and.jpg", goles: 0, asistencias: 1 },
        { nombre: "Palusa", posicion: "DFC", edad: 22, valorMercado: 7000000, valorFIFA: 73, cedido: true, nacionalidad: "esp.jpg", goles: 0, asistencias: 0 },
        { nombre: "Krazer", posicion: "POR", edad: 25, valorMercado: 5300000, valorFIFA: 75, nacionalidad: "ger.png", goles: 0, asistencias: 0 },
        { nombre: "Yazy", posicion: "DC", edad: 16, valorMercado: 20000000, valorFIFA: 72, nacionalidad: "esp.jpg", goles: 1, asistencias: 2 }
    ];
    

    

// Función para cargar los jugadores en la tabla
function cargarJugadores() {
    const playerContainer = document.getElementById("playerContainer");
    playerContainer.innerHTML = ""; // Limpiar tabla antes de cargar

    jugadores.forEach(jugador => {
        const playerCard = document.createElement("div");
        playerCard.classList.add("player-card");
        playerCard.style.backgroundImage = `url(${jugador.nacionalidad})`; // Añadir la imagen de fondo
        playerCard.style.backgroundSize = "cover"; // Hacer que la imagen cubra el bloque
        playerCard.style.backgroundPosition = "center"; // Centrar la imagen

        playerCard.innerHTML = `
            <h3>${jugador.nombre}</h3>
            <p>Posición: ${jugador.posicion}</p>
            <p>Edad: ${jugador.edad} años</p>
            <p>Valor de Mercado: $${jugador.valorMercado.toLocaleString()}</p>
            <p>Valor FIFA: ${jugador.valorFIFA}</p>
           
        `;
        playerContainer.appendChild(playerCard);
    });
}

jugadores.forEach(jugador => {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");

    // Aplica fondo y opacidad en un div separado
    const backgroundDiv = document.createElement("div");
    backgroundDiv.classList.add("background");

    const nombreClass = jugador.nombre === "Joanet" ? "highlighted-name" : "";

    // Configura la imagen de fondo según la nacionalidad
    if (jugador.nombre === "Joanet") {
        backgroundDiv.style.backgroundImage = "url('alemania.png')";
        playerCard.classList.add("texto-claro"); // Joanet tendrá texto blanco
    } else if (jugador.nombre === "Hugo") {
        backgroundDiv.style.backgroundImage = "url('eng.png')";
    } else {
        backgroundDiv.style.backgroundImage = "url('esp.jpg')";
    }

    // Contenido de la tarjeta
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");
    contentDiv.innerHTML = `
        <h3>${jugador.nombre}</h3>
        <p>Posición: ${jugador.posicion}</p>
        <p>Edad: ${jugador.edad} años</p>
        <p>Valor de Mercado: $${jugador.valorMercado.toLocaleString()}</p>
        <p>Valor FIFA: ${jugador.valorFIFA}</p>
    `;

    playerCard.appendChild(backgroundDiv);
    playerCard.appendChild(contentDiv);
    playerContainer.appendChild(playerCard);
});

// Función para ordenar jugadores
function ordenarJugadores(criterio, ascendente) {
    jugadores.sort((a, b) => {
        if (a[criterio] < b[criterio]) return ascendente ? -1 : 1;
        if (a[criterio] > b[criterio]) return ascendente ? 1 : -1;
        return 0;
    });
    cargarJugadores(jugadores);
}

// Función para filtrar jugadores por nombre
function filtrarJugadores(nombre) {
    const jugadores = jugadores.filter(jugador => jugador.nombre.toLowerCase().includes(nombre.toLowerCase()));
    cargarJugadores(jugadores);
}

// Agregar eventos a los botones
document.getElementById("sortAsc").addEventListener("click", () => {
    const criterio = document.getElementById("sortBy").value;
    ordenarJugadores(criterio, true);
});

document.getElementById("sortDesc").addEventListener("click", () => {
    const criterio = document.getElementById("sortBy").value;
    ordenarJugadores(criterio, false);
});

// Agregar evento al filtro de nombre
document.getElementById("filterInput").addEventListener("input", (event) => {
    const nombre = event.target.value;
    filtrarJugadores(nombre);
});

// Cargar jugadores al iniciar
cargarJugadores();


document.getElementById("filterBy").addEventListener("change", () => {
    const criterio = document.getElementById("filterBy").value;
    const ascendente = document.getElementById("sortAsc").checked;
    ordenarJugadores(criterio, ascendente);
});

function ordenarJugadores(criterio, ascendente) {
    jugadores.sort((a, b) => {
        if (a[criterio] < b[criterio]) return ascendente ? -1 : 1;
        if (a[criterio] > b[criterio]) return ascendente ? 1 : -1;
        return 0;
    });
    cargarJugadores(jugadores);
}

// Agregar evento de cambio para el filtro
filtro.addEventListener("change", mostrarEstadisticas);


function mostrarEstadisticas() {
    const jugadorStatsDiv = document.getElementById("jugadorStats");
    jugadorStatsDiv.innerHTML = '';

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Encabezados de la tabla
    thead.innerHTML = `<tr>
        <th>Jugador</th>
        <th>Goles</th>
        <th>Asistencias</th>
    </tr>`;
    
    table.appendChild(thead);

    jugadores.forEach(jugador => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${jugador.nombre}</td>
                        <td>${jugador.goles}</td>
                        <td>${jugador.asistencias}</td>`;
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    jugadorStatsDiv.appendChild(table);
}

// Filtro y ordenación
document.getElementById("filterInput").addEventListener("input", (event) => {
    const filterValue = event.target.value.toLowerCase();
    const filteredJugadores = jugadores.filter(jugador => jugador.nombre.toLowerCase().includes(filterValue));
    mostrarJugadoresFiltrados(filteredJugadores);
});

document.getElementById("sortSelect").addEventListener("change", (event) => {
    const sortValue = event.target.value;
    const sortedJugadores = [...jugadores].sort((a, b) => b[sortValue] - a[sortValue]);
    mostrarJugadoresFiltrados(sortedJugadores);
});

// Datos de los jugadores (con goles y asistencias)
const jugadoresga = [
    { nombre: "Yazawa", goles: 12, asistencias: 5 },
    { nombre: "Mario", goles: 4, asistencias: 9 },
    { nombre: "Martawis", goles: 8, asistencias: 2 },
    { nombre: "Bustos", goles: 1, asistencias: 1 },
    { nombre: "Nike", goles: 2, asistencias: 3 },
    { nombre: "Stark", goles: 1, asistencias: 2 },
    { nombre: "Mister", goles: 0, asistencias: 0 },
    { nombre: "Alain", goles: 0, asistencias: 1 },
    { nombre: "Riviere", goles: 1, asistencias: 0 },
    { nombre: "Hugo", goles: 0, asistencias: 0 },
    { nombre: "Yazy", goles: 1, asistencias: 2 },
    { nombre: "Chalex", goles: 2, asistencias: 0 },
    { nombre: "Vehí", goles: 0, asistencias: 0 },
    { nombre: "Ale", goles: 1, asistencias: 0 },
    { nombre: "Raigo", goles: 0, asistencias: 0 },
    { nombre: "Walter", goles: 0, asistencias: 0 },
    { nombre: "Berni", goles: 0, asistencias: 0 },
    { nombre: "Armando", goles: 0, asistencias: 0 },
    { nombre: "Etarky", goles: 0, asistencias: 1 },
    { nombre: "Krazer", goles: 0, asistencias: 0 }
];

// Mostrar estadísticas iniciales
function mostrarEstadisticas() {
    const jugadorStatsDiv = document.getElementById("jugadorStats");
    jugadorStatsDiv.innerHTML = '';

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Encabezados de la tabla
    thead.innerHTML = `<tr>
        <th>Jugador</th>
        <th>Goles</th>
        <th>Asistencias</th>
    </tr>`;
    
    table.appendChild(thead);

    jugadores.forEach(jugador => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${jugador.nombre}</td>
                        <td>${jugador.goles}</td>
                        <td>${jugador.asistencias}</td>`;
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    jugadorStatsDiv.appendChild(table);
}

// Filtro y ordenación
document.getElementById("filterInput").addEventListener("input", (event) => {
    const filterValue = event.target.value.toLowerCase();
    const filteredJugadores = jugadores.filter(jugador => jugador.nombre.toLowerCase().includes(filterValue));
    mostrarJugadoresFiltrados(filteredJugadores);
});

document.getElementById("sortSelect").addEventListener("change", (event) => {
    const sortValue = event.target.value;
    const sortedJugadores = [...jugadores].sort((a, b) => b[sortValue] - a[sortValue]);
    mostrarJugadoresFiltrados(sortedJugadores);
});

function mostrarJugadoresFiltrados(jugadoresFiltrados) {
    const jugadorStatsDiv = document.getElementById("jugadorStats");
    jugadorStatsDiv.innerHTML = '';

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Encabezados de la tabla
    thead.innerHTML = `<tr>
        <th>Jugador</th>
        <th>Goles</th>
        <th>Asistencias</th>
    </tr>`;
    
    table.appendChild(thead);

    jugadoresFiltrados.forEach(jugador => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${jugador.nombre}</td>
                        <td>${jugador.goles}</td>
                        <td>${jugador.asistencias}</td>`;
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    jugadorStatsDiv.appendChild(table);
}

// Inicializar la lista al cargar la página
mostrarEstadisticas();
