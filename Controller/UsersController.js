"use strick"

const response = require("./../response");
const db = require("./../settings/db");

exports.users = (req, res) => {
  db.query("SELECT * FROM `users`", (error, rows, fields) => {
    if (error) {
      console.log(error);
    } else {
      response.status(rows, res)
    }
  })
}

exports.add = (req, res) => {
  var body = req.body;
  const sql = "INSERT INTO `users` (`id`, `name`, `second_name`, `email`, `date`) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [body.id, body.name, body.second_name, body.email, body.date], (error, results)=>{
    if (error) {
      console.log(error);
    } else {
      response.status(results, res);
    }
  })
  console.log(req);
}

exports.update = (req, res) => {
  var body = req.body;
  var id = req.params.id;
  const sql = "UPDATE `users` SET `id`='"+body.id+"', `name`='"+body.name+"', `second_name`='"+body.second_name+"', `email`='"+body.email+"', `date`='"+body.date+"' WHERE id="+id;
  db.query(sql, (error, results)=>{
    if (error) {
      console.log(error);
    } else {
      response.status(results, res);
    }
  })
  console.log(req);
}

exports.delete = (req, res) => {
  var id = req.params.id;
  const sql = "DELETE FROM `users` WHERE id="+id;
  db.query(sql, (error, results)=>{
    if (error) {
      console.log(error);
    } else {
      response.status(results, res);
    }
  })
  console.log(req);
}