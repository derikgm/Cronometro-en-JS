//Cronometro JS 

//Variables
let s = 0, ds = 0, m = 0, dm = 0, ms = 0;
let crono = document.createElement("p"); 
/*Que cosa mas loca, cuando tienes dos script puestos las variables que declares en uno no pueden
ser declaradas en otro :/ */
let div2 = document.getElementsByTagName('div');
let boton = document.getElementById("boton");
let actividad = false;
let guardar; 

div2[0].appendChild(crono);
boton.addEventListener("click", clickeo);
crono.innerHTML = '00:00';

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
function clickeo (){
    if(actividad){
        actividad = false;
        clearInterval(guardar);  
        boton.innerHTML = 'Continuar';
    } else{
        actividad = true;
        guardar = setInterval(cronometro, 1);
        boton.innerHTML = 'Detener';
    }
}
