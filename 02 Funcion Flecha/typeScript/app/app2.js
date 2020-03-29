"use strict";
let miFuncion3F = (nombre) => nombre.toUpperCase();
console.log(miFuncion3F("carlos guzman"));
let airoMan = {
    name: "Tony Stark",
    poder() {
        setTimeout(() => console.log(this.name + " Puñetazo en el pechamen"), 2000);
    }
};
airoMan.poder();
