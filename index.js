import { UserRepositoryMongoDb } from "./database/repositories/userRepository.js";
import { CreateUserUseCase } from "./services/usecases/createUser.js";

const repository = new UserRepositoryMongoDb()
const createUserUseCase = new CreateUserUseCase(repository)

const newUser = await createUserUseCase.execute({
    name: "Breno",
    email: "breno@gmail.com",
    password: "Breninho",
    image: "http://image.com"
})
console.log(newUser)