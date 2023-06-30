// Validación form

const formulario = document.querySelector(".formulario");

const {nombre, email, mensaje} = datos;

if(nombre == "" || email == "" | mensaje == ""){
    mostrarAlerta("Todos los campos son obligatorios", true);
    return;
}

mostrarAlerta("Mensaje enviado correctamente");

// Union de ambas alertas
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add("error");
    }else{
        alerta.classList.add("correcto");
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

function mostrarMensaje(mensaje){
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add("correcto");

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

function mostrarError(mensaje){
    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add("error");

    formulario.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 5000);
}