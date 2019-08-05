'use strict';

const { User } = require('../models');

class UserController {
  async createUser(req, res, next) {
    try {
      const { name, email } = req.body;

      if (!name || !email) throw new Error('User or Email not informed!');

      const user = await User.create({ name, email});

      if (!user) throw new Error('unregistered user');

      res.status(200).json(user);

    } catch (err) {
      res.status(401).json({Error: err.name, Message: err.message})
    }
  }

  async getUsers(req, res, next) {
    const users = await User.findAll();

    res.status(200).send(users);
  }
}

module.exports = new UserController();