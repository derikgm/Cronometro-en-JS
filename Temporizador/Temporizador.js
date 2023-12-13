//Temporizador JS

function TemporizadorJS (){
    //variables
    let formulario = document.getElementById('formulario');
    let cuerpo = document.getElementById('cuerpo');
    let tem = document.createElement('p');
    let guardar, actividad = false;
    let h = document.getElementById("h"); 
    let m = document.getElementById("m"); 
    let s = document.getElementById("s");  
    let boton = document.getElementById('submit');
    let ms = 250;

    cuerpo.appendChild(tem);
    tem.innerHTML = '00:00';
    formulario.addEventListener("submit", ejecutar);    

/*****Funciones*****/

    //guardar
    function ejecutar (ev){
        ev.preventDefault();       

        (actividad) ? (actividad = false, boton.value = 'Continuar') : (actividad = true, boton.value = 'Detener');

        h.value = '';
        m.value = '';
        s.value = '';

        guardar = setInterval (() => tempo(h,m,s), 250);
    }

    //temporizador
    function tempo (h,m,s){
        ms--;

        if(ms == 0){ms = 250; s--;}
        if(s == 0){s = 59; m--;}
        if(m == 0){m = 59; h--;}

        tem.innerHTML = `${h}:${m}:${s}`;

    }

}

TemporizadorJS();