function pedirUsuarios(callback1, callback2) {
    var request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.send();
    request.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                console.log("readyState es 4 y status es 200");
                JSONParseado = JSON.parse(request.responseText);
                console.log("Las respuestas JSON (Usuarios) son: ");
                console.log(JSONParseado);
                callback1();
                callback2();
            }
        }
    }
}

function pedirPost() {
    var requestPosts = new XMLHttpRequest();
    requestPosts.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${this.id}`);
    requestPosts.send();
    requestPosts.onreadystatechange = function() {
    //requestPosts.onreadystatechange = () => {
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