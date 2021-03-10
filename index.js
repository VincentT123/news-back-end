const { response } = require('express');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
// const handleErrors = require('./middleware/handleErrors');
var session = require('express-session');
var flash = require('connect-flash');

var app = express();

// Appel du module router actus.js
var actus = require('./routes/actus');
// Appel du module router actus.js
var users = require('./routes/users');

app.use(cors());
app.use(bodyParser.json());
// Utilise Body-Parser, pour pouvoir lire les entrées d'un formulaire
// le stocke comme un obj Javascript
// accessible via req.body
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  cookie: { maxAge: 60000 },
  secret: 'woot',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.use('/assets/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// Déclaration de vues Embedded Javascript (EJS)
app.set('engine_view', 'ejs');

app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  res.render('error');
});

// Utilisation de la fonction middleware de gestion des erreurs par défaut
//app.use(handleErrors);

// 
app.use('/actus', actus);
// 
app.use('/users', users);

var server = process.env.YOUR_PORT || process.env.PORT || 8080;

app.listen(server, () => console.log(`Server started, listening port: ${server}`));

