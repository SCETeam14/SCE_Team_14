const path = require('path');
var bodyParser = require('body-parser');
var brypt =require('bcrypt');
const cors  =require('cors');
const jwt = require('jsonwebtoken');
const express = require('express');
var app =express();
app.use( express.static( "images" ) );
app.use(bodyParser.json());

var connection = require('./modules/db');
var regcontrol = require('./controllers/regcontrol');
const saltRounds = 10;
app.set('view engine','ejs');
app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var regcontrol =require('./controllers/regcontrol');


//homepage
app.get('/',(req,res) => {
    console.log("Running...")
    res.render('index');
});


app.get('/register',(req,res) =>{
   
    res.render('register');
});



app.get('/login',(req,res) => {
    res.render('login');
});





app.post('/hi', (req,res) =>{
 var data = {
     "name":req.body.name,
     "email":req.body.email,
     "password":req.body.password
 }
    var sql = "INSERT INTO customers SET ?";
    connection.query(sql,data, function (err, result) {
      if (err) throw err;
      res.render('reg-success');

   
});
});

//login page

app.get('/login',(req,res) => {
    res.render('login');
});

app.post('/auth',(req,res)=>{


var sql ='SELECT email,password FROM customers';
connection.query(sql,(err,result)=>{
    if(err) throw err;
   
        console.log(result);
        res.render('index');

   
});


});

//shop 

app.get('/shop',(req,res) => {



    res.render('shop');
    
});

app.get('/cart',(req,res) => {

    res.render('cart');
})





//logout




//listen
app.listen(process.env.PORT || 3000)
console.log('You are listening to port 3000');
