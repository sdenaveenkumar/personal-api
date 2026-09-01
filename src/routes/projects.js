import { Router } from 'express';
import { getProjects, getProjectBySlug } from '../controllers/projectsController.js';

const router = Router();

router.get('/projects', getProjects);
router.get('/projects/:slug', getProjectBySlug);

export default router;
