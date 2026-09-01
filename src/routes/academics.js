import { Router } from 'express';
import {
  getAcademics,
  getAcademicSummary,
  getSemesters,
  getSemesterById,
  getCourses
} from '../controllers/academicsController.js';

const router = Router();

router.get('/academics', getAcademics);
router.get('/academics/summary', getAcademicSummary);
router.get('/academics/semesters', getSemesters);
router.get('/academics/semesters/:semId', getSemesterById);
router.get('/academics/courses', getCourses);

export default router;
