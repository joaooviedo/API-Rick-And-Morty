import { UserEntity } from "../../entities/user.js";

export class CreateUser {
  constructor(userRepository) {
    this.repository = userRepository;
  }

  execute(user) {
    const newUser = new UserEntity(user);
    newUser.validate();
    return await this.repository.create(newUser.getUser());
  }
}
