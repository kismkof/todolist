var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'sowon7912.cafe24.com',
    port: 3306,
    user: 'sowon7912',
    password: 'spark3766ftp',
    database: 'sowon7912',
})
connection.connect(function(err) {
    if (err) {
        console.error('mysql connection error')
        console.error(err)
        throw err
    }
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/regist', function(req, res) {
    console.log('body: ' + req.body)
    var todos = {
        title: '테스트', //req.body.title,
        content: req.body.content,
    }
    console.log(todos)
    var query = connection.query('insert into tbtodos set ?', todos,
        function(err, result) {
            if (err) {
                console.error(err)
                throw err
            }
            res.status(200).send('success')
        })
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;