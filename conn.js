var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database:"sonoo"
});

con.connect(function(err) {
  if (err){
    console.warn("NoT Connected!");

  } else{
    console.warn("Connected!");
  }
  
});