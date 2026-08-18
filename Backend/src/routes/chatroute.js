import express from 'express'
import Chat_controller from '../controllers/Chat_controller.js';
import authMiddleware from '../middleware/authMiddleware.js'
const router = express.Router();


router.get("/chat",authMiddleware,Chat_controller)



export default router;