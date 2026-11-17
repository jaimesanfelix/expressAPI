import express from 'express';
import * as controller from '../controllers/user.controller.js';
import auth from '../middlewares/auth.js';
import { info_log } from '../middlewares/log.js';

const router = express.Router();
router.get('/', info_log, controller.getUsers);
router.post('/', controller.createUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);
router.get('/profile', auth, controller.getUserProfile);

export default router;
