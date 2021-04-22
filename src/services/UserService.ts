import { getCustomRepository, Repository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { Users } from '../entities/Users';

class UserService{

    private usersRepository: Repository<Users>;

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string){

        const userAlreadExists = await this.usersRepository.findOne({
            email
        })

        if(userAlreadExists){
            return userAlreadExists;
        }

        const user = this.usersRepository.create({
            email
        })

        await this.usersRepository.save(user);

        return user;

    }

}

export { UserService };