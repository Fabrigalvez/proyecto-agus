//2 - Invocamos a MySQL y realizamos la conexion
const mysql = require('mysql');
import {
  DB_HOST,
  DB_PASSWORD,
  DB_USER,
  DB_NAME,
  DB_PORT
} from './../config.js'
const connection = mysql.createConnection({
    //Con variables de entorno
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});

connection.connect((error)=>{
    if (error) {
      console.error('El error de conexión es: ' + error);
      return;
    }
    console.log('¡Conectado a la Base de Datos!');
  });

  module.exports = connection;