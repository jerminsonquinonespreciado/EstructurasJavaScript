let frutas = [

"Manzana",
"Banano",
"Pera",
"Uva",
"Mango"

];

let conjunto = null;
let mapa = null;

function convertirSet(){

    conjunto = new Set(frutas);

    alert("Array convertido a Set.");

}

function convertirMap(){

    if(conjunto === null){

        alert("Primero convierta el Array a Set.");

        return;

    }

    mapa = new Map();

    let contador = 1;

    conjunto.forEach(function(fruta){

        mapa.set(contador,fruta);

        contador++;

    });

    alert("Set convertido a Map.");

}

function imprimirMap(){

    if(mapa === null){

        alert("Primero convierta a Map.");

        return;

    }

    let texto="";

    mapa.forEach(function(valor,clave){

        texto += clave + " → " + valor + "<br>";

    });

    document.getElementById("resultado").innerHTML = texto;

}