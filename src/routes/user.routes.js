import { Router } from 'express'
import * as userController from '../controllers/user.controller.js'
import { authJwt } from '../middlewares/index.js'

const router = Router()

router.post('/', [
    authJwt.verifyToken,
    authJwt.isAdmin,
], userController.createUser)

export default router