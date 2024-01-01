//controlador para casos en default

let path = require('path');
let pathUrl;
let defaultController = () =>{};
//terminar luego
let urls = [
    {
        path: 'Cronometro.html',
        url: '/Cronometro.html'
    },{
        path: 'Temporizador.html',
        url: '/Temporizador.html'
    },{
        path: 'Gestor.html',
        url: '/Gestor.html'
    }
];

defaultController.index = (req,res,next) =>{
    res.render('index');
}
defaultController.naving = (req,res,next)=>{
    pathUrl = path.basename(req.url);
    console.log(req.url);
    console.log(pathUrl);
    console.log('hola');
    let notFounded = true;/*
    urls.forEach((pos)=>{
        if(pos.path == pathUrl){
            notFounded = false;
            res.sendFile()
        }
    });
    if(notFounded)*/
        next();
}
defaultController.error404 = (req,res,next) =>{
    pathUrl = path.join(__dirname,'..','public', 'Error404.html');
    res.sendFile(pathUrl);
}

module.exports = defaultController;