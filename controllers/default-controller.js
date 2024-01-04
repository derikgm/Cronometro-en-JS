//controlador para casos en default

let path = require('path');
let pathUrl;
let defaultController = () =>{};
//terminar luego

defaultController.index = (req,res,next) =>{
    res.render('index');
}
defaultController.error404 = (req,res,next) =>{
    pathUrl = path.join(__dirname,'..','public', 'Error404.html');
    res.sendFile(pathUrl);
}
defaultController.Temporizador = (req,res,next)=>{
pathUrl = path.join(__dirname,'..','public', 'Temporizador.html');
res.sendFile(pathUrl);
}
defaultController.Gestor = (req,res,next)=>{
pathUrl = path.join(__dirname,'..','public', 'Gestor.html');
res.sendFile(pathUrl);
}
defaultController.Cronometro = (req,res,next)=>{
pathUrl = path.join(__dirname,'..','public', 'Cronometro.html');
res.sendFile(pathUrl);
}


module.exports = defaultController;