import React from "react";

export default class Encabezado extends React.Component{   
    render(){
        return(
        <nav className = "navegacion">
            <a href="/"><button id="home">Inicio</button></a>
            <a href="/Cronometro"><button>Cronometro</button></a>
            <a href="/Temporizador"><button>Temporizador</button></a>     
            <a href="/Gestor"><button>Gestor de cumpleaños</button></a>     
        </nav>
        );
    }
}