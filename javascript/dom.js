// Que es el modelo de objetos del documento DOM y como funciona

/*
    EL modelo de objetos del documento (DOM) es una estructuara de objetos generadas por el navegador, la cual representa la pagina html actual.
    Con javascript la empleamos para acceder y modificar de forma dinamica elementos de la interfaz.

    Como funciona?

    La estructura de un documento HTML son las etiquetas.
    En el modelo de objetos de documentos DOM, cada etiqueta html es un objeto, al que podemos llamar nodo.
    Las etiquetas anidadas son llamadas "nodos hijos" de la etiqueta "nodo padre" que las contiene.




    */

//BODY 

const nodoPrincipal = document.body; //document es el objeto documento, elobjeto mas grande al que podes acceder en un HTML
console.log(nodoPrincipal);

//GET ELEMENT BY ID

const nodoDiv = document.getElementById("miDiv"); //SIEMPRE VA A DEVOLVER UN ELEMENTO SOLO
console.log("DIV", nodoDiv);

//GET ELEMNTS BY CLASS NAME

const nodosSpan = document.getElementsByClassName("miTexto");
console.log("NODOS", nodosSpan);

//GET ELEMENTS BY TAG NAME

const nodosH1 = document.getElementsByClassName("h1");
console.log("NODOS", nodosH1);

console.log("TODOS LOS SPANS")

for (let span of nodosSpan) {
    console.log(span);
}

/////////////CAMBIAR CONTENIDO DE HTML CON JAVASCRIPT

let nombre = prompt("Ingrese su nombre");
const h1 = document.getElementsByTagName("h1")[0];
h1.innerText = `Bienvenido/a, ${nombre}`; //SOLO FUNCIONA CON BAPTIS

const div = document.getElementById("miDiv");
div.innerHTML = `<b>esto es negrita</b></br>
                <i>esto es italica</i>`;