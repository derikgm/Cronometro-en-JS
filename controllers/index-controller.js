//controlador para casos en default

let path = require('path');
let pathUrl;
let indexController = () =>{};
//terminar luego

indexController.index = (req,res,next) =>{
    res.render('index');
}
indexController.error404 = (req,res,next) =>{
    const locals = {
        title: 'Error 404: File not found!',
        description: 'Opps! Parece que la seccion que buscas no se encuentra'
    }
    res.render('Error', locals)
}
indexController.temporizador = (req,res,next)=>{
pathUrl = path.join(__dirname,'..','public', 'Temporizador.html');
res.sendFile(pathUrl);
}
indexController.gestor = (req,res,next)=>{
pathUrl = path.join(__dirname,'..','public', 'Gestor.html');
res.render('Gestor');
}
indexController.cronometro = (req,res,next)=>{
pathUrl = path.join(__dirname,'..','public', 'Cronometro.html');
res.sendFile(pathUrl);
}


module.exports = indexController;