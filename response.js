"use strick"

exports.status = (values, res) => {
  const data = {
    "status": 200,
    "values": values
  }

  res.json(data.values)
  res.end()
}