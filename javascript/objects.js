//creando un objeto
//sirve para en una sola variable agrupar varias caracteristicas
//Los objetos tienen metodos y propiedades

/*const carta = {
    nombre: "Charizard",
    numero: 6,
    tipo: "Fuego"
}
console.log(carta);
console.log(carta.nombre) //Mostrar en consola una caracteristica del objeto

carta.tipo="Agua"
console.log(carta) //modificar las propìedadeds de una objeto*/

//------------------------------------CONSTRUCTORES----------------------------------------

//En JS, el constructor de un objeto es una funcion que usamos para crear un nuevo objeto cada vez que sea necesario.
//Con esta funcion constructora podemos inicializar las propiedades del objeto al momento de ser instanciado con "new".
//Se tiene que usar la palabra reservada this para que se enteinda como funcion constructora

/*function Persona(nombre,edad,calle){
    this.nombre=nombre;
    this.edad=edad;
    this.calle=calle;
}
const persona1 = new Persona("Mathias", 30, "Matto Grosso 5661");
const persona2 = new Persona("Rut", 30, "Matto Grosso 5661");

console.log(persona1);
console.log(persona2);*/

//Cree una funcion que le permita construir un objeto
//para modelar un empleado con:
//nombre y apellido

/*function Empleado(nombre,apellido){
    this.nombre= nombre;
    this.apellido= apellido;
}
const nombre=prompt("Ingrese su nombre");     //se puede usar const o let
const apellido=prompt("Ingrese su apellido");

const empleado = new Empleado(nombre, apellido);


console.log(empleado);*/

//Ejemplo de funcion constructora con una funcion adentro del objeto

function Producto(id, nombre, precio) {
    this.id=id;
    this.nombre=nombre;
    this.precio=precio;
    this.getIva = function(){
        const iva = this.precio*0.2;
        return iva;
    }
    this.getPrecioFinal = function(){
        return this.precio+this.getIva();
    }
}
const producto = new Producto(0,"carne",400);
console.log("Iva:", producto.getIva());
console.log("Precio final:", producto.getPrecioFinal());

// Operador In