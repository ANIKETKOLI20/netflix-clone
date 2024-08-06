import express from "express";
import  { Signup , Login , Logout , authCheck }  from '../controllers/auth.controller.js'
import  { protectRoute } from '../middleware/protectRoute.js'

const router = express.Router()

router.post("/signup" , Signup)
router.post("/login" , Login)
router.post("/logout" , Logout)
router.get("/authCheck" ,  protectRoute ,  authCheck) // whenever authorized user login he will redirect to home page

export default router;