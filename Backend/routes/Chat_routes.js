import express from 'express'
import Chat from '../controllers/Chat_Controller.js';
import Datasave from '../controllers/Datasave_Controller.js';
import { upload } from '../middleware/Fileupload.js';
const router = express.Router();

router.post("/chat",Chat)
// router.post("/data",upload.single("file"),Datasave)
router.post("/data",Datasave)



export default router;