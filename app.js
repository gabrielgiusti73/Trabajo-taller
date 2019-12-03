let header = document.getElementById("header");

let section = document.getElementById("section");

let url = "index.json";

let request = new XMLHttpRequest();

request.open("GET", url);

request.responseType = "json";

request.send();

request.onload = function() {
    let informacion = request.response;
    mostrarInformacion(informacion);
    mostrarJugadores(informacion);
}


function mostrarInformacion(info) {
    let h1 = document.createElement("h1");
    h1.textContent = " Club Atletico " +
        info["nombre"] + "Descensos: " + info["descensos"];
    header.appendChild(h1)
}

function mostrarJugadores(info) {
    let infoJugadores = info["jugadores"];

    for (let i = 0; i < infoJugadores.length; i++) {

        let h2Nombre = document.createElement("h2");
        let h2Apodo = document.createElement("p")
        let img = document.createElement("img");

        h2Nombre.textContent = infoJugadores[i].nombre;
        h2Apodo.textContent = infoJugadores[i].apodo;
        img.src = infoJugadores[i].img

        section.appendChild(h2Nombre);
        section.appendChild(h2Apodo);
        section.appendChild(img)

    }



}