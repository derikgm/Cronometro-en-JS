//aplicacion
'use strict'

//base
let express = require('express');
let restFull = require('express-method-override')('_method');
let port = (process.env.PORT || 3000);
//direcciones
let public_dir = express.static(__dirname + '/public');
let indexRouter = require('./routes/index-router.js');//ruta ejemplo
let direcion_views = __dirname + '/views';
let faviconURL = __dirname + '/public/images';//terminar
//extra
let favicon = require('serve-favicon');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let app = express();

app
    .set('views', direcion_views)
    .set('view engine', 'pug')
    .set('port', port)
    //uses
    .use(bodyParser.json({ extended: true }))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(restFull)
    .use(morgan('dev'))
    .use(public_dir)
    .use(indexRouter);
    //.use(favicon(faviconURL)) //Colocar para cuando haya favicon

module.exports = app;