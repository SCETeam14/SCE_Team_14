
var mysql = require('mysql');
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'mydb'
});
connection.connect(function(error){
  if(!error){
    console.log('Connected');
  }else{
    console.log('failed connection');
  };
 
  });

module.exports = connection;
