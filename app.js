'use strict';

var express = require('express');
var app = express();
var routes = require('./routes');

var jsonParser = require('body-parser').json;
var logger = require('morgan');

app.use(logger('dev'));
app.use(jsonParser());

app.use('/questions', routes);

app.use(function(req, res, next){
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
})

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.json({
        message: err.message
    })
})

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Listening on port:" + port);
});

