//controlador para casos en default

let path = require('path');
let pathUrl;
let defaultController = () =>{};
//terminar luego
let urls = [
    {
        path: '/public/html/Cronometro.html',
        url: ''
    },{
        path: '/public/html/Temporizador.html',
        url: ''
    },{
        path: '/public/html/Gestor.html',
        url: ''
    }
];

defaultController.error404 = (req,res,next) =>{
    console.log(__dirname);
    pathUrl = path.join(__dirname,'..','public', 'Error404.html');
    console.log(pathUrl);
    res.sendFile(pathUrl);
}
defaultController.index = (req,res,next) =>{
    res.render('index');
}
defaultController.naving = ()=>{

}

module.exports = defaultController;