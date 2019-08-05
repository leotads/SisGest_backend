const routes = require('express').Router();

const UserController = require('./app/controllers/UserController');

routes.get ('/', (req, res) => {
  res.status(200).json({ hello: "world"})
});

routes.get('/users', UserController.getUsers);
routes.post('/users', UserController.createUser);

module.exports = routes;