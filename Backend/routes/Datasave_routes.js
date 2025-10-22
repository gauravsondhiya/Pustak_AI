
import express from 'express'
import Url_Controller from '../controllers/Url_Controller.js';
const router = express.Router();


router.post("/url",Url_Controller)

export default router;