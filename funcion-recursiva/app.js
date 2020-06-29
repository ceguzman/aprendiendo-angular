/*
let numero = parseInt(prompt("Digite hasta que numero quiere contar"));
function contarNumero(nCantidad){
    console.log(nCantidad);
    if(1 < nCantidad){
        return contarNumero(nCantidad-1);
    }      
}
contarNumero(numero);
*/

var contar = 1;
let numero = parseInt(prompt("Digite hasta que numero quiere contar"));
function contarNumero(nCantidad){
    console.log(contar);
    if(1 < nCantidad){
        contar++;
        return contarNumero(nCantidad-1);
    }      
}
contarNumero(numero);

