//Persona JS

class PersonaClass {
    constructor (nombre, fecha){
        this.nombre = nombre;
        this.fecha = fecha;
    }

    //Tienen que ser diferentes
    set setNombre (newNombre) {
        this.nombre = newNombre;
    }
    //Tienen que ser diferentes
    set setFecha (newFecha){
        this.fecha = newFecha;
    }

    get getNombre (){
        return nombre;
    }
    get getFecha (){
        return fecha;
    }
    
}
//const AuxiliarPersona = new Persona('juan', '10/12/23');

