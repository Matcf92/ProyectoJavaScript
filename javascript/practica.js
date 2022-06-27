/*let nombre = "mathias";
let apellido = "fagundez";
let nombreCompleto = nombre + " " + apellido;
console.log ("nombreCompleto", nombreCompleto);*/

/*let nombreIngresado = prompt ("Ingrese su nombre")
console.log (nombreIngresado)*/

/*let entrada = prompt("Ingrese letra")
let salida = entrada + " " + "Ingresada";
alert(salida);*/

/*let letra = prompt("Ingrese una letra entre A, B, C, D")
if (letra == "C") {
    alert("Acertaste")
} else {
    alert("No acertaste")
}*/

/*let letra = prompt("Ingrse una letras entre a b y c y d")
if ( letra == "d") {
    console.log ("le pegaste al dog")
} else {
    console.log("sos alto panchuso")
}*/

// if(condicion){
//     codigo a ejecutar si la condicion es verdadera
// } else{
//     codigo a ejecutar si la condicion es falsa
// }
//---------------------------------------------------------------------------
//Pide la edad y si es mayor de 19 indica que ya puede conduciir

//let edad = parseInt(prompt("Ingrese su edad"));

/*if (edad>=18) alert("Puede conducir") //Se puede poner sin llkaves porque es solo una linea de instruccion sino llaves
    else alert("No puedes conducir")*/

//edad>=18 ? alert("puede conducir") : alert("No puede conducir") // operador ternario manera abreviada

//--------------------------CONDICIONALES ANIDADOS------------------------------

let eleccion = prompt ("Ingrese como esta el tiempo: soleado, lluvioso, nevando o nublado")
    if (eleccion === "soleado"){
        alert("Sali afuera dracula")
    }
    else if (eleccion === "lluvioso"){
        alert("yo que vos hago unas torta fritas")
    }
    else if (eleccion === "nevando"){
        alert("quedate en la camita nomas")
    }
    else if (eleccion === "nublado"){
        alert("no queda otra que ir a laburar")
    }
    else {
        alert("Ingrese una opcion valida")
    }

//let numero = +(prompt("Un numero entre 0 y 1000 y luego divide entre 100"));
//let resultado = numero / 100;
//alert(resultado);
