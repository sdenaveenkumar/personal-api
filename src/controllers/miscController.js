import { profileData } from '../data/loader.js';

export const getPhilosophy = (req, res) => {
  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    data: profileData.philosophy
  });
};

export const getHobbies = (req, res) => {
  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    count: profileData.hobbies.length,
    data: profileData.hobbies
  });
};

export const getResume = (req, res) => {
  // Generates a standard JSON Resume schema formatted object
  const resume = {
    basics: {
      name: profileData.identity.name,
      label: profileData.identity.title,
      email: profileData.identity.email,
      url: profileData.identity.website,
      summary: profileData.bio.medium,
      location: {
        city: profileData.identity.location.city,
        country: profileData.identity.location.country,
        timezone: profileData.identity.location.timezone
      },
      profiles: profileData.socials.map(s => ({
        network: s.platform,
        username: s.username,
        url: s.url
      }))
    },
    work: profileData.experience.map(e => ({
      name: e.company,
      position: e.role,
      location: e.location,
      startDate: e.period.split(' - ')[0],
      endDate: e.period.split(' - ')[1] || 'Present',
      summary: e.summary,
      highlights: e.responsibilities
    })),
    education: profileData.education.map(ed => ({
      institution: ed.institution,
      area: ed.degree,
      studyType: "Degree / Specialization",
      startDate: ed.period.split(' - ')[0],
      endDate: ed.period.split(' - ')[1] || 'Present',
      highlights: ed.highlights
    })),
    skills: Object.entries(profileData.skills).map(([category, list]) => ({
      name: category,
      level: "Professional",
      keywords: list.map(item => item.name)
    })),
    projects: profileData.projects.map(p => ({
      name: p.title,
      description: p.description,
      highlights: p.highlights,
      keywords: p.tags,
      url: p.liveUrl || p.githubUrl
    })),
    interests: profileData.hobbies.map(h => ({
      name: h.title,
      keywords: [h.description]
    }))
  };

  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    schema: "https://jsonresume.org/schema/",
    data: resume
  });
};
