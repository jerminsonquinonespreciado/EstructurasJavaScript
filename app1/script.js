let animales = [
    "Perro",
    "Gato",
    "Caballo",
    "León",
    "Conejo"
];

function agregarInicio(){

    let nuevo = prompt("Ingrese un animal");

    if(nuevo){

        animales.unshift(nuevo);

    }

}

function agregarFinal(){

    let nuevo = prompt("Ingrese un animal");

    if(nuevo){

        animales.push(nuevo);

    }

}

function eliminarTercero(){

    if(animales.length >=3){

        animales.splice(2,1);

    }else{

        alert("No existe un tercer elemento.");

    }

}

function imprimirArray(){

    document.getElementById("resultado").innerHTML =
    animales.join("<br>");

}