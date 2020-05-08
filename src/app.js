var express=require('express');

var app=express();


app.get('/',function(req,res){
    res.send("samii");
});

app.get('/signup',function(req,res){
    res.send("signup");
});

app.listen(8000);


