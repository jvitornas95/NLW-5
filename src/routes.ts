import { Router } from "express";

import { SettingsController } from "./controller/SettingsController";
import { UsersController } from "./controller/UsersController";
import { MessagesController} from './controller/MessagesController'

const routes = Router();
const usersController = new UsersController();
const settingsController = new SettingsController();
const messagesController = new MessagesController();

routes.post('/settings', settingsController.create);
routes.post('/users', usersController.create);
routes.post('/messages', messagesController.create);
routes.get('/messages/:userId', messagesController.showByUser);

export { routes }