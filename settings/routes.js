"use strick"

module.exports = (app) => {
  const indexController = require('./../Controller/indexController');

  const usersController = require('./../Controller/UsersController');

  app.route('/').get(indexController.index)
  app.route('/users').get(usersController.users)
  app.route('/users/add').post(usersController.add)
  app.route('/users/edit/:id').put(usersController.update)
  app.route('/users/:id').delete(usersController.delete)
}