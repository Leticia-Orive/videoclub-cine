const express = require('express');
const morgan = require('morgan');
//const { dirname } = require('path');
//const expressbs = require('express-handlebars'); // hace la funcion de html
//const path = require('path');
//const flash = require('connect-flash');
//const session = require('express-session');
//const MYSQLStore = require('express-mysql-session');
//const passport = require('passport');

//const {database} = require('./keys.js')
//initializations
const app = express();
//require('./lib/passport.js');

//setting
app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));
//app.engine('.hbs', expressbs({
    //defaultLayout: 'main',
    //layoutsDir: path.join(app.get('views', 'layouts')),
    //partialsDir: path.join(app.get('views', 'partials')),
    //xtname: '.hbs',
    //helpers: require('./lib/handerbars'),
//}))
//para que funcione 
//app.set('view engine', 'hbs'),

//middlewares
//app.use(session({
    //secret:'videoclub',
    //resave:false,
    //saveUninitialized:false,
    //store: new MYSQLStore(database)
//}));

//app.use(flash());
app.use(morgan('dev'));
//app.use(express.urlencoded({extended: false})); //aceptar formularios
//app.use(express.json());
//app.use(passport.initialize());
//app.use(passport.session());

// Global variable
//app.use( req, res, next), () =>{
    //app.locals.success = req.flash('success');
    //app.locals.message = req.flash('message');
    //app.locals.user = req.user;
    //next();
//}

// Routes
app.use(require('./routes')),
//app.use(require('./routes/authentication')),
//app.use('/movies',require('./routes/movies'))
// el /movies es para pedir todas las peliculas
// Public
//app.use(express.static(path.join(__dirname, 'public')))
// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})
