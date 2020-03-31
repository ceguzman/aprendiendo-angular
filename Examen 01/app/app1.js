"use strict";
function llamarHeroe(heroe) {
    console.log(heroe.nombre + " " + heroe.artesMarciales);
}
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
llamarHeroe(batman);
//Examen 2 punto
var resultadoDobleF = function (a, b) {
    console.log(a + b * 2);
};
resultadoDobleF(1, 4);
// Examen 3 punto
var mensaje;
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + arma;
    }
}
getAvenger("carlos", "viajar en el tiempo");
console.log(mensaje);
//Examen 4 punto
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.alutra = altura;
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.alutra;
    };
    return Rectangulo;
}());
var figura = new Rectangulo(5, 2);
console.log(figura.calcularArea());
