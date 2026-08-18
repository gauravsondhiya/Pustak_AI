import express from 'express'
import Chat from '../controllers/Chat_Controller.js';
// import Datasave from '../controllers/Datasave_Controller.js';
// import { upload } from '../middleware/Fileupload.js';
import protected_routes from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/chat",protected_routes,Chat)

export default router;