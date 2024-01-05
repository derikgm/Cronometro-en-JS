//hora JS

//variables
let div = document.getElementsByTagName('div');
let hora = document.createElement("p");
let fechaHora = new Date();
let minutos, segundos;

hora.id = 'reloj';
document.getElementsByTagName('footer')[0].appendChild(hora);

reloj();

//funcion reloj
function reloj(){
    fechaHora = new Date();

    (fechaHora.getMinutes() < 10) ? minutos = `0${fechaHora.getMinutes()}`: minutos = `${fechaHora.getMinutes()}`;
    (fechaHora.getSeconds() < 10) ? segundos = `0${fechaHora.getSeconds()}`: segundos = `${fechaHora.getSeconds()}`;

    
    if(fechaHora.getHours() <= 12)
        hora.innerHTML = `<b>${fechaHora.getHours()}:${minutos}:${segundos} AM</b>`;
    else
        hora.innerHTML = `<b>${fechaHora.getHours()-12}:${minutos}:${segundos} PM</b>`;
}
setInterval(reloj, 1000);

