//Generamos una variable que contenga la URL de la API.
let api = "https://rickandmortyapi.com/api/character/";

//Recibimos los datos de la API.
let datos = (apiURL) => {
    return fetch(apiURL)
        //cuando todo sale bien obtenemos nuestra respuesta.
        .then(response => response.json())
        //Accedemos a 
        .then(json => {
            //Obtenemos los datos de nuestra api (personajes)
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
        html += '<div style="float:left; margin-left: 5px; margin-right:5px; margin-top: 5px;">';
        //Crea el div en el que va a ir la imagen.
        html += '<div>';
        //Imprime la imagen de la API.
        html += `<img src="${element.image}" alt="..."`;
        //Genera un div dentro del de imagen para mostrar el texto necesario.
        html += '<div>';
        //Pinta en el HTML el nombre de cada personaje.
        html += `<h5>${element.name}</h5>`;
        //Muestra el estado en el que se encuentra el presonaje.
        html += `<p>Estado: ${element.status} </p>`;
        //Nos indica el genero del personaje.
        html += `<p>Genero: ${element.gender} </p>`;
        //Escribe cual es la especie de cada personaje.
        html += `<p>Especie: ${element.species} </p>`;
        //Cierra todos los div.
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