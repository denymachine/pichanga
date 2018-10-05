const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//propiedades de routes
const usuarioRoutes = require('./routes/usuarioRoute');

//MONGODB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pichanga', {
        useNewUrlParser: true
    }).then(db => console.log('Conexion Mongodb exitosa.'))
    .catch(err => console.log(err));

//SETTINGS
app.set('port', process.env.PORT || 3000);

//middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

//routes
app.use('/usuario', usuarioRoutes);

//static files

//error handlers

//START THE SERVER

app.listen(app.get('port'), () => {
    console.log('Servidor Pichanga Iniciado');
});