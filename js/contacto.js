"use strict";

//Obtenemos los valores introducidos en los inputs.
let nombrecompleto = document.getElementById("nombrecompleto");
let email = document.getElementById("mail");
let texto = document.getElementById("texto")

//Expresiones regulares
//Valida el nombre completo incluyendo Nombre, apellido1 y apellido2.
let regnombrecompleto = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/;
//Comprueba los carácteres que se introducen y que el formato corresponda al de un correo real.
let regemail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
//Valida que no se introduzcan caracteres especiales en el área de texto.
let regtexto = /^[^$%&|<>#]*$/;
//Asignamos nuestro formulario a una variable.
let formulario = document.getElementById("formulario");

//Al hacer click en el boton submit se ejecuta el evento.
formulario.addEventListener("submit", (evt) =>{
    evt.preventDefault();
    //Si todas las comprobaciones devuelven true imprime enviado, en caso contrario muestra error.
    if (validarnombrecompleto() && validaremail() && validartexto() && validarcaptcha()) {
        error.innerHTML = "Enviado";
    } else {
        error.innerHTML = "Datos incorrectos";
    }
});

//Valida el nombre y los apellidos introducidos.
function validarnombrecompleto(){
    //Si el nombre no cumple la expresión regular muestra un error, en caso contrario, borra el error y devuelve true.
    if (!nombrecompleto.value.match(regnombrecompleto)){
        errornombrecom.innerHTML = "Introduzca su nombre seguido de sus apellidos.";
    }
    else{
        errornombrecom.innerHTML = "";
        return true;
    }  
}

//Valida el Email introducido.
function validaremail(){
        //Si el Email no cumple la expresión regular muestra un error, en caso contrario, borra el error y devuelve true.
    if (!email.value.match(regemail)){
        erroremail.innerHTML = "Formato de Email no reconocido";
    }
    else{
        erroremail.innerHTML = "";
        return true;
    }        
}

//valida el texto introducido.
function validartexto(){
        //Si el texto no cumple la expresión regular muestra un error, en caso contrario, borra el error y devuelve true.
    if (!texto.value.match(regtexto)){
        errortexto.innerHTML = "Los carácteres ($ % & | < > # ) no están permitidos";
    }
    else{
        errortexto.innerHTML = "";
        return true;
    }        
}

//captcha

//Almacena los elementos que se mostraran por pantalla.
let valores = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
//Se generan 2 números aleatorios.
let posicion1 = parseInt(Math.random() * 9);
let posicion2 = parseInt(Math.random() * 9);
//Con los numeros aleatorios seleccionamos las posiciones de los elementos del array.
let elementolist1 = valores[posicion1];
let elementolist2 = valores[posicion2];
//Muestra en el HTML la suma a realizar mediante 2 de los elementos del array.
vercaptcha.innerHTML = elementolist1 + " + " + elementolist2;
//Aumenta los valores en 1 para que coincidan con la posición del array.
let sumacomparable = (posicion1 + 1) + (posicion2 + 1);

function validarcaptcha (){
    //Si el valor introducido no coincide muestra error, en caso contrario elimina el error y devuleve true.
    if (captcha.value != sumacomparable){
       errorcapt.innerHTML = "Captcha incorrecto";
    }
    else{
        errorcapt.innerHTML = "";
        return true;
    }  
}