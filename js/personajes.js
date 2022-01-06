//Generamos una variable que contenga la URL de la API.
let api = "https://rickandmortyapi.com/api/character/";

//Recibimos los datos de la API.
let datos = (apiURL) => {
    return fetch(apiURL)
        //cuando todo sale bien obtenemos nuestra respuesta.
        .then(response => response.json())
        //Accedemos a la respuesta.
        .then(json => {
            //Obtenemos los datos de nuestra api (personajes).
            mostrardatos(json),
            //Accedemos al elemento .info para obtener sus datos.
            paginas(json.info)
         })
        //En caso de error nos muestra su código por consola.
        .catch(error => { console.error("Error:", error) })
}

//Imprime los datos que hemos recibido en nuestro HTML.
let mostrardatos = (data) => {
    let html = "";
    //Por cada elemento que obtenemos de la API, hacemos las siguientes acciones.
    data.results.forEach(element => {
        //Crea un div principal en el que se almacenará la información de cada personaje.
        html += '<div style="float:left; margin-left: 7px; margin-right:7px; margin-top: 5px;">';
        //Crea el div en el que va a ir la imagen.
        html += '<div>';
        //Imprime la imagen de la API.
        html += `<img src="${element.image}" alt="..."`;
        //Genera un div dentro del de imagen para mostrar el texto necesario.
        html += '<div>';
        //Pinta en el HTML el nombre de cada personaje.
        html += `<h3 style="background-color: white;">Id: ${element.id}</h3>`;
        //Muestra el estado en el que se encuentra el presonaje.
         html += '</div>';
        html += '</div>';
        html += '</div>';
    });
    //Manda todos los datos que hemos obtenido en la función al HTML y los imprime.
    document.getElementById('infopersonajes').innerHTML = html;
}

//Genera botones para poder pasar de página.
let paginas = (info) => {
    //Creamos un botón para poder ir hacia atrás.
    let html = `<button type="button" onclick="datos('${info.prev}')">Anterior</button>`;
        //generamos un botón para poder ir a la siguiente página.
        html += `<button type="button" onclick="datos('${info.next}')">Siguiente</button>`;
        //Imprimimos los dos botones dentro del div correspondiente.
        document.getElementById("paginas").innerHTML = html;
    }

//llama a la función datos.
datos(api)

//Seleccionamos los elementos que vamos a utilizar del html.
let input = document.querySelector('input');
let button = document.querySelector('.carga');
let vistacontainer = document.querySelector('.vista-container');

//Al hacer click ejecuta los parámetros almacenados.
button.addEventListener('click',(e) => {
    //Previene la entrada por defecto.
    e.preventDefault();
    //Validamos el valor introducido para que se pueda realizar una petición.
    if (input.value > 0 && input.value < 827 && input.value % 1 == 0){
        traervista(input.value);
    }
    //Si el número no es válido se muestra un mensaje de error.
    else{
        alert("id no válido");
     }    
})

//Realiza la llamada a la API con el ID introducido.
function traervista (identificador) {
    fetch(`https://rickandmortyapi.com/api/character/${identificador}/`)
    //Cuando todo sale bien obtenemos nuestra respuesta.
    .then((res) => res.json())
    //Pasa los datos a la función.
    .then((datos) => {
        crearvista(datos);
})
    //En caso de error nos muestra su código por consola.
    .catch(error => { console.error("Error:", error) })
}

//Genera la vista del personaje que queremos ver.
function crearvista(vista){
    //Inserta los diferentes parámetros en su campo correspondiente del HTML.
    document.getElementById("imagen1").src = vista.image;
    document.getElementById("nombre").innerHTML ="Nombre: " + vista.name;
    document.getElementById("estado").innerHTML ="Estado: " + vista.status;
    document.getElementById("genero").innerHTML ="Género: " + vista.gender;
    document.getElementById("especie").innerHTML ="Especie: " + vista.species;
    document.getElementById("lugar").innerHTML ="Última localización: " + vista.location.name;
}