function saludar (nombre:string){
    console.log("Hola "+ nombre);
}

var persona = {
    nombre: "carlos"
};

saludar(persona.nombre.toUpperCase());