import express from 'express'
import Chat_controller from '../controllers/Chat_controller.js';
import authMiddleware from '../middleware/authMiddleware.js'
import Datasave_controller from '../controllers/Datasave_controller.js'
import multer from "multer";

const upload = multer();
const router = express.Router();

router.get("/chat",authMiddleware,Chat_controller)
router.post("/datasave",upload.none(),Datasave_controller)



export default router;