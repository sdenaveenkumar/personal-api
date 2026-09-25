import { Router } from 'express';
import { getSocials, getContact, submitContact } from '../controllers/socialsController.js';
import { contactRateLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.get('/socials', getSocials);
router.get('/contact', getContact);
router.post('/contact', contactRateLimiter, submitContact);

export default router;
