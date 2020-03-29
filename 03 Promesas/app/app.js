"use strict";
var promesa = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa Terminada");
    }, 1500);
    //Si la promesa se cumple
    resolve();
    //No se cumple
    //reject();
});
promesa.then(function () {
    console.log("Ejecutarme si todo sale BIEN");
}, function () {
    console.error("Ejecutarme si sale MAL");
});
