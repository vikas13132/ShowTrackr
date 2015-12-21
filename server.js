var express = require('express');
var path = require ('path');
//var logger = require('logger');
var cookieparser = require('cookieparser');
var bodyparser = require('body-parser');

var app = express();

app.set('port', process.env.port || 3000);
//app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
//app.use(cookieparser());
app.use(express.static(path.join(__dirname, 'public')));
//this is to test GIT

app.listen(app.get('port'), function () {
  console.log('Ready');
})