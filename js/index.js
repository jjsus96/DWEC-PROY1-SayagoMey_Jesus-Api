"use strict";

//Definimos el div en el que se va a encontrar el carrusel.
let contenedor = document.getElementById("contenedor");
//Almacenamos nuestras imágenes en un array.
let imagenes = [
  "../img/img1.jpg",
  "../img/img2.jpg",
  "../img/img3.jpg",
  "../img/img4.jpg"
];

//Creamos una variable para almacenar nuestro template.
let fragment = document.createDocumentFragment();
//Asignamos nuestra plantilla a una variable.
let template = document.querySelector("#plantilla").content;

//Se recorre el array y por cada elemento se realizan las acciones. 
imagenes.forEach((elemento) => {
  //Asigna a cada elemento img el src con el valor dentro del array. 
  template.querySelector("img").src = elemento;
  //Clona los nodos de nuestro template.
  let clone = template.cloneNode(true);
  //Agregamos el contenido al fragment.
  fragment.appendChild(clone);
});

//Una vez construido el fragment, lo agregamos a nuestro html.
contenedor.appendChild(fragment);

//Carrusel

//Delegamos eventos para dar funcionalidades a los botones del carrousel.
class Contenedor {
  constructor(botones) {
    //Definimos que boton es igual a botones.
    this.boton= botones;
    //Indicamos que al hacer click en un botón se ejecuta el botón.
    botones.onclick = this.onClick.bind(this);
    }
    //Se definen las funciones para cada botón.
    anterior() {
      sumarimagen(-1);
    }

    siguiente() {
      sumarimagen(1);
    }
    //al hacer click, se ejecuta el evento del elemento clicado.
    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
    }
  };
}
//Definimos el contenedor como el homónimo de HTML.
new Contenedor(contenedor);

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
  let fotos = document.getElementsByClassName("imagen");
  //Si nuestra cuenta aumenta a más que el total de fotos, volvemos a la primera.
  if (n > fotos.length) {
      contador = 1
    }
  //Si disminuye a menos de 1, que es el valor inicial, vamos a la última foto.  
  if (n < 1) {
      contador = fotos.length
    }
  //Oculta los contenedores que no correspondan con el valor actual en lista.
  for (i = 0; i < fotos.length; i++) {
      fotos[i].style.display = "none";  
  }
  //Muestra el contenedor que se corresponde con el valor actual en lista.
  fotos[contador-1].style.display = "block";
  
}
//Por defecto al cargar la página, se ejecuta una vez la función carrusel.
document.addEventListener("DOMContentLoaded", carrusel());