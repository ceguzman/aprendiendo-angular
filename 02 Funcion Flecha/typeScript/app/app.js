"use strict";
function saludar(nombre) {
    console.log("Hola " + nombre);
}
var persona = {
    nombre: "carlos"
};
saludar(persona.nombre.toUpperCase());
