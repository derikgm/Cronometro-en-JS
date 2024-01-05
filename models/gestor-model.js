const conn = require('./gestor-connect');
const gestorModel = () => {};

gestorModel.agregar= (consulta,callback)=>{
    conn.query(consulta, callback);    
}
gestorModel.gestor = (consulta, callback)=>{
    conn.query(consulta,callback);
}
gestorModel.eliminar = (consulta,callback)=>{
    conn.query(consulta,callback);
}
gestorModel.editar = (consulta,callback)=>{
    conn.query(consulta,callback);
}
module.exports = gestorModel;