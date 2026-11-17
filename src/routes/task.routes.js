import express from 'express';
import * as controller from '../controllers/task.controller.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

// router.get('/', auth, controller.getTasks);
router.post('/', auth, controller.createTask);
// router.put('/:id', auth, controller.updateTask);
// router.delete('/:id', auth, controller.deleteTask);
// router.get('/profile', auth, controller.getUserProfile);

export default router;
