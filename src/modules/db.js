
var mysql = require('mysql');
var connection = mysql.createConnection({
  host:'ec2-54-75-246-118.eu-west-1.compute.amazonaws.com',
  port:'5432',
  user:'edhnplrptsxjjb',
  password:'28073ef1aceb1272dd5a43d366de7cc5233cf32bd16c2a114631f4319e7324bf',
  database:'db2j97chmdd41jb'
});
connection.connect(function(error){
  if(!error){
    console.log('Connected');
  }else{
    console.log('failed connection');
  };
 
  });

module.exports = connection;
