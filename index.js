import { UserRepositoryMongoDb } from "./database/repositories/userRepository.js";
import { CreateUserUseCase } from "./services/usecases/user/createUser.js";
import { MongoDbConnection } from "./database/mongo/connection/connect.js";
import { FindUserByIdUseCase } from "./services/usecases/user/findUserById.js";
import { UpdateUserUseCase } from "./services/usecases/user/updateUser.js";

const repository = new UserRepositoryMongoDb();
const createUserUseCase = new CreateUserUseCase(repository);
const database = new MongoDbConnection();


await database.ConnectDb().catch((err) => {
  console.log(err);
});

// const createUserUseCase = new CreateUserUseCase(repository);

// const newUser = await createUserUseCase.execute({
//   name: "Leo",
//   email: "bestmail@mail.com",
//   password: "senhasegura",
//   image: "http://imagem.com",
// });

// console.log(newUser);

const findByIdUseCase = new FindUserByIdUseCase(repository);
const updateUserUseCase = new UpdateUserUseCase(repository, findByIdUseCase);

const userUpdated = await updateUserUseCase.execute(
  {
    name: "Leonardo",
    email: "seumelhoremail@hotmail.com",
  },
  "9ac0b1b1-6aac-4fbe-a323-777ca395fa8a"
);

console.log(userUpdated);