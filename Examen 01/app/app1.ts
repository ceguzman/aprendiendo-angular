//Examen 1 punto
interface Heroe {
    nombre: string;
    artesMarciales: string[];
}

function llamarHeroe(heroe: Heroe) {
    console.log(`${heroe.nombre} ${heroe.artesMarciales}`);
}

let batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};

llamarHeroe(batman);


//Examen 2 punto

let resultadoDobleF = (a: number, b: number) => {
    console.log(a + b * 2);
}
resultadoDobleF(1, 4);

// Examen 3 punto
var mensaje;
function getAvenger(nombre: string, poder?: string, arma: string = "arco") {
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    } else {
        mensaje = nombre + " tiene un " + arma
    }
}

getAvenger("carlos", "viajar en el tiempo");
console.log(mensaje);


//Examen 4 punto

class Rectangulo {
    private base: number;
    private alutra: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.alutra = altura;
    }

    calcularArea():number {
        return this.base * this.alutra;
    }
}

let figura = new Rectangulo(5, 2);
console.log(figura.calcularArea());
