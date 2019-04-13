var nuevoArray = [];

pedirUsuarios(crearNuevoArray, crearBotones);

function crearNuevoArray() {
    for (var i = 0; i < JSONParseado.length; i++){
        nuevoArray.push({nombre: JSONParseado[i].name,id: JSONParseado[i].id})
    }
    console.log("Se ejecutó crearNuevoArray");
    console.log("nuevoArray:");
    console.log(nuevoArray)
};

function crearBotones(){
    for (var i = 0; i < nuevoArray.length; i++) {   
        var botonesAutores = document.createElement("button");     
        document.getElementById("contenedor-cartas").appendChild(botonesAutores);
        botonesAutores.className = 'botones-autores';
        botonesAutores.appendChild(document.createTextNode(nuevoArray[i].nombre));
        botonesAutores.setAttribute("id", nuevoArray[i].id);
        botonesAutores.addEventListener("click", pedirPost);
    }
    console.log("Se ejecutó crearBotones");
}

function crearPosts() {
    document.getElementById("contenedor-cartas").style.display = "none";    
    document.getElementById("texto-encabezado").innerText = "Posts";
    for (var i = 0; i < PostsParseado.length; i++) {   
        var post = document.createElement("div");   
        var titlePost = document.createElement("h3");  
        var bodyPost = document.createElement("p");
        document.getElementById("contenedor-post").appendChild(post);
        post.appendChild(titlePost);
        post.appendChild(bodyPost);
        post.className = 'post';
        titlePost.appendChild(document.createTextNode(PostsParseado[i].title));
        bodyPost.appendChild(document.createTextNode(PostsParseado[i].body)); 
        bodyPost.className = 'oculto';
        document.getElementById("flecha").style.display = "block";        
    }
    console.log("Se ejecutó crearPost")
}

function volverUsuarios(){
    document.getElementById("texto-encabezado").innerText = "Usuarios";
    document.getElementById("contenedor-post").innerHTML = "";
    document.getElementById("flecha").style.display = "none";   
    document.getElementById("contenedor-cartas").style.display = "block";
    console.log("Se ejecutó volverUsuarios")
}
