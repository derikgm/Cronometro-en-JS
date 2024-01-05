const {Client} = require('pg');

const client = new Client ({
    user: 'postgres',
    host: "localhost",
    database: "gestor-de-tiempo",
    password: "123",
    port: 5432
});

client.connect().then(()=>{
    console.log('Conexion exitosa con la base de datos gestor-de-tiempo');
}).catch(()=>{
    console.log('wops!! algo salio mal...');
});

module.exports = client;