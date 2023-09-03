class UserService {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    getAllUsers() {
      return this.userRepository.findAll();
    }
  
    createUser(user) {
      this.userRepository.create(user);
    }
}
  
module.exports = UserService;