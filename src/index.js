const express = require('express');
const path = require('path');
const app = express();

//settings
app.set('port', 3000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');//digo cual es mi motor de plantillas

//middlewares

//routes
app.use(require('./routes/index'))

//static files
app.use(express.static(path.join(__dirname, 'public')));

//escuchando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});