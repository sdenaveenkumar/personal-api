import { profileData } from '../data/loader.js';

export const getProfile = (req, res) => {
  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    data: profileData.identity
  });
};

export const getBio = (req, res) => {
  const { format } = req.query; // 'short', 'medium', 'long', 'markdown'

  if (format && profileData.bio[format]) {
    return res.json({
      success: true,
      status: 200,
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
      format,
      data: profileData.bio[format]
    });
  }

  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    data: profileData.bio
  });
};
