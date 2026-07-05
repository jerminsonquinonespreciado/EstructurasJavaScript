let meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"]
]);

function mostrarMap() {

    let html = "";

    meses.forEach((valor, clave) => {

        html += `<p><strong>${clave}</strong> → ${valor}</p>`;

    });

    document.getElementById("resultado").innerHTML = html;

}

function buscarMes() {

    let numero = Number(prompt("Número del mes"));

    if (meses.has(numero)) {

        alert(meses.get(numero));

    } else {

        alert("No existe ese mes.");

    }

}

function agregarMes() {

    let clave = Number(prompt("Número"));

    let valor = prompt("Nombre del mes");

    if (valor) {

        meses.set(clave, valor);

        mostrarMap();

    }

}

window.onload = mostrarMap;