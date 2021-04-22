import { getCustomRepository, Repository } from "typeorm";
import { MessagesRepository } from "../repositories/MessagesRepository";
import { Message } from '../entities/Message';

interface IMessageCreate {
    adminId?: string;
    text: string;
    userId: string;
}

class MessagesService {

    private messagesRepository: Repository<Message>;

    constructor(){
        this.messagesRepository = getCustomRepository(MessagesRepository);
    }

    async create({ adminId, text, userId }: IMessageCreate) {

        const message = this.messagesRepository.create({
            adminId,
            text,
            userId
        });

        await this.messagesRepository.save(message);

        return message;

    }

    async listByUser(userId: string) {

        const messages = await this.messagesRepository.find({
            where: { userId },
            relations: ['User']
        });

        return messages;

    }

}

export { MessagesService };