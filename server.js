//ejecutador
'use strict'
let app = require('./app');

let server = app.listen(app.get('port'),()=>{
    console.log('Servidor establecido en el puerto: '+ app.get('port'));
});