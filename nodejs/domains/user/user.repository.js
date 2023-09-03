const User = require('./user.model');

class UserRepository {
  constructor() {
    this.users = [];
  }

  async findAll() {
    return await User.findAll();
  }

  async create(user) {
    await await User.create(user)
  }
}

module.exports = UserRepository;
