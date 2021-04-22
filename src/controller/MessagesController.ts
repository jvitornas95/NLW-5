import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";


class MessagesController {

    async create(req: Request, res: Response) {

        const { adminId, text, userId } = req.body;

        const messagesService = new MessagesService();

        const message = await messagesService.create({
            adminId,
            text,
            userId
        });

        res.json(message);

    }

    async showByUser(req: Request, res: Response){

        const { userId } = req.params;

        const messagesService = new MessagesService();

        const messages = await messagesService.listByUser(userId);

        res.json(messages);

    }

}

export { MessagesController };