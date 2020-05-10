const app_port = process.env.PORT || 5000
const path = require('path');
const dbConnection = require('./database');

var express = require('express');
var app =express();

app.set('view engine','ejs');

//homepage
app.get('/',function(req,res){
    res.render('index2');
});

//reg page
app.get('/register',function (req,res){
    res.render('register');
});

//login page

app.get('/login',function(req,res){
    res.render('login');
});

//logout




        
app.listen(process.env.PORT || 5000)
    
