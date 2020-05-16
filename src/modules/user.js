app.post('/auth',function(req,res){
    var email = req.body.email;
    var password = req.body.password;
    if(email && password){
        connection.query('SELECT * FROM customers WHERE email =? AND password =?',[email,password],function(err,result,fields){
            if(result.lenght > 0){
                req.session.loggedin = true;
                req.session.email=email;
                res.render('/');

            }else{
                res.send('Incorrect Email and/or Password')
            }
            
        });

    }else{
        res.send('Please enter Email and Password');
        
    }
});