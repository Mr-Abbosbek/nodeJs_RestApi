"use strick"

module.exports = (app) => {
  const indexController = require('./../Controller/indexController');

  const usersController = require('./../Controller/UsersController');

  app.route('/').get(usersController.users)
  app.route('/add').post(usersController.add)
  // app.route('/users/id').delete(usersController.delete)
}