/* 
variables var let const  
var  = global
*/ 
var saludo:string = "hola"; 
function saludar() {
    var saludo = "adios";
} 
console.log(saludo); // imprime hola

/*   
let  = local
*/
let saludo2:string = "hola";
function saludarNuevamente(){
    let saludo2 = "adios";
}
console.log(saludo2); // imprime adios

/*   
const  = constante
*/
const PI = "3.1416";
console.log(PI);
//PI = "45646"; No se puede modificar las variables  constantes