const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "rest"
})

connection.connect((error)=>{
  if (error) {
    return console.log("Error connect a Database");
  } else {
    return console.log("Connect Database !");
  }
})

module.exports = connection;