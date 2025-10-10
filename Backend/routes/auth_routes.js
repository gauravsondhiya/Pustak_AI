import express from "express";
import Signin_Controller from "../controllers/Signin_Controller.js";
import Login from '../controllers/Login.js'
const router = express.Router();

router.post("/signin", Signin_Controller)
router.post("/login",Login )
export default router;
