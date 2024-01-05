//router para configuraciones default

const gestorController = require('../controllers/gestor-controller.js');
const indexController = require('../controllers/index-controller.js');
let express = require('express');
let router = express.Router();

router
    .get('/',indexController.index)
    .get('/Temporizador', indexController.temporizador)
    .get('/Cronometro', indexController.cronometro)
    .get('/Gestor', gestorController.gestor)
    .post('/agregar',gestorController.agregar)
    .delete('/eliminar/:persona_id', gestorController.eliminar)
    //tal parece que hay que ponerle el nombre del elemento que se le pasa si o si
    .put('/editar/:persona_id', gestorController.editar)
    .use(indexController.error404);

    /*Get para obtener datos
    post para subir
    delete para borrar
    put para actualizar */
    
module.exports = router;