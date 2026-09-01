import { Router } from 'express';
import { getSocials, getContact, submitContact } from '../controllers/socialsController.js';

const router = Router();

router.get('/socials', getSocials);
router.get('/contact', getContact);
router.post('/contact', submitContact);

export default router;
