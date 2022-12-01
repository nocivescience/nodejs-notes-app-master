import {Router} from 'express';
import { renderContact } from '../controllers/contact.controllers.js';
const router= Router();
router.get('/contact', renderContact);
export default router;