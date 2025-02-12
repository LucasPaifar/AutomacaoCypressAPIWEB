var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var client = require('prom-client'); // <-- Adicionado para métricas
var register = client.register;

// Importação das rotas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Configuração do Prometheus (coleta de métricas)
client.collectDefaultMetrics();

// Endpoint para expor métricas no Prometheus
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.send(await register.metrics());
});

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Definição das rotas principais
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Captura erros 404 e encaminha para o handler de erro
app.use(function (req, res, next) {
  next(createError(404));
});

// Middleware de tratamento de erros
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
