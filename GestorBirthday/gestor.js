//Gestor JS

//variables
let guardar = document.getElementById('guardar');
let formulario = document.getElementById('persona');
let nombre, fecha, target = null, personas = new Array(); 
let tabla = document.getElementById('tabla');

formulario.addEventListener("submit", guardado);
document.getElementById('cerrar').addEventListener('click', cerrar);

function Persona (nombre, fecha){
    this.nombre = nombre;
    this.fecha = fecha;
}

/****Funciones****/

function guardado(ev){    
    ev.preventDefault();

    nombre = document.getElementById('nombre');
    fecha = document.getElementById('fecha');

    tabla.innerHTML = '<th>Nombre</th><th>Fecha</th>';
    
    if(nombre.value != '' && fecha.value != ''){
        let usuario = new Persona(nombre.value, fecha.value);
        personas.push(usuario);
        imprimir(personas);
        cerrar();
    }
    if(nombre.value == ''){
        alert('dejaste el campo de nombre en blanco');
    }
    if(fecha.value == ''){
        alert('dejaste el campo de fecha en blanco');
    }
    console.log(personas.length);
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

        tr.addEventListener('mouseover', function(){ marcar(tr); });
        tr.addEventListener('mouseout', function(){ desmarcar(tr); });
        tr.addEventListener('click', function(){ seleccionar(tr); });
        tr.addEventListener('keydown', function(){ alert('hola') });

        tabla.appendChild(tr);
    }
    
}

//mostrar y cerrar
function agregar(){
    document.getElementById("model").style.display = 'flex';
}
function cerrar(){
    document.getElementById("model").style.display = 'none';
}

//marcar, desmarcar, seleccionar
function marcar(elem){
    elem.children[0].style = 'border: solid rgb(187, 187, 187);';
    elem.children[1].style = 'border: solid rgb(187, 187, 187);';
    //das tanda;
    
}
function desmarcar(elem){
    if(!elem.seleccionado){
    elem.children[0].style = 'border: solid white;';
    elem.children[1].style = 'border: solid white;';    
    }
}
function seleccionar(elem){
    if(elem.seleccionado){
        elem.seleccionado = false;
        target = null;        
        desmarcar(elem);        
    }else{
        marcar(elem);

        if(target != null){
            seleccionar(target);        
        }
        
        target = elem;
        elem.seleccionado = true;
    }
}


//borrar 
/*function borrar(){

}*/