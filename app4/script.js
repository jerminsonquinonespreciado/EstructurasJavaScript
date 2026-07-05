const arreglo = ["Ana", "Luis", "Pedro", "Ana", "María"];

function mostrarArray() {

    document.getElementById("resultado").innerHTML = `
        <h3>📦 Array</h3>
        ${arreglo.join("<br>")}
    `;
}

function convertirSet() {

    const conjunto = new Set(arreglo);

    document.getElementById("resultado").innerHTML = `
        <h3>📚 Set (sin duplicados)</h3>
        ${Array.from(conjunto).join("<br>")}
    `;
}

function convertirMap() {

    const conjunto = new Set(arreglo);

    const mapa = new Map();

    let id = 1;

    conjunto.forEach(nombre => {

        mapa.set(id++, nombre);

    });

    let salida = "<h3>🗂 Map</h3>";

    mapa.forEach((valor, clave) => {

        salida += `<p><strong>${clave}</strong> → ${valor}</p>`;

    });

    document.getElementById("resultado").innerHTML = salida;
}

window.onload = mostrarArray;