var connection = require('../modules/db');

module.exports.register=function(req,res){
  
  var users={
      "name":req.body.name,
      "email":req.body.email,
      "password":req.body.password,
     
  }
  connection.query('INSERT INTO customers SET ?',users, function (error, results, fields) {
    if (error) {
      res.json({
          status:false,
          message:'there are some error with query'
      })
    }else{
        res.json({
          status:true,
          data:results,
          message:'user registered sucessfully'
      })
    }
  });
}
