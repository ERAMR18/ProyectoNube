const API = "https://proyectonube.onrender.com";

async function cargar(){

    const respuesta = await fetch(API);

    const tareas = await respuesta.json();

    const lista = document.getElementById("lista");

    lista.innerHTML = "";

    tareas.forEach(t => {

        lista.innerHTML += `
            <li>${t.nombre}</li>
        `;
    });
}