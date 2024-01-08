//Gestor JS

//variables
let cont = 0, nombre, fecha, modo_eliminar =false;
let target = new Array();//, persona_id = new Array(); 
let guardar = document.getElementById('guardar');
let formulario = document.getElementById('persona');
let tabla = document.getElementById('tabla');
let boton_agregar = document.getElementById('agregar');
let boton_eliminar = document.getElementById('eliminar');
let boton_cancelar = document.getElementById('cancelar-eliminar');
let filas = document.getElementsByTagName('tr');
let boton_editar = document.getElementById('editar');
let model = document.getElementById("model");
let h3 = document.getElementById("h3");
let nombre_form = document.getElementById("nombre");
let fecha_form = document.getElementById("fecha");
let id_form = document.getElementById("id_form");
let put = document.getElementById("put");

for (let i = 1; i < filas.length; i++) {
    filas[i].seleccionado = false;
    filas[i].addEventListener('click', () => seleccionar(filas[i]));
    filas[i].addEventListener('mouseover', () => marcar(filas[i]));
    filas[i].addEventListener('mouseout', () => desmarcar(filas[i]));
}

boton_cancelar.hidden = true;
document.getElementById('cerrar').addEventListener('click', cerrar);

window.addEventListener('load', ()=>{
    if(localStorage.getItem('abierto')){
        boton_agregar.click();
    }
});

/****Funciones****/

function guardado(boton){
    let mensaje = '';
    let continuar = true;

    if(nombre_form.value == ''){
        mensaje = 'Haz dejado el campo de nombre en blanco\n';
        continuar = false;
    }
    if(fecha_form.value == ''){
        mensaje += 'Haz dejado el campo de fecha en blanco\n';
        continuar = false;
    }
    if(filas.length == 100){
        mensaje += 'No puedes tener más de 100 fechas de cumpleaños\n';
        continuar = false;
    }
    if(continuar){
        boton.parentNode.submit();
    }else{
        mensaje += 'Debes de seguir todas las reglas correctamente';
        alert(mensaje);
    }
}

/**Toma todos los datos del formulario y los modifica segun lo que se deba hacer
 * en edicion guarda el id de la persona en un td oculto que usa luego en el 
 * formulario, mientras tanto, el input con _method para el put permanece sin
 * valor, por ende, se queda como GET
 */
//mostrar y cerrar
function agregar(){
    fecha_form.innerHTML = new Date();
    model.style.display = 'flex';    
    localStorage.setItem('abierto', true);
}
function cerrar(){
    h3.innerHTML = 'Agregar una nueva fecha';
    guardar.innerHTML = 'Guardar';
    formulario.action = 'agregar/'
    nombre_form.value = '';
    put.value = '';
    put.name = '';
    model.style.display = 'none';
    localStorage.removeItem('abierto');
}
function edicion(elem){
    seleccionar(elem.parentNode.parentNode);
    model.style.display = 'flex';
    h3.innerHTML = 'Editar fecha';
    guardar.innerHTML = 'Editar';
    nombre_form.value = elem.parentNode.parentNode.children[0].innerHTML;
    //no funciona, tengo que buscar despues una manera de colocarlo
    fecha_form.value = elem.parentNode.parentNode.children[1].innerHTML    
    formulario.action = 'editar/'+elem.parentNode.parentNode.children[4].innerHTML;
    id_form.value = elem.parentNode.parentNode.children[4].innerHTML;
    put.value = 'PUT';
    put.name = '_method';    
}

//marcar, desmarcar, seleccionar
function marcar(elem){
    let color = (modo_eliminar) ? 'border: solid red;' : 'border: solid rgb(40, 40, 40);';
    elem.children[0].style = color + 'background-color: rgb(33, 70, 126);';
    elem.children[1].style = color + 'background-color: rgb(33, 70, 126);';
    elem.children[2].style = color + 'background-color: rgb(33, 70, 126);';
    elem.children[3].style = color + 'background-color: rgb(33, 70, 126);';
    // if(!modo_eliminar) elem.children[2].hidden = false;
}
function desmarcar(elem){
    if(!elem.seleccionado){
    elem.children[0].style = 'border: solid white;';
    elem.children[1].style = 'border: solid white;'; 
    elem.children[2].style = 'border: solid white;'; 
    elem.children[3].style = 'border: solid white;'; 
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
        let confirmacion = confirm('¿Estas seguro de borrar estos elementos?, no los podras recuperar');
        
        if(confirmacion){
            let targetsOrdenados = new Array();        
            let solicitud = new XMLHttpRequest();
            let cont = target.length;

            //Toma todos los ID's y los ordena
            for (const listas of target) {
                targetsOrdenados.push(listas.children[4].innerHTML);
            }
            targetsOrdenados.sort((a,b)=>{
                return b-a;
            })

            console.log(targetsOrdenados);

            for (const ids of targetsOrdenados) {
                --cont;
                target[cont].style = 'display: none;';
                target[cont].seleccionado = false;        
                desmarcar(target[cont]);

                //tambien se admite el delete, y se opera con el url
                solicitud.open('DELETE', '/eliminar/'+ids, true);
                solicitud.send(null);
            }
            solicitud.abort();
        }        
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
function confirmar(elem){
    let confirmacion = confirm('Estas seguro que quieres borrarlo?')
    if(confirmacion){
        elem.parentNode.parentNode.parentNode.style = 'display: none;';
        let solicitud = new XMLHttpRequest();
        let url = '/eliminar/'+ elem.parentNode.parentNode.parentNode.children[4].innerHTML;
        
        solicitud.open('DELETE',url, true);
        solicitud.send(null);
        solicitud.abort();
    }
}