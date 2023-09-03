const express = require('express');
const router = express.Router();

const UserRepository = require('../domains/user/user.repository');
const UserService = require('../domains/user/user.service');
const User = require('../domains/user/user.entity');

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

// GET all users
router.get('/', (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
});

module.exports = router;