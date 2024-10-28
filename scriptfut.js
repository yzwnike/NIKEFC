// Lista de jugadores
const jugadoresDraft = [
    // NIKE FC
    { nombre: "Yazawa", posiciones: ["DC", "EI"], valorfifa: 92 },
    { nombre: "Mario", posiciones: ["MCO", "MC"], valorfifa: 90 },
    { nombre: "Mister", posiciones: ["DFC"], valorfifa: 89 },
    { nombre: "Hugo", posiciones: ["DFC", "LD"], valorfifa: 88 },
    { nombre: "Vehí", posiciones: ["POR"], valorfifa: 88 },
    { nombre: "Stark", posiciones: ["MD", "MC"], valorfifa: 87 },
    { nombre: "Joanet", posiciones: ["MC", "MCO"], valorfifa: 87 },
    { nombre: "Bustos", posiciones: ["MC", "MCD"], valorfifa: 87 },
    { nombre: "Pablo", posiciones: ["DFC"], valorfifa: 86 },
    { nombre: "Alain", posiciones: ["MI", "EI"], valorfifa: 85 },
    { nombre: "Riviere", posiciones: ["MC", "MCO"], valorfifa: 85 },
    { nombre: "Martawis", posiciones: ["DC"], valorfifa: 84 },
    { nombre: "Ale", posiciones: ["DC"], valorfifa: 82 },
    { nombre: "Nike", posiciones: ["MCO", "MC"], valorfifa: 81 },
    { nombre: "Chalex", posiciones: ["MC", "MCO"], valorfifa: 81 },
    { nombre: "Raigo", posiciones: ["MC", "MCD"], valorfifa: 80 },
    { nombre: "Walter", posiciones: ["DFC"], valorfifa: 80 },
    { nombre: "Berni", posiciones: ["DFC", "LI"], valorfifa: 79 },
    { nombre: "Armando", posiciones: ["MD", "LD"], valorfifa: 78 },
    { nombre: "Etarky", posiciones: ["DFC", "LI"], valorfifa: 77 },
    { nombre: "Krazer", posiciones: ["POR"], valorfifa: 75 },
    { nombre: "Yazy", posiciones: ["DC", "EI"], valorfifa: 72 },

    // ADIDAS FC
    { nombre: "Jan", posiciones: ["POR"], valorfifa: 86 },
    { nombre: "García", posiciones: ["POR"], valorfifa: 79 },
    { nombre: "Peidró", posiciones: ["LD"], valorfifa: 85 },
    { nombre: "Ferrer", posiciones: ["DFC"], valorfifa: 84 },
    { nombre: "Mateo", posiciones: ["DFC"], valorfifa: 83 },
    { nombre: "Yuchang", posiciones: ["DFC"], valorfifa: 79 },
    { nombre: "Venezuela", posiciones: ["DFC", "LD"], valorfifa: 71 },
    { nombre: "Ivan", posiciones: ["LI"], valorfifa: 84 },
    { nombre: "Vega", posiciones: ["MC"], valorfifa: 83 },
    { nombre: "Viko", posiciones: ["MC"], valorfifa: 85 },
    { nombre: "Fan", posiciones: ["MC", "MI"], valorfifa: 86 },
    { nombre: "Aznar", posiciones: ["MD", "ED"], valorfifa: 86 },
    { nombre: "Manu", posiciones: ["MI", "MC"], valorfifa: 87 },
    { nombre: "Jan", posiciones: ["MCO", "DC"], valorfifa: 89 },
    { nombre: "Sabina", posiciones: ["DC"], valorfifa: 90 },
    { nombre: "Giye", posiciones: ["DC"], valorfifa: 83 },

    // PUMA FC
    { nombre: "Kød", posiciones: ["DC"], valorfifa: 82 },
    { nombre: "Fernando", posiciones: ["DC"], valorfifa: 81 },
    { nombre: "Marin", posiciones: ["MCO"], valorfifa: 81 },
    { nombre: "Armando M.", posiciones: ["MCD", "MC"], valorfifa: 80 },
    { nombre: "Yusi", posiciones: ["MC", "MCD"], valorfifa: 79 },
    { nombre: "Pino", posiciones: ["LD", "MD"], valorfifa: 79 },
    { nombre: "Fran", posiciones: ["MC", "MCD"], valorfifa: 79 },
    { nombre: "Ramungut", posiciones: ["LI", "MI"], valorfifa: 78 },
    { nombre: "Josep", posiciones: ["MC", "MCO"], valorfifa: 78 },
    { nombre: "Albesa", posiciones: ["DFC", "LI"], valorfifa: 78 },
    { nombre: "Camello", posiciones: ["MCD", "MC"], valorfifa: 77 },
    { nombre: "Arribas", posiciones: ["MC", "MD"], valorfifa: 77 },
    { nombre: "Adriow", posiciones: ["POR"], valorfifa: 77 },
    { nombre: "Potpot", posiciones: ["MCO", "DC"], valorfifa: 78 },
    { nombre: "Márquez", posiciones: ["DFC", "LD"], valorfifa: 76 },
    { nombre: "Albert", posiciones: ["DFC", "LI"], valorfifa: 74 },

    // KAPPA FC
    { nombre: "Denis", posiciones: ["POR"], valorfifa: 76 },
    { nombre: "Frasqui", posiciones: ["DFC", "LD"], valorfifa: 73 },
    { nombre: "Plasencia", posiciones: ["DFC", "MCD"], valorfifa: 78 },
    { nombre: "Palusa", posiciones: ["DFC"], valorfifa: 73 },
    { nombre: "Cruañas", posiciones: ["LD", "LI"], valorfifa: 74 },
    { nombre: "Santi", posiciones: ["LD"], valorfifa: 77 },
    { nombre: "Thomas", posiciones: ["LI"], valorfifa: 77 },
    { nombre: "Manel", posiciones: ["MC", "MCD"], valorfifa: 74 },
    { nombre: "Follama", posiciones: ["MC", "MCD"], valorfifa: 75 },
    { nombre: "Perma", posiciones: ["ED", "MD"], valorfifa: 79 },
    { nombre: "Fontcuberta", posiciones: ["MC"], valorfifa: 77 },
    { nombre: "Galisteo", posiciones: ["MC", "MCO"], valorfifa: 78 },
    { nombre: "Pedrito", posiciones: ["EI", "MI"], valorfifa: 72 },
    { nombre: "Pol Cubo", posiciones: ["EI"], valorfifa: 78 },
    { nombre: "Martuki", posiciones: ["MCD"], valorfifa: 73 },
    { nombre: "Ukelele", posiciones: ["MCO", "MC"], valorfifa: 78 },
    { nombre: "Pot", posiciones: ["MCO", "DC"], valorfifa: 73 },
    { nombre: "Colgan", posiciones: ["DC"], valorfifa: 70 },
    { nombre: "Swit Eme", posiciones: ["DC"], valorfifa: 77 }
];


// Manejo de eventos
document.getElementById('confirmarAlineacion').addEventListener('click', function() {
    const alineacion = document.getElementById('alineacionSelect').value;
    mostrarFormacion(alineacion);
});

// Función para mostrar la alineación
function mostrarFormacion(alineacion) {
    const formacion = document.getElementById('formacion');
    formacion.innerHTML = ''; // Limpiar contenido anterior

    const posiciones = definirPosiciones(alineacion);
    const alineacionDiv = document.createElement('div');

    for (const pos of posiciones) {
        const bloque = document.createElement('div');
        bloque.classList.add('bloque', pos.clase);
        bloque.innerHTML = pos.nombre; // Mostrar nombre de la posición
        bloque.addEventListener('click', () => mostrarJugadores(pos.tipo, bloque));
        alineacionDiv.appendChild(bloque);
    }

    formacion.appendChild(alineacionDiv);
}

// Función para definir las posiciones según la alineación seleccionada
function definirPosiciones(alineacion) {
    switch (alineacion) {
        case '4-3-3 ofensivo':
            return [
                { tipo: 'POR', nombre: 'POR', clase: 'POR' },
                { tipo: 'DFC', nombre: 'LI', clase: 'LI' },
                { tipo: 'DFC', nombre: 'DFC', clase: 'DFC' },
                { tipo: 'DFC', nombre: 'DFC', clase: 'DFC' },
                { tipo: 'DFC', nombre: 'LD', clase: 'LD' },
                { tipo: 'MC', nombre: 'MC', clase: 'MC' },
                { tipo: 'MC', nombre: 'MC', clase: 'MC' },
                { tipo: 'MC', nombre: 'MCO', clase: 'MCO' },
                { tipo: 'DC', nombre: 'EI', clase: 'EI' },
                { tipo: 'DC', nombre: 'DC', clase: 'DC' },
                { tipo: 'DC', nombre: 'ED', clase: 'ED' }
            ];
        case '4-3-3 defensivo':
            return [
                { tipo: 'POR', nombre: 'POR', clase: 'POR' },
                { tipo: 'DFC', nombre: 'LI', clase: 'LI' },
                { tipo: 'DFC', nombre: 'DFC', clase: 'DFC' },
                { tipo: 'DFC', nombre: 'DFC', clase: 'DFC' },
                { tipo: 'DFC', nombre: 'LD', clase: 'LD' },
                { tipo: 'MC', nombre: 'MCD', clase: 'MCD' },
                { tipo: 'MC', nombre: 'MC', clase: 'MC' },
                { tipo: 'MC', nombre: 'MC', clase: 'MC' },
                { tipo: 'DC', nombre: 'EI', clase: 'EI' },
                { tipo: 'DC', nombre: 'DC', clase: 'DC' },
                { tipo: 'DC', nombre: 'ED', clase: 'ED' }
            ];    
        case '4-4-2':
            return [
                { tipo: 'POR', nombre: 'POR', clase: 'POR' },
                { tipo: 'DFC', nombre: 'LI', clase: 'LI' },
                { tipo: 'DFC', nombre: 'DFC', clase: 'DFC' },
                { tipo: 'DFC', nombre: 'DFC', clase: 'DFC' },
                { tipo: 'DFC', nombre: 'LD', clase: 'LD' },
                { tipo: 'MC', nombre: 'MI', clase: 'MI' },
                { tipo: 'MC', nombre: 'MC', clase: 'MC' },
                { tipo: 'MC', nombre: 'MC', clase: 'MC' },
                { tipo: 'MC', nombre: 'MD', clase: 'MD' },
                { tipo: 'DC', nombre: 'DC', clase: 'DC' },
                { tipo: 'DC', nombre: 'DC', clase: 'DC' }
            ];
        case '5-3-2':
            return [
                { tipo: 'POR', nombre: 'POR', clase: 'POR' },
                { tipo: 'DFC', nombre: 'LI', clase: 'LI' },
                { tipo: 'DFC', nombre: 'DFC', clase: 'DFC' },
                { tipo: 'DFC', nombre: 'DFC', clase: 'DFC' },
                { tipo: 'DFC', nombre: 'DFC', clase: 'DFC' },
                { tipo: 'DFC', nombre: 'LD', clase: 'LD' },
                { tipo: 'MC', nombre: 'MC', clase: 'MC' },
                { tipo: 'MC', nombre: 'MC', clase: 'MC' },
                { tipo: 'MC', nombre: 'MC', clase: 'MC' },
                { tipo: 'DC', nombre: 'DC', clase: 'DC' },
                { tipo: 'DC', nombre: 'DC', clase: 'DC' }
            ];
        case '3-5-2':
            return [
                { tipo: 'POR', nombre: 'POR', clase: 'POR' },
                { tipo: 'DFC', nombre: 'DFC', clase: 'DFC' },
                { tipo: 'DFC', nombre: 'DFC', clase: 'DFC' },
                { tipo: 'DFC', nombre: 'DFC', clase: 'DFC' },
                { tipo: 'MI', nombre: 'MI', clase: 'MI' },
                { tipo: 'MC', nombre: 'MC', clase: 'MC' },
                { tipo: 'MC', nombre: 'MC', clase: 'MC' },
                { tipo: 'MD', nombre: 'MD', clase: 'MD' },
                { tipo: 'DC', nombre: 'DC', clase: 'DC' },
                { tipo: 'DC', nombre: 'DC', clase: 'DC' }
            ];
        default:
            return [];
    }
}

// Función para mostrar los jugadores de una posición
function mostrarJugadores(tipo, bloque) {
    const jugadoresPosicion = jugadores.filter(j => j.posicion.includes(tipo)).slice(0, 3); // Obtener 3 jugadores
    const listaJugadores = document.createElement('div');

    jugadoresPosicion.forEach(j => {
        const jugadorDiv = document.createElement('div');
        jugadorDiv.innerHTML = j.nombre;
        jugadorDiv.addEventListener('click', () => seleccionarJugador(j.nombre, bloque));
        listaJugadores.appendChild(jugadorDiv);
    });

    bloque.innerHTML = ''; // Limpiar el bloque antes de mostrar jugadores
    bloque.appendChild(listaJugadores); // Mostrar la lista de jugadores
}

// Función para seleccionar el jugador
function seleccionarJugador(nombre, bloque) {
    bloque.innerHTML = nombre; // Poner el nombre del jugador seleccionado en el bloque
}