"use strict";

//Obtenemos los valores introducidos en los inputs.
let usuario = document.getElementById("usuario");
let clave = document.getElementById("clave");

//Expresiones regulares
//Permite introducir un nombre con máximo de 15 caracteres con letras, números y con _.
let regusuario = /^^[A-Za-z0-9_]{1,15}$/;
//Comprueba que la contraseña tenga al menos 8 caracteres, use mayúsculas, minúsculas y numeros o caracteres especiales.
let regclave = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

//Asignamos nuestro formulario a una variable.
let formulario = document.getElementById("formulario");
    
//Al hacer click en el boton submit se ejecuta el evento.
formulario.addEventListener("submit", (evt) =>{
    evt.preventDefault();
    //Si las funciones devuelven true se inicia sesión, en caso contrario, se muestra un error.
    if (validarusuario() && validarcontrasena()) {
        error.innerHTML = "Inicia Sesión";
    } else {
        error.innerHTML = "Datos incorrectos";
    }
});

//Valida el nombre de usuario.
function validarusuario(){
    //Si el usuario no cumple la expresión regular muestra error, en caso contrario borra el error y devuelve true.
    if (!usuario.value.match(regusuario)){
        errorusuario.innerHTML = "Longitud máxima de 15 carácteres, solo puede contener letras, número y _";
    }
    else{
        errorusuario.innerHTML = "";
        return true;
    }        
}

//Valida la contraseña introducida.
function validarcontrasena(){
    //Si la contraseña no cumple la expresión regular muestra error, en caso contrario borra el error y devuelve true.
    if (!clave.value.match(regclave)){
        errorclave.innerHTML = "Debe tener al menos 8 carácteres (Mayúsculas, minúsculas y un número o caracter especial).";
    }
    else{
        errorclave.innerHTML = "";
        return true;
    }  
}