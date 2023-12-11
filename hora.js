//hora JS

function horaJS(){

let div = document.getElementsByTagName('div');
let hora = document.createElement("p");
let fecha = new Date();

//div[0].appendChild(hora);
document.body.appendChild(hora);
hora.innerHTML = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;

//funcion reloj
function reloj(){
    fecha = new Date();
    hora.innerHTML = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
}
setInterval(reloj, 1000);

}

horaJS();