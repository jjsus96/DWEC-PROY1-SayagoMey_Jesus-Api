let api = "https://rickandmortyapi.com/api/character/";

let datos = (apiURL) => {
    return fetch(apiURL)
        .then(response => response.json())
        .then(json => { 
            mostrardatos(json),
            paginas(json.info)
         })
        .catch(error => { console.error("Error:", error) })
}

let mostrardatos = (data) => {
    let html = "";
    data.results.forEach(element => {
        html += '<div style="float:left; margin-left: 5px; margin-right:5px; margin-top: 5px;">';
            html += '<div>'
            html += `<img src="${element.image}" class="card-img-top" alt="..."`
            html += '<div>'
            html += `<h5>${element.name}</h5>`
            html += `<p>Estado: ${element.status} </p>`
            html += `<p>Genero: ${element.gender} </p>`
            html += `<p>Especie: ${element.species} </p>`
            html += '</div>'
            html += '</div>'
        html += '</div>'
    });

    document.getElementById('infopersonajes').innerHTML = html;
}

let paginas = (info) => {
    let html = `<button type="button" onclick="datos('${info.prev}')">Anterior</button>`
        html += `<button type="button" onclick="datos('${info.next}')">Siguiente</button>`
        document.getElementById("paginas").innerHTML = html;
    }

datos(api)