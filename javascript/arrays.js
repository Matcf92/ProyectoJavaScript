//Un arrays es un tipo de dato que sirve para almacenar valores en FORMA DE LISTA (es una coleccion de datos)
//Pueden ser numeros, strings, booleanos, objetos o hasta una lista de lsitas
//Los valores del arrays pueden ser distintos y es posible agregar o quitar elementos en todo momento


//array de numeros (estructura)

const misNums = [92,91,69,13,72];
console.log("Numeros",misNums);

//array de palabras (estructura)

const misPalabras = ["hola","nosefcasdf", "cualca"];
console.log("Palabras", misPalabras);

//array de booleanos (estructura)

const misBuleanos = [true,true,false,false,true];
console.log("Booleanos", misBuleanos);

//Como acceder a un array
//Los elementos dentro de un arrays tienen un indice que determina su posicion en el mismo
//Los elementos de un arrays tienen un indice que vasde el 0 (primer elemento del array) hasta el ultimo. Siempre arranca desde 0 el listado

const otrosNums = [1,2,"Accediendo Array",4,5];
console.log(otrosNums[2]);

//Recorrer un array (acceder a los elementos) ESTRUCTURA
//Decimos que estamos recorriendo un array cuando empleamos un BUCLE para acceder a cada elemento por separado
//Los array en JS son objetos iterables, lo que permite usar distintas estruct. para iterar sobre ellos

for(let i=0;i<=4;i++){
    console.log(misNums[i]);
}

///////////////////////////////ARRAY: Metodos y propiedades////////////////////////////////////

//Propiedad LENGTH

const millNums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
console.log("Longitud del array", millNums.length);
for(let i=0;i<millNums.length;i++){  //La condicion i<millNums (menor que millNums) debe ser estricta
    console.log(millNums[i]);
}

//Metodo PUSH
// Sirve para agregar un valor al final del array (Recibe parametros y modifica el array)

millNums.push(1000);
console.log("Numero agregado al final",millNums);

//metodo UNSHIFT
//Sirve para agregar un valor al principio del array (Recibe parametros y modifica el array)

millNums.unshift(-1000);
console.log("Numero agregado al principio",millNums);

////////////////Ejercicio////////////////////
//Pedir 5 numeros al usuario
//Guardarlo en un array
//Imprimir los numeros por consola

/*let numsUsuario=[];
for(let i=0;i<5;i++){
    let numeros = Number(prompt("Ingrese 5 numeros"));
    numsUsuario.push(numeros);
}
console.log("Numero Usuario:", numsUsuario);*/

//metodo POP
//Sirve para sacar el ultimo valor del array

millNums.pop();
console.log("Sacando el valor al final del array", millNums);

//metodo SHIFT
//Sirve para sacar el primero valor del array

millNums.shift();
console.log("Sacando valoral principio del array", millNums);

//////////////////////array de objetos////////////////////////

const pokemon = [  
    {
        id:1,
        nombre:"Charizard",
        numero:6,
    },
    {
        id:2,
        nombre:"Blastoise",
        numero:9,
    },
    {
        id:3,
        nombre:"Venusaur",
        numero:3,
    }
]
console.log(pokemon);

//metodo SPLICE
//Sirve para borrar elementos del array- OJO! MODIFICA EL ARRAY

const perro = ["khali","roco","sultan","blacky"];
perro.splice(1,2);
console.log(perro);

//metodo JOIN

const gatos = ["ursula","michi","caca","yoquese"];
const textoCat = gatos.join("-"); //Se puede usar "-"" "espacio"
console.log(textoCat);

//Metodo CONCAT
//Sirve para concatenar dos arrays

const animales = perro.concat(gatos);
console.log(animales);

//metodo SLICE
//devuelve una copia de laarte seleccionada del arrays(se le de dos parametros(ej: 1,2))

const perros = ["khali","roco","sultan","blacky"];
const otrosPerro=perros.slice(1,2);
console.log(otrosPerro);

//metodo INDEXOF
//Permite buscar el indice dentro del array

let buscarDogs = prompt("Ingrese el nombre de su mascota");
const indice = perros.indexOf(buscarDogs);
if(indice===-1){
    alert("Su perro no esta con nosotros");
}else{
    alert("Su perro esta con nosotros");
}

//metodo INCLUDES

let buscarDog = prompt("Ingrese el nombre de su mascota");
const esta = perros.includes(buscarDog);
if(esta){
    alert("Su perro no esta con nosotros");
}else{
    alert("Su perro esta con nosotros");
}