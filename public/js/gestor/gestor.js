//Gestor JS

//variables
let cont = 0, nombre, fecha, modo_eliminar =false, target = new Array(), personas = new Array(); 
let guardar = document.getElementById('guardar');
let formulario = document.getElementById('persona');
let tabla = document.getElementById('tabla');
let boton_agregar = document.getElementById('agregar');
let boton_eliminar = document.getElementById('eliminar');
let boton_cancelar = document.getElementById('cancelar_eliminar');

boton_cancelar.hidden = true;
formulario.addEventListener("submit", guardado);
document.getElementById('cerrar').addEventListener('click', cerrar);

//Objeto persona
function Persona (nombre, fecha, id){
    this.nombre = nombre;
    this.fecha = fecha;
    this.id = id;
}

/****Funciones****/

function guardado(ev){    
    ev.preventDefault();

    nombre = document.getElementById('nombre');
    fecha = document.getElementById('fecha');    
    
    if(nombre.value != '' && fecha.value != ''){
        let usuario = new Persona(nombre.value, fecha.value, cont);
        cont++;
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
}

function imprimir (personas){
    let contador = 0;
    tabla.innerHTML = '<th>Nombre</th><th>Fecha</th>';

    for (let per of personas) {
        nombre = document.createElement('td');
        fecha = document.createElement('td');
        let imagen = document.createElement('img');
        let tr = document.createElement('tr');
        
        nombre.innerHTML = `${per.nombre}`;
        fecha.innerHTML = `${per.fecha}`;

        imagen.hidden = true; 
        imagen.src = '/images/cesto 3.png';
        imagen.addEventListener('click', function(event){
            event.stopPropagation(); //detiene el evento del TR
            borrar(imagen.parentElement);
        });

        tr.appendChild(nombre);
        tr.appendChild(fecha);
        tr.appendChild(imagen);

        tr.addEventListener('mouseover', function(){ marcar(tr); });
        tr.addEventListener('mouseout', function(){ desmarcar(tr); });
        tr.addEventListener('click', function(){ seleccionar(tr); });
        tr.ID = contador;
        contador++;

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
    let color = (modo_eliminar) ? 'border: solid red;' : 'border: solid rgb(40, 40, 40);';
    elem.children[0].style = color + 'background-color: rgb(33, 70, 126);';
    elem.children[1].style = color + 'background-color: rgb(33, 70, 126);';
    if(!modo_eliminar) elem.children[2].hidden = false;  
}
function desmarcar(elem){
    if(!elem.seleccionado){
    elem.children[0].style = 'border: solid white;';
    elem.children[1].style = 'border: solid white;'; 
    elem.children[2].hidden = true; 
    }
    
}
function seleccionar(elem){
    if(modo_eliminar){
        
        if(elem.seleccionado){
            elem.seleccionado = false;
            desmarcar(elem);
            target.splice(target.length - 1);
        }
        else{
            marcar(elem);
            elem.seleccionado = true;
            target.push(elem);
        }

        if(target.length > 0){
            boton_eliminar.disabled = false;
            boton_eliminar.className = 'operacion';
        }else{
            boton_eliminar.disabled = true;
            boton_eliminar.className = 'apagado';
        }

    }
    else{
        //Selecciona solo un elemento
        if(elem.seleccionado){
            elem.seleccionado = false;
            target.splice(0);       
            desmarcar(elem);        
        }else{
            marcar(elem);

            if(target[0] != null){
                seleccionar(target[0]);        
            }
            
            target[0] = elem;
            elem.seleccionado = true;
        }
    }
}

//borrar y cancelar
function eliminar(){
    if(boton_eliminar.innerHTML == 'Seleccionar'){
        if(target[0] != null) seleccionar(target[0]);  
        boton_agregar.hidden = true;
        boton_cancelar.hidden = false;
        modo_eliminar = true;
        boton_eliminar.disabled = true;
        boton_eliminar.className = 'apagado'; //className accede a la clase
        boton_eliminar.innerHTML = 'Eliminar';
    }
    else if (boton_eliminar.innerHTML == 'Eliminar'){
        borrar();        
    }
}
function canselar_borrar(){
    modo_eliminar = false;
    boton_agregar.hidden = false;
    boton_cancelar.hidden = true;
    boton_eliminar.disabled = false;
    boton_eliminar.className = 'operacion';
    boton_eliminar.innerHTML = 'Seleccionar';

    for (let i = target.length-1; i >= 0; i--){ 
        target[i].seleccionado = false;        
        desmarcar(target[i]);
    }

    target.splice(0,target.length);
}
function borrar(elem){
    if(elem == undefined){
        for(let i = 0; i < target.length; i++)
                for (let j = 0; j < personas.length; j++)
                    if(target[i].ID == personas[j].id)
                        personas.splice(j, 1);
        
        target.splice(0, target.length);
        boton_eliminar.disabled = true;
        boton_eliminar.className = 'apagado';

    }else{
        personas.splice(elem.ID,1);   
    }
    
    for (let i = 0; i < personas.length; i++)
        personas[i].id = i;
    
    cont = personas.length;
    imprimir(personas);

}

/*
TODO:
1-Agregar capacidad de edicion para el gestor de cumples
2-Enlazar el material con una BBDD para mantener siempre la informacion
3-Guardar la informacion internamente para que no se pierda al cambiar de pagina
*/