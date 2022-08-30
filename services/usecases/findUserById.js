export class FindUserByIdUseCase {
  constructor(userRepository) {
    this.repository = userRepository;
  }
  async execute(userId) {
    if (!userId) {
      throw new Error("User id sended is invalid");
    }
    const userFinded = await this.userRepository.findById(userId);
    if (!userFinded) {
      throw new Error("Not found a ser with UserId" + userId);
    }
    return userFinded;
  }
}
