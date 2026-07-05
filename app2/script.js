let libros = new Set([
    "1984",
    "Clean Code",
    "El Principito",
    "Don Quijote",
    "Hábitos Atómicos"
]);

function agregarLibro(){

    let libro = prompt("Nombre del libro");

    if(libro){

        libros.add(libro);

    }

}

function eliminarLibro(){

    let libro = prompt("Libro a eliminar");

    if(libros.delete(libro)){

        alert("Libro eliminado.");

    }else{

        alert("El libro no existe.");

    }

}

function imprimirSet(){

    let texto="";

    libros.forEach(function(libro){

        texto += libro + "<br>";

    });

    document.getElementById("resultado").innerHTML = texto;

}