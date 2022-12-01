import {Router} from 'express';
import { renderHome } from '../controllers/home.controllers.js';
const router= Router();
router.get('/home', renderHome);
export default router;