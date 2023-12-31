//Cronometro JS 

//Variables
let s = 0, ds = 0, m = 0, dm = 0, ms = 0;
let crono = document.getElementById("crono"); 
let activo = document.getElementById("Start");
let reinicio = document.getElementById("Resetear");
let marca = document.getElementById("Marcar");
let actividad = false;
let intervalo; 
let aux;

activo.addEventListener("click", activar);
reinicio.addEventListener("click", reiniciar);
marca.addEventListener("click", marcar);

/*****Funciones*****/

//Cronometro
function cronometro (){
    ms++;
    
    //Contando en milesimas de segundo
    if(ms == 250){ ms = 0; s++;}
    if(s == 10){s = 0; ds++;}
    if(ds == 6){ds = 0; m++;}
    if(m == 10){m = 0; dm++;}
    
    crono.innerHTML = `${dm}${m}:${ds}${s}`;
}

//Clickeo del boton
function activar (){
    if(actividad){
        actividad = false;
        clearInterval(intervalo);  
        activo.innerHTML = 'Continuar';
    } else{
        actividad = true;
        intervalo = setInterval(cronometro, 1);
        activo.innerHTML = 'Detener';
        inactivo(false);
    }
}

//Reiniciar
function reiniciar(){   
    actividad = false;
    clearInterval(intervalo);
    crono.innerHTML = '00:00';
    activo.innerHTML = 'Iniciar';
    s = 0, ds = 0, m = 0, dm = 0, ms = 0;
    document.getElementById('almacen').innerHTML = '';
    inactivo(true);
}

//Marcar
function marcar(){
    if(activo.innerHTML != 'Iniciar'){
    aux = document.createElement('p');
    aux.innerHTML = `${dm}${m}:${ds}${s}`;
    document.getElementById('almacen').appendChild(aux);
    }
}

//Ocultar los botones cuando no son requeridos
function inactivo(inactivo = true){
    if(inactivo){
        marca.hidden = true;
        reinicio.hidden = true;
    }else{
        marca.hidden = false;
        reinicio.hidden = false;
    }
}
inactivo();