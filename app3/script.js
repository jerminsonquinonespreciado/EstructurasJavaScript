let meses = new Map([

[1,"Enero"],
[2,"Febrero"],
[3,"Marzo"],
[4,"Abril"],
[5,"Mayo"],
[6,"Junio"],
[7,"Julio"],
[8,"Agosto"],
[9,"Septiembre"],
[10,"Octubre"],
[11,"Noviembre"],
[12,"Diciembre"]

]);

function buscarMes(){

    if(meses.has(5)){

        alert(meses.get(5));

    }

}

function agregarVerano(){

    meses.set("Verano",["Junio","Julio","Agosto"]);

    alert("Verano agregado.");

}

function imprimirMapa(){

    let texto="";

    meses.forEach(function(valor,clave){

        texto += clave + " : " + valor + "<br>";

    });

    document.getElementById("resultado").innerHTML = texto;

}