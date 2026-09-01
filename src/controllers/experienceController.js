import { profileData } from '../data/loader.js';

export const getExperience = (req, res) => {
  const { type } = req.query; // 'Full-time', 'Contract', etc.

  let experience = [...profileData.experience];

  if (type) {
    const typeLower = type.toLowerCase();
    experience = experience.filter(e => e.type.toLowerCase().includes(typeLower));
  }

  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    count: experience.length,
    data: experience
  });
};

export const getEducation = (req, res) => {
  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    count: profileData.education.length,
    data: profileData.education
  });
};
