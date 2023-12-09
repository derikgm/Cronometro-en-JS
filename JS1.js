//Centro de operaciones

//Variables
let s = 0, ds = 0, m = 0, dm = 0;
let crono = document.createElement("p"); 
let hora = document.createElement("p");
let div = document.getElementsByTagName('div');
let boton = document.getElementById("boton");
let actividad = false;
let fecha = new Date();
let guardar; 


div[0].appendChild(crono);
div[0].appendChild(hora);
boton.addEventListener("click", clickeo);
crono.innerHTML = '00:00';
hora.innerHTML = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;

/*****Funciones*****/

//reloj
function reloj(){
    fecha = new Date();
    hora.innerHTML = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
}
setInterval(reloj, 1000);

//Cronometro
function cronometro (){
    s++;
    
    if(s == 10){s =0;ds++;}
    if(ds == 6){ds=0;m++;}
    if(m == 10){m=0;dm++;}
    
    crono.innerHTML = `${dm}${m}:${ds}${s}`;
}

//Clickeo del boton
function clickeo (){
    if(actividad){
        actividad = false;
        clearInterval(guardar);  
        boton.innerHTML = 'Continuar';
        console.log('1');

    } else{
        actividad = true;
        guardar = setInterval(cronometro, 1000);
        boton.innerHTML = 'Detener';
        console.log("2");
    }
}