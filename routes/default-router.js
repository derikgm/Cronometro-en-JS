//router para configuraciones default

const defaultController = require('../controllers/default-controller.js');
let express = require('express');
let router = express.Router();

router
    .get('/',defaultController.index)
    //.use(defaultController.naving) terminar luego
    .use(defaultController.error404);

module.exports = router;