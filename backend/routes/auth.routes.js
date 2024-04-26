import express from 'express'
import { loginUser, logoutUser,signUp } from '../controllers/auth.controller.js'

const router=express.Router()

router.post("/login",loginUser)
router.post("/logout",logoutUser)
router.post("/signup",signUp)

export default router