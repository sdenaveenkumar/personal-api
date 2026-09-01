import { academicsData } from '../data/loader.js';

export const getAcademics = (req, res) => {
  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    data: academicsData
  });
};

export const getAcademicSummary = (req, res) => {
  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    data: {
      institution: academicsData.institution,
      summary: academicsData.summary,
      semesterSummary: academicsData.semesters.map(s => ({
        semester: s.semester,
        title: s.title,
        examSession: s.examSession,
        sgpa: s.sgpa,
        coursesCount: s.courses.length,
        status: s.status
      }))
    }
  });
};

export const getSemesters = (req, res) => {
  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    count: academicsData.semesters.length,
    data: academicsData.semesters
  });
};

export const getSemesterById = (req, res) => {
  const semNum = parseInt(req.params.semId, 10);

  const semester = academicsData.semesters.find(s => s.semester === semNum);

  if (!semester) {
    return res.status(404).json({
      success: false,
      status: 404,
      error: 'Semester Not Found',
      message: `Semester '${req.params.semId}' was not found. Valid semesters are 1 through 6.`,
      availableSemesters: [1, 2, 3, 4, 5, 6]
    });
  }

  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    data: semester
  });
};

export const getCourses = (req, res) => {
  const { grade, semester, q, minScore } = req.query;

  // Flatten all courses across semesters with semester metadata
  let allCourses = [];
  academicsData.semesters.forEach(s => {
    s.courses.forEach(c => {
      allCourses.push({
        ...c,
        semester: s.semester,
        semesterTitle: s.title,
        examSession: s.examSession
      });
    });
  });

  if (semester) {
    const semNum = parseInt(semester, 10);
    allCourses = allCourses.filter(c => c.semester === semNum);
  }

  if (grade) {
    // Gracefully handle query param where '+' might be decoded as a space 'A '
    const cleanGrade = grade.trim().toUpperCase();
    const plusGrade = cleanGrade.endsWith(' ') ? cleanGrade.trim() + '+' : cleanGrade;
    
    allCourses = allCourses.filter(c => {
      const cGrade = c.grade.toUpperCase();
      return cGrade === cleanGrade || cGrade === plusGrade || cGrade === `${cleanGrade}+`;
    });
  }

  if (minScore) {
    const min = parseInt(minScore, 10);
    if (!isNaN(min)) {
      allCourses = allCourses.filter(c => c.total >= min);
    }
  }

  if (q) {
    const searchLower = q.toLowerCase();
    allCourses = allCourses.filter(c => 
      c.name.toLowerCase().includes(searchLower) ||
      c.code.toLowerCase().includes(searchLower)
    );
  }

  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    count: allCourses.length,
    filters: {
      ...(semester && { semester }),
      ...(grade && { grade }),
      ...(minScore && { minScore }),
      ...(q && { q })
    },
    data: allCourses
  });
};
