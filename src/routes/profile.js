import { Router } from 'express';
import { getProfile, getBio } from '../controllers/profileController.js';

const router = Router();

router.get('/profile', getProfile);
router.get('/bio', getBio);

export default router;
