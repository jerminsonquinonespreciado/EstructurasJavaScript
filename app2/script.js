let libros = new Set([
    "Cien años de soledad",
    "El Principito",
    "Don Quijote"
]);

function mostrarLibros() {

    document.getElementById("resultado").innerHTML =
        Array.from(libros).join("<br>");

}

function agregarLibro() {

    let libro = prompt("Ingrese el nombre del libro");

    if (libro) {

        libros.add(libro);

        mostrarLibros();

    }

}

function eliminarLibro() {

    let libro = prompt("Libro a eliminar");

    if (libro) {

        libros.delete(libro);

        mostrarLibros();

    }

}

window.onload = mostrarLibros;