//console.log("funciona");
//
// var arrayDeUsuarios = [
//     {
//     id:1,
//     nombre: "Ana"
//     },
//     {
//     id:2,
//     nombre: "Mauro"
//     }
// ];

// for (var i = 0; i < arrayDeUsuarios.length; i++) {
//     console.log("arrayDeUsuarios en el indice " + i );
//     console.log(arrayDeUsuarios[i]);
// }




// function mostrarUsuarios () {
//     console.log("mostrar usuarios");

// }

// function mostrarPosts() {
//     document.getElementById("contenedor-cartas").style.display = "none";
//     document.getElementById("post-cont").style.display = "flex";
//     document.getElementById("texto-encabezado").innerHTML = "nombreUsuario";
//     document.getElementById("flecha").style.display = "initial";
// }
// function mostrarAutores() {
//     document.getElementById("flecha").style.display = "none";
//     document.getElementById("contenedor-cartas").style.display = "flex";
//     document.getElementById("post-cont").style.display = "none";
//     document.getElementById("texto-encabezado").innerHTML = "Autores";
// }

var arrayDeUsuarios = [
    {
        nombre: "mariano", 
        biografia: "asd",
        imagen: "./"
        //despues poner mas cosas 
    }, 
]

for (var i = 0; i < arrayDeUsuarios.length ; i++) {

    console.log("funciona el for " + i);
    crearTarjeta(arrayDeUsuarios[i].nombre, arrayDeUsuarios[i].biografia);

}

function crearTarjeta (nombreRecibido, biografiaRecibida) {
    console.log("crearTarjeta");
    var nombre = nombreRecibido;
    var biografia = biografiaRecibida;

    document.getElementById("acaVaElnombre").innerText = nombre;
    document.getElementById("acaVaLaBiografia").innerText = biografia;

}