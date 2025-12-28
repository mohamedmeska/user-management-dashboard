import { Router } from 'express';
import * as UserController from './user.controller';

const router = Router();

router.get('/', UserController.getUsers);
router.post('/', UserController.addUser);

export default router;
