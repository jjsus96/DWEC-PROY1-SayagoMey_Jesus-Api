//Generamos una variable que contenga la URL de la API.
let api = "https://rickandmortyapi.com/api/episode/";

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
        //Crea una nueva fila en la tabla.
        html += '<tr>';
        //Añade a la fila creada una columna con el id.
        html += `<td>${element.id}</td>`;
        //Crea una nueva columna en la fila con el nombre.
        html += `<td>${element.name}</td>`;
        //Inserta una nueva columna en la fila con la fecha de emisión.
        html += `<td>${element.air_date}</td>`;
        //Añade una columna con la temporada y el episodio a la fila.
        html += `<td>${element.episode} </td>`;
        //Termina la línea.
        html += '</tr>';
    });
    //Manda todos los datos que hemos obtenido en la función al HTML y los imprime.
    document.getElementById("InsertaEpisodios").innerHTML = html;
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