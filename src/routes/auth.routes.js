import { Router } from 'express';
import * as authController from '../controllers/auth.controller.js';
import { verifySignup } from '../middlewares/index.js';

const router = Router();

router.post('/signin', authController.signIn);
router.post('/signup', [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted], authController.signUp);

export default router;