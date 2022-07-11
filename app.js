import createError  from 'http-errors'
import express  from 'express'
import path  from 'path'
import cookieParser  from 'cookie-parser'
import logger  from 'morgan'
import sassMiddleware  from 'node-sass-middleware'
import bodyParser  from 'body-parser'


const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'resources/views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

//Recompile .scss or .sass files automatically for connect and express based http servers.
app.use(sassMiddleware({
  src: path.join(__dirname, 'resources'),
  dest: path.join(__dirname, 'public'),
  includePaths: [path.join(__dirname), 'node_modules'],
  debug: (app.get('env') === 'production') ? false : true,
  indentedSyntax: false, // true = .sass and false = .scss
  outputStyle: 'compressed'
}));

app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// var session = require('express-session');
// var ExpressMysqlSession = require('express-mysql-session');
// // import {key, database} from './env.config'
// var database = require('./env.config')

// var MySQLStore = ExpressMysqlSession(session)

// var sessionStore = new MySQLStore(database)

// if (app.get('env') === 'production') {
//   app.set('trust proxy', 1) // trust first proxy
// }

// app.use(session({
//   name: 'sessionId',
//   secret: key || "secret",
//   store: sessionStore,
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//       secure: app.get('env') === 'production'
//   }
// }))

//set up route
// import public_router from './routes/public'
// app.use('/', public_router)

// import private_router from './routes/private'
// app.use('/admin', private_router)

// import api_router from './routes/api'
// app.use('/api', api_router)
import indexRouter  from './routes/index'
app.use('/', indexRouter)
// app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app
