import express from 'express';
import * as controller from '../controllers/user.controller.js';
import { info_log } from '../middlewares/log.js';

const router = express.Router();
router.get('/', info_log, controller.getUsers);

router.post('/', controller.createUser);

router.put('/:id', controller.updateUser);

router.delete('/:id', controller.deleteUser);

export default router;
