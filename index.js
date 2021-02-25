require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use(cors());

// Base de datos
dbConnection();

// console.log(process.env);

//Rutas
app.get('/', (req, res) => {
    // res.status(400).json({   //para indicar error HTTP ok: true,msg: 'Hola mundo'})
    res.status(400).json({
        ok: true,
        msg: 'Hola mundo'
    })
});


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});