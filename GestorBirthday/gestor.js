//Gestor JS

//variables
let guardar = document.getElementById('guardar');
let formulario = document.getElementById('persona');
let nombre, fecha, personas = new Array(); 
let tabla = document.getElementById('tabla');
formulario.addEventListener("submit", guardado);

function Persona (nombre, fecha){
    this.nombre = nombre;
    this.fecha = fecha;
}

/****Funciones****/

function guardado(ev){    
    ev.preventDefault();

    nombre = document.getElementById('nombre');
    fecha = document.getElementById('fecha');

    let usuario = new Persona(nombre.value, fecha.value);
    personas.push(usuario);

    tabla.innerHTML = '<th>Nombre</th><th>Fecha</th>';
    imprimir(personas);
}

function imprimir (personas){

    for (let per of personas) {
        nombre = document.createElement('td');
        fecha = document.createElement('td');
        let tr = document.createElement('tr');
        
        nombre.innerHTML = `${per.nombre}`;
        fecha.innerHTML = `${per.fecha}`;

        tr.appendChild(nombre);
        tr.appendChild(fecha);

        tabla.appendChild(tr);
    }

}