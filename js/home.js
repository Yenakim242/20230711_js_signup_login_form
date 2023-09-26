// Leemos de la sessionStorage y redireccionamos para "index.html" si no se ha iniciado sesión (no hay datos en la sessionStorage)
let datos_auth = sessionStorage.getItem("auth");
if (datos_auth === null) {
    location.href = "index.html";
}

// Imprimir el nombre de usuario en "Bienvenido"
let span = document.querySelector("span");
let datos_usuario = JSON.parse(datos_auth);
span.innerHTML = datos_usuario["usuario"];

// Cerrar sesión
let cerrar_sesion = document.getElementById("cerrar_sesion");
cerrar_sesion.addEventListener("click", ()=>{
    sessionStorage.clear();
    location.href = "index.html";
});