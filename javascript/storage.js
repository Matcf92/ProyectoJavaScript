//El OBJETO "Storage" (API de almacenamiento web) permite almacenar datos de manera local sin la necesidad de realizar niguna conexion con el servidor.
//De esta manera, cada cliente puede almacenar informacion de la aplicacion.
//El navegador nos ofrece dos tipos de storage: "localStorage" y "sessionStorage".

///////////////////// OBJETO localStorage ///////////////////////////////

//SetItem
/*localStorage.setItem("almacenamiento", "GALLETITAS"); //El metodo "setItem" es un metodo y ese metodo recibe 2 parametros ("Key: string" y "value: string") El valor se alamcenara como string

localStorage.setItem("autos", "chevrolet");

let edad = Number(prompt("Ingrese su edad:"))
localStorage.setItem("edadUsuario", edad);


let edadUsuario = localStorage.getItem("edadUsuario");

const nodo = document.createElement("div");
nodo.innerHTML = `<h1>${edadUsuario}</h1>`;

document.body.appendChild(nodo);*/

///////////////////// OBJETO sessionSTorage /////////////////////////////

//SetItem

sessionStorage.setItem("nombreDeUsuario", "lucas.kripper");
sessionStorage.setItem("color", "rojo");
sessionStorage.setItem("figura", "cuadrado");


//GetItem
alert(sessionStorage.getItem("nombreDeUsuario"));

//Recorrer Storage
for (let i = 0; i < sessionStorage.length; i++) {
  let key = sessionStorage.key(i);
  console.log(sessionStorage.getItem(key));
}