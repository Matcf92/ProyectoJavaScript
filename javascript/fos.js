///////////HIGHER ORDER FUNCTION - FUNCIONES DE ORDEN SUPERIOR///////////////////////////////////
//Son funciones en esencia, por lo tanto, puede recibir parametros o no o puede retornar algo o no
//los parametros que reciben son funciones y lo que retornan tambien son funciones

console.log("UNO", "o", "VARIAS", "CADENAS", "DE", "TEXTO");


//Función que retorna función
//En el primer caso tenemos una funcioj que retorna una funcion, lo cual nos permitiria crear esquemas con un esquema superior

function mayorQue(n) {
    return (m) => m > n;
}

const mayorquediez = mayorQue(10);

console.log(mayorquediez(5)); // false;



//Función que recibe función por parámetro

function porCadaUno(arr, fun) {
    //for(let i=0;i<arr.length;i++)
    for (const elemento of arr) {
        fun(elemento);
    }
}

porCadaUno(["HOLa", "cacerola", "cómo", "estas"], console.log);