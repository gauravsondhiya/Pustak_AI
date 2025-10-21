import express from 'express'
import Chat from '../controllers/Chat_Controller.js';
import Datasave from '../controllers/Datasave_Controller.js';

const router = express.Router();

router.post("/chat",Chat)
router.post("/data",Datasave)


export default router;