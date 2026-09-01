import { Router } from 'express';
import { getExperience, getEducation } from '../controllers/experienceController.js';

const router = Router();

router.get('/experience', getExperience);
router.get('/education', getEducation);

export default router;
