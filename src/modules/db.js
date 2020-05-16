
var mysql = require('mysql');
var connection = mysql.createConnection({
host:'eu-cdbr-west-03.cleardb.net',
  port:'3306',
  user:'bf13b524c3323c',
  password:'ec7c550b',
  database:'heroku_16d196b266c4323'
});
connection.connect(function(error){
  if(!error){
    console.log('Connected');
  }else{
    console.log('failed connection');
  };
 
  });

module.exports = connection;
