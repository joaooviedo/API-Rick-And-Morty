import { UserEntity } from "../../entities/user.js";

export class UpdateUserUseCase {
  constructor(userRepository) {
    this.repository = userRepository;
    this.findUserById = findUserById;
  }
  async exece(userUpdated, userId) {
    const userToUpdate = await this.findUserById(userId);

    if (!userToUpdate) {
      throw new Error("Not found a ser with UserId" + userId);
    }
    const userModified = { ...userToUpdate, userUpdated };
    const userValidated = new UserEntity(userModified);

    userValidated.validate();

    return await this.repository.updateUser(userValidated.getUser());
  }
}
