//Temporizador JS
/*TODO: 
1: Enviar una notificacion de que termino el temporadizador
2: Agregar funcionalidad de iniciar y pausar el temporizador pulsando 
los numeros
*/

function TemporizadorJS (){
    //variables
    let formulario = document.getElementById('formulario');
    let iniciarBoton = document.getElementById('submit');
    let reiniciarBoton = document.getElementById('reiniciar_boton');
    let pararBoton = document.getElementById('parar_boton');
    let alarma = document.getElementById('alarma');
    let tem = document.getElementById('temp');
    let h = document.getElementById("h"); 
    let m = document.getElementById("m"); 
    let s = document.getElementById("s");
    let guardar, actividad = -1;
    let valorH, valorM, valorS;    

    formulario.addEventListener("submit", ejecutar); 
    reiniciarBoton.addEventListener('click', function(){
        iniciarBoton.value = 'Iniciar';
        reiniciarBoton.hidden = true;
        tem.style = 'color: white';
        tem.innerHTML = '0:00:00';
        clearInterval(guardar);
        actividad = -1;
    }); 
    pararBoton.addEventListener('click', pararAlarma);
    
    reiniciarBoton.hidden = true;
    pararBoton.hidden = true;

    

/*****Funciones*****/

    //Ejecucion
    function ejecutar (ev){
        ev.preventDefault();       

        //1: activo, 0: pausa, -1: inactivo
        if(actividad == -1){

            if(!(h.value == 0 && m.value == 0 && s.value == 0)){

                valorH = h.value;
                valorM = m.value;
                valorS = s.value;

                valorS++;
                tempo();
                guardar = setInterval (tempo, 1000);

                h.value = 0;
                m.value = 0;
                s.value = 0;

                actividad = 1;
                iniciarBoton.value = 'Detener';
                reiniciarBoton.hidden = false;
            }
        }else if(actividad == 1){

            actividad = 0;
            iniciarBoton.value = 'Continuar';
            clearInterval(guardar);

        }else{

            guardar = setInterval (tempo, 1000);
            actividad = 1;
            iniciarBoton.value = 'Detener';

        }               
        
    }

    //temporizador
    function tempo (){
        valorS--;

        if(valorH == 0 && valorM == '00' && valorS == -1) 
            detener();
        else{

            if(valorS == -1){valorS = 59; valorM--;}
            if(valorM == -1){valorM = 59; valorH--;}

            valorH += '';
            valorM += '';
            valorS += '';

            if(valorM.length == 1) valorM = `0${valorM}`;
            if(valorS.length == 1) valorS = `0${valorS}`;

            if(valorS < 10 && valorM == '00' && valorH == 0){
                tem.style = 'color: red;';
                tem.innerHTML = `${valorS.substring(1)}`
            }
            else
                tem.innerHTML = `${valorH}:${valorM}:${valorS}`;

        }

    }

    //Detener
    function detener(){

        clearInterval(guardar);
        actividad = -1;
        alarma.play();
        iniciarBoton.value = 'Iniciar';
        tem.innerHTML = '0:00:00';
        tem.style = 'color: white';
        reiniciarBoton.hidden = true;
        formulario.hidden = true;
        tem.style = 'animation: parpadeo 1s linear infinite';
        pararBoton.hidden = false;
        
    }

    //Parar alarma
    function pararAlarma(){
        console.log('hola');
        formulario.hidden = false;
        pararBoton.hidden = true;
        alarma.pause();
        alarma.currentTime = 0;
        tem.style = 'animation: none';       
    }
    
}

TemporizadorJS();