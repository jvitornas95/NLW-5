import { Request, response, Response } from 'express';
import { SettingsService } from '../services/SettingsService';

class SettingsController{

    async create(req: Request, res: Response){

        var { chat, username } = req.body;

        const settingsService = new SettingsService();

        try {
            const settings = await settingsService.create({chat, username});

            return res.json(settings);
        } catch (error) {
            return res.status(400).json({
                message: error.message
            })
        }
    
        

    }

}

export { SettingsController };