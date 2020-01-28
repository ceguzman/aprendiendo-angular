"use strict";
/*
variables var let const
var  = global
*/
var saludo = "hola";
function saludar() {
    var saludo = "adios";
}
console.log(saludo); // imprime hola
/*
let  = local
*/
var saludo2 = "hola";
function saludarNuevamente() {
    var saludo2 = "adios";
}
console.log(saludo2); // imprime adios
/*
const  = constante
*/
var PI = "3.1416";
console.log(PI);
//PI = "45646"; No se puede modificar las variables  constantes
