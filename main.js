/*Lista de contactos*/
const miListaDeContacto = ["Luis Garcia", "Miguel Salazar", "Guillermo Morris"];

const nuevoContacto = [];

console.log(miListaDeContacto);

/*crear contacto*/
let crearContacto = {
    Nombre : "Camilo Jimenez",
    Edad : 25,
    Telefono : 3025214584 
}
miListaDeContacto.push(crearContacto.Nombre)
console.log(miListaDeContacto);

/*eliminar contacto*/
let = 1;  
const eliminarContacto  = (arr,indice)=>{
    arr.splice(indice,1);
}
let posicion = 0;
for (let i= 0; i < miListaDeContacto.length; i++) {
    const element = miListaDeContacto[i];
    if (element === "Luis Garcia") {
        posicion = miListaDeContacto[i]
        eliminarContacto(miListaDeContacto,posicion)
    }
}

/*Mostrar contcto*/
console.log(miListaDeContacto);


