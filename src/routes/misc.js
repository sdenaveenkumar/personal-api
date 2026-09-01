import { Router } from 'express';
import { getPhilosophy, getHobbies, getResume } from '../controllers/miscController.js';

const router = Router();

router.get('/philosophy', getPhilosophy);
router.get('/hobbies', getHobbies);
router.get('/resume', getResume);

export default router;
