import express from 'express'
import { registerController, loginController } from '../controllers/authController.js';

const router = express.Router();

// regestration route
router.post('/register', registerController);

// login route 
router.post('/login', loginController);

export default router