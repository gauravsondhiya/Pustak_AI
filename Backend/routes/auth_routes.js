import express from "express";
import Signin_Controller from "../controllers/Signin_Controller.js";
import Login_Controller from '../controllers/Login_Controller.js'
import Protected_routes from "../controllers/Protected_routes.js";
const router = express.Router();

router.post("/signin", Signin_Controller)
router.post("/login",Login_Controller )
router.post("/checking",Protected_routes)

export default router;
