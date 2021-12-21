"use strict";

//Obtenemos los valores introducidos en los inputs.
let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let email = document.getElementById("mail");
let fecha = document.getElementById("fecha");
let clave = document.getElementById("clave");
let clave2 = document.getElementById("clave2");
let captcha = document.getElementById("captcha");

//Expresiones regulares
//Permite introducir nombres incluyendo acentos y ñ.
let regnombre = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
//Comprueba que se introduzcan 2 apellidos.
let regapellidos = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/;
//Comprueba los carácteres que se introducen y que el formato corresponda al de un correo real.
let regemail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
//Verifica que el formato usado sea DD/MM/YYYY.
let regfecha = /^((0[1-9]|[12][0-9]|3[01])(\/)(0[13578]|1[02]))|((0[1-9]|[12][0-9])(\/)(02))|((0[1-9]|[12][0-9]|3[0])(\/)(0[469]|11))(\/)\d{4}$/;
//Comprueba que la contraseña tenga al menos 8 caracteres, use mayúsculas, minúsculas y numeros o caracteres especiales.
let regclave = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

//Asignamos nuestro formulario a una variable.
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (evt) =>{
    evt.preventDefault();
        //Si las funciones devuelven true se inicia sesión, en caso contrario, se muestra un error.
    if (validarnombre() && validarapellidos() && validaremail() && validarfecha() && validarclave() && validarclave2() && validarcaptcha() && check()){
    error.innerHTML = "Inicia sesión";
    } else {
        error.innerHTML = "Datos incorrectos";
    }
});

//Valida el nombre introducido.
function validarnombre(){
        //Si el nombre no cumple la expresión regular muestra error, en caso contrario borra el error y devuelve true.
    if (!nombre.value.match(regnombre)){
        errornombre.innerHTML = "Solo puede contener letras, mayúsculas y minúsculas";
    }
    else{
        errornombre.innerHTML = "";
        return true;
    }        
}

//Valida los apellidos.
function validarapellidos(){
        //Si los apellidos no cumplen la expresión regular muestra error, en caso contrario borra el error y devuelve true.
    if (!apellidos.value.match(regapellidos)){
        errorapellidos.innerHTML = "Introduzca 2 apellidos, solo puede contener letras, mayúscular y minúsculas";
    }
    else{
        errorapellidos.innerHTML = "";
        return true;
    }  
}

//Valida el Email.
function validaremail(){
        //Si el email no cumple la expresión regular muestra error, en caso contrario borra el error y devuelve true.
    if (!email.value.match(regemail)){
        erroremail.innerHTML = "Formato de Email no reconocido";
    }
    else{
        erroremail.innerHTML = "";
        return true;
    }        
}

//Valida la fecha.
function validarfecha(){
    //Dividimos el input usando como divisor el caracter /.
    let dividirfecha = fecha.value.split("/");
    //Transformamos la fecha introducida en un objeto date.
    let generarfecha = new Date(dividirfecha[2], dividirfecha[1] - 1, dividirfecha[0]);
    //Generamos la fecha actual.
    let actual = new Date();
    //Resta a la fecha actual la fecha introducida por el usuario.
    let restafechas = actual - generarfecha;
    //Pasa el resultado de restar fechas a años y obtiene la edad.
    let edad = Math.floor(((((restafechas/1000)/60)/60)/24)/365);

    //Si la fecha no cumple la expresión regular se muestra error.
    if (!fecha.value.match(regfecha)){
        errorfecha.innerHTML = "Formato de fecha no válido";
    }
    //Si la edad es menor de 18 se muestra un aviso.
    else if (edad < 18){
        errorfecha.innerHTML = "Es necesario ser mayor de 18 años";
    }
    //Si la edad es mayor de 99 se muestra un aviso.
    else if (edad > 99){
        errorfecha.innerHTML = "La edad máxima es de 99 años";
    }
    //Si se cumplen las condiciones se borran errores y se devuelve true.
    else{
        errorfecha.innerHTML = "";
        return true;
    }  
}

//Valida que se hayan seleccionado al menos 3 Checkbox.
function check(){
//obtenemos los inputs.
let inputs = document.getElementsByTagName("input");
//Creamos un contador inicializado en 0.
let contador = 0;

//Se recorren los inputs.
for (let n=0; n<inputs.length; n++) {
    //Si el input es de tipo checkbox y está marcado aumenta en 1 el contador.      
    if (inputs[n].type == "checkbox" && inputs[n].checked == true){
        contador++;
    }
    //Si el contador es menor que 3 muestra error en caso contrario lo elimina y devuelve true.
    if (contador < 3){
        errorcheck.innerHTML = "Seleccione al menos 3 opciones";
    }else{
        errorcheck.innerHTML = "";
        return true;
    }
    }
}

//Valida la contraseña.
function validarclave(){
    //Si la contraseña no cumple la expresión regular muestra error, en caso contrario borra el error y devuelve true.
    if (!clave.value.match(regclave)){
        errorclave.innerHTML = "Debe tener al menos 8 carácteres (Mayúsculas, minúsculas y un número o caracter especial).";
    }
    else{
        errorclave.innerHTML = "";
        return true;
    }        
}

//Valida la confirmación de contraseña introducida por el usuario.
function validarclave2(){
        //Si la segunda contraseña no coincide con la primera, muestra error, en caso contrario borra el error y devuelve true.
    if (clave.value !== clave2.value){
        errorclave2.innerHTML = "Las contraseñas no coinciden";
    }
    else{
        errorclave2.innerHTML = "";
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