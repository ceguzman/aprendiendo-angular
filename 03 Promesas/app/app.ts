let promesa = new Promise((resolve,reject) =>{
    setTimeout(() => {
        console.log("Promesa Terminada")
    }, 1500);

    //Si la promesa se cumple
    resolve();

    //No se cumple
    //reject();
});

promesa.then(function(){
    console.log("Ejecutarme si todo sale BIEN")
},function(){
    console.error("Ejecutarme si sale MAL")
})