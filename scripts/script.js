//console.log("funciona");

var arrayDeUsuarios = [
    {
    id:1,
    nombre: "Ana"
    },
    {
    id:2,
    nombre: "Mauro"
    }
];

for (var i = 0; i < arrayDeUsuarios.length; i++) {
    console.log("arrayDeUsuarios en el indice " + i );
    console.log(arrayDeUsuarios[i]);
}




function mostrarUsuarios () {
    console.log("mostrar usuarios");

}

function mostrarPosts() {
    // document.getElementById("contenedor-cartas").style.display = "none";
    // document.getElementById("post-cont").style.display = "flex";
    // document.getElementById("texto-encabezado").innerHTML = "nombreUsuario";
    // document.getElementById("flecha").style.display = "initial";
    console.log("Click en el div")
}
function mostrarAutores() {
    document.getElementById("flecha").style.display = "none";
    document.getElementById("contenedor-cartas").style.display = "flex";
    document.getElementById("post-cont").style.display = "none";
    document.getElementById("texto-encabezado").innerHTML = "Autores";
}


function myFunction() {
  var para = document.createElement("P");
  var t = document.createTextNode("This is a paragraph.");
  para.appendChild(t);
  document.getElementById("myDIV").appendChild(para);
  para.className = "algo";
  para.onclick = function () {
      //función
}

