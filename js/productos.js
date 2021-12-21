"use strict";

//Almacenamos en una variable donde se va a almacenar nuestro template. 
let lista = document.querySelector("#contenedor");

//Almacenamos en un array nuestros productos con sus características.
let productos = [
    {"identidicador":"des1", "producto": "CBR650R", "precio":"10.000€", "descripcion": "Una moto para competidores natos. Diseñada con una extraordinaria aerodinámica, la CBR650R —con suspensión, equipamiento y mejoras de estilo— es una herramienta ultraestilizada decididamente deportiva con una potencia fascinante y un par excepcional. Descubre un lugar sin fronteras: tu obsesión.","caracteristica1":"Iluminacion full led","caracteristica2":"Cuadro de instrumentos LCD","caracteristica3":"Embrague antirrebote asistido","caracteristica4":"Motor de 4 cilindros", "foto":"../img/img1.jpg"}, 
    {"identidicador":"des2", "producto": "CMX500 Rebel", "precio":"8.500€", "descripcion": "La CMX500 Rebel busca la máxima libertad sobre dos ruedas, sobre todo para los usuarios con carnet A2. Con un sólido bicilíndrico en paralelo de refrigeración líquida alojado en un chasis de posición rebajada y con una suspensión, una iluminación, un confort y un cuadro de instrumentos mejorados, es sin duda un llamativo lienzo en blanco, listo para que des rienda suelta a tu imaginación.","caracteristica1":"Iluminacion full led","caracteristica2":"Estilo custom","caracteristica3":"Llave lateral","caracteristica4":"Mayor comodidad", "foto":"../img/img2.jpg"}, 
    {"identidicador":"des3", "producto": "CB650R","precio":"9.000€", "descripcion": "Todos los días son una aventura. Empieza la tuya hoy con la CB650R. Característico rendimiento deportivo street fighter y ligero de la Neo Sports Café. La CB650R, con estilo, suspensión y actualizaciones de equipamiento, está lista para llevarte hacia una aventura urbana que no olvidarás.","caracteristica1":"Iluminacion full led","caracteristica2":"Llantas de aluminio","caracteristica3":"Horquilla invertida Showa SSF-BP","caracteristica4":"Pinzas de anclaje readial", "foto":"../img/img3.jpg"}, 
    {"identidicador":"des4", "producto": "Africa Twin","precio":"16.000€", "descripcion": "El viaje te mueve. Te cambia. Nuevos lugares. Personas. Experiencias. Toda una vida de recuerdos. Cada viaje comienza con una sensación de expectación de lo que vendrá y termina con un toque de nostalgia, un deseo innato de empezar a planificar otra vez. La Africa Twin Adventure Sports, con su gran autonomía y su capacidad versátil, abre todo un mundo para conducir. Y te conmoverá como ninguna otra cosa.","caracteristica1":"Motor de 1100cc","caracteristica2":"Conectividad con smartphone","caracteristica3":"Luces adaptativas en curva","caracteristica4":"Parabrisas revisado para mayor protección", "foto":"../img/img4.jpg"}];

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