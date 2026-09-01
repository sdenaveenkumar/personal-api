import { profileData } from '../data/loader.js';

export const getSkills = (req, res) => {
  const { category, featured } = req.query;

  let skills = profileData.skills;

  // Filter by category if provided
  if (category) {
    const catLower = category.toLowerCase();
    if (skills[catLower]) {
      let catSkills = skills[catLower];
      if (featured !== undefined) {
        const isFeatured = featured === 'true' || featured === '1';
        catSkills = catSkills.filter(s => s.featured === isFeatured);
      }
      return res.json({
        success: true,
        status: 200,
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        category: catLower,
        count: catSkills.length,
        data: catSkills
      });
    } else {
      return res.status(404).json({
        success: false,
        status: 404,
        error: 'Category Not Found',
        message: `Skill category '${category}' does not exist. Available categories: ${Object.keys(skills).join(', ')}`
      });
    }
  }

  // If featured flag is present across all categories
  if (featured !== undefined) {
    const isFeatured = featured === 'true' || featured === '1';
    const filteredSkills = {};
    let totalCount = 0;

    for (const [catKey, list] of Object.entries(skills)) {
      const match = list.filter(s => s.featured === isFeatured);
      filteredSkills[catKey] = match;
      totalCount += match.length;
    }

    return res.json({
      success: true,
      status: 200,
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
      featuredOnly: isFeatured,
      totalCount,
      data: filteredSkills
    });
  }

  const allSkillsList = Object.values(skills).flat();

  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    categories: Object.keys(skills),
    totalCount: allSkillsList.length,
    data: skills
  });
};
