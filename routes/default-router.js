//router para configuraciones default

const defaultController = require('../controllers/default-controller.js');
let express = require('express');
let router = express.Router();

router
    .get('/',defaultController.index)
    .get('/Temporizador', defaultController.Temporizador)
    .get('/Gestor', defaultController.Gestor)
    .get('/Cronometro', defaultController.Cronometro)
    .use(defaultController.error404);

module.exports = router;