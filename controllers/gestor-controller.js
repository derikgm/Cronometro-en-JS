const gestorModel = require('../models/gestor-model');
let gestorController = () => {};
let locals;

gestorController.agregar = (req,res,next)=>{
    /**Recordar que los datos con post son obtenidos con req.body,
     * para get se usa req.params*/
    let consulta = `INSERT INTO personas (nombre,fecha)
    VALUES ('${req.body.nombre}','${req.body.fecha}')`;
    
    gestorModel.agregar(consulta,(err)=>{
        if(err){
            locals = {
                title: 'Error al insertar datos!',
                description: 'Hubo un error a la hora de insertar los datos, inténtelo más tarde'
            }
            res.render('Error', locals);
        }
        else
            res.redirect('/Gestor');
    });
}
gestorController.gestor = (req,res,next) =>{
    //Recordar que la callback tambien atrapa datos
    gestorModel.gestor('SELECT * FROM personas',(err, valores)=>{
        if(err){
            locals = {
                title: 'Error al cargar datos!',
                description: 'Hubo un error a la hora de cargar los datos, inténtelo más tarde'
            }
            res.render('Error', locals);
        }
        else{
            locals = {
                title: 'Fechas',
                personas: valores.rows,
                data: 'hola'
            }
            res.render('Gestor', locals);
        }
    })
}
gestorController.eliminar = (req,res,next) => {
    let id = req.params.persona_id;
    let consulta = `DELETE FROM personas WHERE persona_id = ${id}`;
    gestorModel.eliminar(consulta, (err)=>{
        if(err){
            locals = {
                title: 'Error al eliminar datos!',
                description: 'Hubo un error a la hora de eliminar los datos, inténtelo más tarde'
            }
            res.render('Error', locals);
        }else{
            //si no se usa / marcara como un error la callback
            res.redirect('/Gestor');
        }
    });
}
gestorController.editar = (req,res,next) =>{
    let consulta = `UPDATE personas
    SET nombre = '${req.body.nombre}', fecha = '${req.body.fecha}'
    WHERE persona_id = ${req.body.nombre_id};`;

    gestorModel.editar(consulta,(err)=>{
        if (err) {
            locals = {
                title: 'Error al actualizar datos!',
                description: 'Hubo un error a la hora de actualizar los datos, inténtelo más tarde'
            }
        } else {
            res.redirect('/Gestor');
        }
    });
}
module.exports = gestorController;