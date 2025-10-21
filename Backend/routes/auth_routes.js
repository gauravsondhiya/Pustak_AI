import express from "express";
import Signin_Controller from "../controllers/Signin_Controller.js";
import Login_Controller from '../controllers/Login_Controller.js'
const router = express.Router();

router.post("/signin", Signin_Controller)
router.post("/login",Login_Controller )

export default router;
