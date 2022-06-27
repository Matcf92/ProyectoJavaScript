//Un slimulador que pide usuarioy la guarda en un array, expendedor de entradas y de snacks

class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
const usuario1 = new Usuario("Mathias", "Fagundez");

const usuarios = [usuario1];

/*function agregarUsuario() {
    let nombre = prompt("Ingrese el nombre del usuario");
    let apellido = prompt("Ingrese el apellido del usuario");
    let usuario = new Usuario(nombre, apellido);
    usuarios.push(usuario);
    console.log("Usuarios Ingresados:")
    console.table(usuarios);
}
agregarUsuario();*/

function ingresarUsuario() {
let nuevo = document.getElementById("newUser").value;
    console.log(nuevo);
}

/////////  Agregando Eventos ///////

const boton1 = document.getElementById("btn1");
boton1.addEventListener("click", () => {
    alert("Imprimiendo entrada para: Dog Un viaje salvaje")
});

const boton2 = document.getElementById("btn2");
boton2.addEventListener("click", () => {
    alert("Imprimiendo entrada para: Doctor Strange")
});

const boton3 = document.getElementById("btn3");
boton3.addEventListener("click", () => {
    alert("Imprimiendo entrada para: Star Wars")
});



/*function saludar() {
    let seleccion1 = prompt("Hola! Bienvenido/a al cine! Seleccion que quieres hacer: 1 - Sacar entrada 2 - Elegir pop y bebida 3 - Salir");
    switch (seleccion1) {
        case "1":
            ticketCine();
            break;
        case "2":
            elegirSnacks();
        case "3":
            alert("Te esperamos nuevamente")
    }
}
saludar();
function ticketCine() {
    let ticket = prompt("Hola! Selecciona la película que deseas ver: 1 - Dog: Un viaje salvaje 2 - Doctor Strange 3 - Star Wars 4 - Salir");
    switch (ticket) {
        case "1":
            alert("Imprimiendo ticket para Dog: Un viaje salvaje. Que la disfrutes!");
            break;
        case "2":
            alert("Imprimiendo ticket para Doctor Strange. Que la disfrutes!");
            break;
        case "3":
            alert("Imprimiendo ticket para Star Wars. Que la disfrutes!");
            break;
        case "4":
            alert("Te esperamos nuevamente");
            break;
    }
}
function elegirSnacks() {
    let snacks = prompt("Hola! Selecciona tu bebida y tus snacks: 1 - Pop grande + Refresco grande 2 - Pop mediano + Refrersco mediano 3- Pop chico + refresco chico 4 - Salir");
    switch (snacks) {
        case "1":
            alert("Imprimiendo orden de Pop grande + Refresco grande");
            break;
        case "2":
            alert("Imprimiendo orden de Pop mediano + Refrersco mediano ");
            break;
        case "3":
            alert("Imprimiendo orden de Pop chico + refresco chico")
            break;
        case "4":
            alert("Gracias!")
    }
}*/