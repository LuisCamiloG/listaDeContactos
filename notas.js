function actualizarContacto(arr, numeroDeDatosAActulizar){
    arr.splice(5, 1,numeroDeDatosAActulizar);
}

actualizarContacto(miListaDeContacto,'Leo Messi');
console.log(miListaDeContacto);


/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*Lista de contactos*/
// const miListaDeContacto = ["Luis Garcia", "Miguel Salazar", "Guillermo Morris"];

// const nuevoContacto = [];

// console.log(miListaDeContacto);

/*crear contacto*/
// let crearContacto = {
//     Nombre : "Camilo Jimenez",
//     Edad : 25,
//     Telefono : 3025214584 
// }
// miListaDeContacto.push(crearContacto.Nombre)
// console.log(miListaDeContacto);

/*eliminar contacto*/
// let = 1;  
// const eliminarContacto  = (arr,indice)=>{
//     arr.splice(indice,3);
// }
// let posicion = 0;
// for (let i= 0; i < miListaDeContacto.length; i++) {
//     const element = miListaDeContacto[i];
//     if (element === "Luis Garcia") {
//         posicion = miListaDeContacto[i]
//         eliminarContacto(miListaDeContacto,posicion)
//     }
// }

/*Mostrar contcto*/
// console.log(miListaDeContacto);