import { Router } from 'express';
import profileRoutes from './profile.js';
import skillsRoutes from './skills.js';
import projectsRoutes from './projects.js';
import experienceRoutes from './experience.js';
import academicsRoutes from './academics.js';
import socialsRoutes from './socials.js';
import statsRoutes from './stats.js';
import miscRoutes from './misc.js';
import { getDirectoryIndex } from '../app.js';

const router = Router();

// API Root Index Directory
router.get('/', (req, res) => {
  res.json(getDirectoryIndex(req));
});

// Mount child route modules
router.use('/', profileRoutes);
router.use('/', skillsRoutes);
router.use('/', projectsRoutes);
router.use('/', academicsRoutes);
router.use('/', experienceRoutes);
router.use('/', socialsRoutes);
router.use('/', statsRoutes);
router.use('/', miscRoutes);

export default router;
