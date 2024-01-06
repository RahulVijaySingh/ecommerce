import express from 'express'
import { registerController, loginController, testController, forgotPasswordController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMidddleware.js';

const router = express.Router();

// regestration route
router.post('/register', registerController);

// login route 
router.post('/login', loginController);

// forgot password  ||  POSTT
router.post('/forgot-password', forgotPasswordController)


router.get('/test', requireSignIn, isAdmin, testController)     //requireSignIn isAdmin is mmiddele ware       //token based ke liye aise krte hai routing
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true })
})

export default router