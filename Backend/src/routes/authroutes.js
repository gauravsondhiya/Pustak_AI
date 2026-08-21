import express from 'express';
import Login_Controller from '../controllers/Login_controller.js';
import Signup_controller from '../controllers/Signup_controller.js';
import authMiddleware from '../middleware/authMiddleware.js';
import LoginCheck_controller from '../controllers/LoginCheck_controller.js';
import Logout_controller from '../controllers/Logout_controller.js';


const router = express.Router();


router.post("/login",Login_Controller)
router.post("/signup",Signup_controller)
router.post("/logout",Logout_controller)
router.get("/login_check",authMiddleware,LoginCheck_controller)


export default router;