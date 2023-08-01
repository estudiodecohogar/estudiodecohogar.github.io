// capturar elementos del form y del documento
const form = document.querySelector("form"); // selecciona el primer elemento con ese nombre en el documento
document.getElementById("btn-reset").addEventListener("click", borrarMensaje);
var mensajeForm = document.getElementById("msj-form");

// escucha el evento submit dentro del formulario en vez de al boton enviar
form.addEventListener("submit", handleEnviar); 




function handleEnviar(e) {
    e.preventDefault(); //para evitar que recargue la pagina y se borren los datos
    const formDataObjet = { //creacion objeto literal para almacenar los datos ingresados
        nombre: e.target.nombre.value, // captura desde el evento los valores de cada campo logrando un código más declarativo y facil de entender por otros
        email: e.target.email.value,
        mensaje: e.target.mensaje.value,
    };
    console.log(formDataObjet);
    mensajeForm.textContent = "¡Gracias! Tu mensaje fue enviado, en breve nos contactaremos con vos."
}

// funcion para eliminar el mensaje de confirmacion a traves del boton reset
function borrarMensaje () {
    mensajeForm.textContent = "";
}