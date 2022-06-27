/*
    -Los eventos son la manera que tenemos en JS de controlar las acciones de los usuarios, y definir el comportamiento de la pagina cuando se produzacan.
    -Con JS es posible definir que sucede cuando se p`roduce un evento, por ejemplo, cuando se rtealiza un click en cierto elemento o se icerta un texto en determinado campo
    -JS permite agregar una funcion a cada uno de los eventos. Asi ante cada evento, JS asigna y ejecuta la funcion asociada al mismo.
    -Js nos permite ESCUCHAR EVENTOS sobre ELEMENTOS SELECCIONADOS
    -A esta escucha se le llama EVENT LISTENER.
*/

// addEventListener
const boton = document.getElementById("miBoton1");
boton.addEventListener("click", () => {
    alert("HOLA, SOY EL BOTÓN 1")
});


// onclick
const boton2 = document.getElementById("miBoton2");
boton2.onclick = () => { boton2.innerHTML = "SOY EL BOTÓN 2" };