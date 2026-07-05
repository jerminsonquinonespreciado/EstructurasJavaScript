let arreglo = ["Manzana", "Banano", "Pera"];

function imprimirArray() {
    document.getElementById("resultado").innerHTML = `
        <strong>Contenido del Array:</strong><br><br>
        ${arreglo.join(" | ")}
    `;
}

function agregarInicio() {
    const dato = prompt("Ingrese un elemento para agregar al inicio:");

    if (dato) {
        arreglo.unshift(dato);
        imprimirArray();
    }
}

function agregarFinal() {
    const dato = prompt("Ingrese un elemento para agregar al final:");

    if (dato) {
        arreglo.push(dato);
        imprimirArray();
    }
}

function eliminarTercero() {
    if (arreglo.length >= 3) {
        arreglo.splice(2, 1);
    } else {
        alert("El Array tiene menos de 3 elementos.");
    }

    imprimirArray();
}

window.onload = imprimirArray;