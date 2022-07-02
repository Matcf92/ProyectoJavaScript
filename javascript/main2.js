let modal = document.getElementById("modal");
let ini = document.getElementById("ini")
let reg = document.getElementById("reg")

class Usuario {
    constructor(nombre, edad, email, password) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.password = password;
    }
}

cerrarModal = () => {
    modal.innerHTML = ""
    modal.classList.remove("modal")
}

crearUsuario = () => {
    modal.classList.add("modal")
    modal.innerHTML = `<div class="modal-container"><div class="modal-header"><h2>Crear Usuario</h2></div><div class="modal-body"><div><label for="nombre">Nombre</label><input type="text" id="nombre" placeholder="Nombre"></div><div><label for="edad">Edad</label><input type="number" id="edad" placeholder="Edad"></div><div><label for="email">Email</label><input type="email" id="email" placeholder="Email"></div><div><label for="contraseña">Constraseña</label><input type="password" id="password" placeholder="Contraseña"></div></div><div class="modal-footer"><button type="button" onclick="crearUsuario2()">Crear</button><button type="button" onclick="cerrarModal()">Cerrar</button></div></div>`
}

crearUsuario2 = () => {
    let nombre = document.querySelector("#nombre").value
    let edad = document.querySelector("#edad").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let usuario = new Usuario(nombre, edad, email, password)
    localStorage.setItem('usuario', JSON.stringify(usuario))
    Swal.fire(
        'Excelente!',
        'Usuario creado con éxito',
        'success'
    )
    cerrarModal()
}

iniciarSesion = () => {
    modal.classList.add("modal")
    modal.innerHTML = `<div class="modal-container"><div class="modal-header"><h2>Iniciar Sesión</h2></div><div class="modal-body"><div><label for="email">Email</label><input type="email" id="email" placeholder="Email"></div><div><label for="contraseña">Contraseña</label><input type="password" id="password" placeholder="Contraseña"></div></div><div class="modal-footer"><button type="button" onclick="iniciarSesion2()">Iniciar</button><button type="button" onclick="cerrarModal()">Cerrar</button></div></div>`
}

iniciarSesion2 = () => {
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let usuario = JSON.parse(localStorage.getItem('usuario'))
    if (usuario.email === email && usuario.password === password) {
        bienvenida()
    } else {
        Swal.fire(
            'Error',
            'Email o contraseña incorrecto',
            'error'
        )
    }
}

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