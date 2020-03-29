interface Heroe{
    name:string
    age:number
}

function enviarMision(heroe:Heroe){
    console.log("Enviando a "+ heroe.name +" edad: " +heroe.age );
}

function salvarPersonas(heroe:Heroe){
    console.log(`${heroe.name} salvo a las personas `);
}

let deadpool = {
    name:"deadpool",
    age:24
};

enviarMision(deadpool);
salvarPersonas(deadpool);