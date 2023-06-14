export function valida(input) {
    const tipodeInput = input.dataset.tipo;
    if(validadores[tipodeInput]) {
        validadores[tipodeInput](input);
    }
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipodeInput, input);
        mostrarMensajeDeError(tipodeInput, input);
    }
}

const tipoDeErrores = [
   "valueMissing",
   "typeMismatch",
   "patternMismatch"
]
const mensajesDeError = {
    nombre:{
        valueMissing: "El campo nombre no puede estar vacio"
    },
    email:{
        valueMissing: "El campo correo no puede estar vacio",
        patternMismatch: "El correo no es valido"
    },
    url:{
        valueMissing: "El campo url no puede estar vacio",
        patternMismatch: "La url ingresada no es valida"
    },
    password: {
        valueMissing: "El campo password no puede estar vacio",
        patternMismatch: "La contrasena debe tener minimo 6 y maximo 15 caracteres, con una mayuscula, una minuscula, un numero y un simbolo"
    }
};

function mostrarMensajeDeError(tipodeInput, input){
    let mensaje = " "
    tipoDeErrores.forEach( error=>{
        if(input.validity[error]){
            console.log(tipodeInput,error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipodeInput][error]);
            mensaje=mensajesDeError[tipodeInput][error];
        }
    });
    return mensaje;
}

/* inputPassword.addEventListener("blur", (evento)=>{
    console.log(evento.target);
}); */

const validadores = {
    nombre: (input)=> validarNombre(input),
};

function validarNombre(input){
    let mensaje="";
    input.setCustomValidity(mensaje);
};