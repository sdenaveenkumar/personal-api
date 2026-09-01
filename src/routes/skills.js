import { Router } from 'express';
import { getSkills } from '../controllers/skillsController.js';

const router = Router();

router.get('/skills', getSkills);

export default router;
