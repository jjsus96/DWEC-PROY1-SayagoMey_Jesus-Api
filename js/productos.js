"use strict";

//Almacenamos en una variable donde se va a almacenar nuestro template. 
let lista = document.querySelector("#contenedor");

//Almacenamos en un array nuestros productos con sus características.
let productos = [
    {"identidicador":"des1", "producto": "Puzzle", "precio":"14,95€", "descripcion": "Rick and Morty Puzzle Characters (1000 piezas)","caracteristica1":"Puzzle con póster, licencia oficial.","caracteristica2":"1000 piezas.","caracteristica3":"Dimensiones: 66,5 x 50 cm.","caracteristica4":"Código de producto: 437254.", "foto":"../img/prod1.jpg"}, 
    {"identidicador":"des2", "producto": "Zapatillas", "precio":"31,16€", "descripcion": "Zapatillas Rick and Morty de hombre","caracteristica1":"Construidas en piel vegana.","caracteristica2":"Licencia oficial.","caracteristica3":"Comodidad asegurada.","caracteristica4":"Código de producto: 441087.", "foto":"../img/prod2.jpg"}, 
    {"identidicador":"des3", "producto": "Taza","precio":"13,69€", "descripcion": "Rick and Morty Taza - TZRAM1","caracteristica1":"licencia oficial.","caracteristica2":"Holograma de autenticación.","caracteristica3":"Cerámica altamente resistente.","caracteristica4":"Código de producto: 398794.", "foto":"../img/prod3.jpg"}, 
    {"identidicador":"des4", "producto": "Póster","precio":"6,25€", "descripcion": "Póster Rick and Morty","caracteristica1":"Licencia oficial.","caracteristica2":"Impresión de alta calidad.","caracteristica3":"Dimensiones: 61 x 91,5 cm.","caracteristica4":"Código de producto: 291944.", "foto":"../img/prod4.jpg"}];

//Creamos una variable para almacenar nuestro template.
let template = document.querySelector("#plantilla").content;
//Asignamos nuestra plantilla a una variable.
let fragment = document.createDocumentFragment();

//Recorre el array de productos para realizar acciones por cada producto.
productos.forEach(item =>{
    //Asigna el nombre de producto en el template.
    template.querySelector(".prod .nombre").textContent = item.producto;
    //Asigna la en el producto.
    template.querySelector("img").src = item.foto;
    //Clona los nodos de nuestro template.
    let clone = template.cloneNode(true);
    //Agrega el contenido al fragment.
    fragment.appendChild(clone);
});

//Una vez construido el fragment, lo agregamos a nuestro html.
lista.appendChild(fragment);

//Borra el div en el que se encuentra.
function borrar(btn1){
    //Asigna la variable a su padre.
    let eliminar = btn1.parentNode;
    //Elimina todos los hijos de eliminar.
    document.querySelector("#contenedor").removeChild(eliminar);
}

//Vista de producto

//Almacenamos en una variable donde se va a almacenar nuestro template. 
let vista = document.querySelector("#grande");

//Asignamos nuestra plantilla a una variable.
let plano = document.querySelector("#vistaprod").content;

//Recorremos nuestro array productos y por cada elemento realizamos acciones.
productos.forEach(item =>{
    //Asigna a la plantilla la propiedad nombre del objeto.
    plano.querySelector(".vista .nombre").textContent = item.producto;
    //Asigna la imagen a la plantilla
    plano.querySelector("img").src = item.foto;
    //Se añade la descripción a la plantilla.
    plano.querySelector(".vista .descrip").textContent = item.descripcion;
    //Introducimos el precio a la plantilla.
    plano.querySelector(".vista .precio").textContent = item.precio
    //Asigna al ul un id con el valor del identificador.
    plano.querySelector("ul").id = item.identidicador;
    //Asigna las deiferentes características.
    plano.querySelector(".vista .caract1").textContent = item.caracteristica1;
    plano.querySelector(".vista .caract2").textContent = item.caracteristica2;
    plano.querySelector(".vista .caract3").textContent = item.caracteristica3;
    plano.querySelector(".vista .caract4").textContent = item.caracteristica4;

    //Clona los nodos de nuestro template.
    let clonar = plano.cloneNode(true);
    //Agrega el contenido al fragment.
    fragment.appendChild(clonar);
});

//Una vez construido el fragment se añade al html.
vista.appendChild(fragment);

//Carrusel

//lleva la cuenta en el carrusel.
let contador = 1;
carrusel(contador);

//Aumenta el contador o lo disminuye en función del parámetro que se le pasa.
function sumarimagen(n) {
  carrusel(contador += n);
}
//Crea el carrusel 
function carrusel(n) {
  let i;
  //Obtenemos los contenedores de las fotos.
  let vision = document.getElementsByClassName("vista");
  //Si nuestra cuenta aumenta a más que el total de fotos, volvemos a la primera.
  if (n > vision.length) {
      contador = 1
    }
  //Si disminuye a menos de 1, que es el valor inicial, vamos a la última foto.  
  if (n < 1) {
      contador = vision.length
    }
  //Oculta los contenedores que no correspondan con el valor actual en lista.
  for (i = 0; i < vision.length; i++) {
      vision[i].style.display = "none";  
  }
  //Muestra el contenedor que se corresponde con el valor actual en lista.
  vision[contador-1].style.display = "block";
  
}

//Por defecto al cargar la página, se ejecuta una vez la función carrusel.
document.addEventListener("DOMContentLoaded", carrusel());

//Desplegable características.
function desplegar() {
    //Por cada objeto en producto realiza acciones.
    productos.forEach(item=>{
    //Referencia para nuestro identificador.    
    let ob = item.identidicador;
    //Selecciona el id antes referenciado del DOM.
    let ocultar = document.getElementById(ob);
    //Alterna el style.display al ejecutar función.
    if (ocultar.style.display === "none") {
        ocultar.style.display = "block";
    } else {
        ocultar.style.display = "none";
    }
    })
}
//Al cargar la página ejecuta la función desplegar.
window.onload = desplegar();