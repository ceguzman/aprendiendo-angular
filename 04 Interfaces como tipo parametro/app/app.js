"use strict";
function enviarMision(heroe) {
    console.log("Enviando a " + heroe.name + " edad: " + heroe.age);
}
function salvarPersonas(heroe) {
    console.log(heroe.name + " salvo a las personas ");
}
var deadpool = {
    name: "deadpool",
    age: 24
};
enviarMision(deadpool);
salvarPersonas(deadpool);
