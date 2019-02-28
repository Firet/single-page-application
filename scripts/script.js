//Array de autores.
 var autores = [
    {nombre: "Jose",
    id: 1,
    bio: "Esta es la bíografia de Jose, relleno relleno relleno.",
    imagen: "joseimg" ,  
    },
    {nombre: "Romina",
    id: 2,
    bio: "Esta es la bíografia de Romina, relleno relleno relleno.",
    imagen: "rominaimg"  , 
    },
    {nombre: "Martin",
    id: 3,
    bio: "Esta es la bíografia de Martin, relleno relleno relleno.",
    imagen: "martinimg"   ,
    },
    {nombre: "Julia",
    id: 4,
    bio: "Esta es la bíografia de Julia, relleno relleno relleno.",
    imagen: "juliaimg",   
    },
    {nombre: "Florencia",
    id: 5,
    bio: "Esta es la bíografia de Florencia, relleno relleno relleno.",
    imagen: "florenciaimg",   
    },
    {nombre: "Diego",
    id: 6,
    bio: "Esta es la bíografia de Diego, relleno relleno relleno.",
    imagen: "diegoimg",   
    },
 ];
 

function cargarAutores() {

    for (var i = 0; i < autores.length; i++) {

        var cardContainer = document.createElement("div");
        var cardImg = document.createElement("div");
        var cardTitle = document.createElement("div");
        var cardBody = document.createElement("p");
        var cardSocial = document.createElement("div");
        var logoTw = document.createElement("i");
        var logoFb = document.createElement("i");
        var logoIg = document.createElement("i");

        cardContainer.appendChild(cardTitle);
        cardContainer.appendChild(cardImg);
        cardContainer.appendChild(cardBody);
        cardContainer.appendChild(cardSocial);
        cardSocial.appendChild(logoTw);    
        cardSocial.appendChild(logoFb);  
        cardSocial.appendChild(logoIg);  

        document.getElementById("contenedor-cartas").appendChild(cardContainer);

        cardContainer.className = 'card-container';    
        cardImg.className = 'card-bg-img bg1';
        cardTitle.className = 'card-title';
        cardBody.className = 'card-body';
        cardSocial.className = 'card-social';
        logoTw.className = 'fab fa-twitter';
        logoFb.className = 'fab fa-facebook';
        logoIg.className = 'fab fa-instagram';

        cardTitle.appendChild(document.createTextNode(autores[i].nombre));
        cardBody.appendChild(document.createTextNode(autores[i].bio));

        document.getElementsByClassName("card-bg-img bg1")[i].style.background = "url(images/" + autores[i].imagen + ".jpg)";
        document.getElementsByClassName("card-bg-img bg1")[i].style.backgroundSize = "100%";

        }


}
//Carga función cargarAutores al inicio.
window.onload = cargarAutores;
