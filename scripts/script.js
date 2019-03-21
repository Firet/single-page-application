var nuevoArray = [];

pedirUsuarios();

function pedirUsuarios(){
    var request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.send();
        request.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                console.log("readyState es 4 y status es 200");
                JSONParseado = JSON.parse(request.responseText);
                console.log("Las respuestas JSON (Usuarios) son: ");
                console.log(JSONParseado);
                CrearNuevoArray();
                crearBotones();
            }
        }
    }    
}

function CrearNuevoArray() {
    for (var i = 0; i < JSONParseado.length; i++){
        nuevoArray.push({nombre: JSONParseado[i].name,id: JSONParseado[i].id})
    }
    console.log("Se ejecutó CrearNuevoArray");
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
        botonesAutores.addEventListener("click", cargarPost)
    }
    console.log("Se ejecutó crearBotones");
}

function cargarPost(){
    var requestPosts = new XMLHttpRequest();
    requestPosts.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=" + this.id);
    requestPosts.send();
    requestPosts.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                console.log("readyState es 4 y status es 200");
                PostsParseado = JSON.parse(requestPosts.responseText);
                console.log("Posts de usuario:");
                console.log(PostsParseado);
                crearPosts();
            }
        }
    };
}

function crearPosts() {
    document.getElementById("contenedor-cartas").style.display = "none";    
    document.getElementById("texto-encabezado").innerText = "Posts";
    for (var i = 0; i < PostsParseado.length; i++) {   
        var post = document.createElement("div");   
        var titlePost = document.createElement("h2");  
        var bodyPost = document.createElement("p");
        document.getElementById("contenedor-post").appendChild(post);
        post.appendChild(titlePost);
        post.appendChild(bodyPost);
        post.className = 'post';
        titlePost.appendChild(document.createTextNode(PostsParseado[i].title));
        bodyPost.appendChild(document.createTextNode(PostsParseado[i].body)); 
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
