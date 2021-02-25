const mongoose = require('mongoose');
require('dotenv').config();


// funcion encargada de que al ser llamada establezca la conexion
const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("DB online");
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar BD ver logs'); // detiene ejecucion
    }
}

//exponer funcion fuera del archivo
module.exports = {
    dbConnection: dbConnection
}