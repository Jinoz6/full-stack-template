import createError  from 'http-errors'
import express  from 'express'
import path  from 'path'
import cookieParser  from 'cookie-parser'
import logger  from 'morgan'
import sassMiddleware  from 'node-sass-middleware'
import bodyParser  from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
// import postcssMiddleware from 

const app = express()

app.use(cors({  
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}))

app.use(helmet())

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
  outputStyle: 'extended'
}));

app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


import {key, database} from './env.config'
import session from 'express-session'
import ExpressMysqlSession from 'express-mysql-session'

const MySQLStore = ExpressMysqlSession(session)

const sessionStore = new MySQLStore(database)

if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
}

app.use(session({
    name: 'sessionId',
    secret: key,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: app.get('env') === 'production'
    }
}))

//set up route API---------------------------------------------------------------------------------------
import api_router from './routes/api'
app.use('/api', api_router)


//Set Route Private--------------------------------------------------------------------------------------
import private_router from './routes/private'
app.use('/auth',private_router)



//Set Route Public--------------------------------------------------------------------------------------
import public_router from './routes/public'
app.use('/', public_router)



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
