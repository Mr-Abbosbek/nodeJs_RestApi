"use strick"

const response = require("./../response");


exports.index = (req, res) => {
  response.status("Hello rest APi NodeJs", res)
}