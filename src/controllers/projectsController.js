import profileData from '../data/profile.json' with { type: 'json' };

export const getProjects = (req, res) => {
  const { featured, tag, category, q } = req.query;

  let projects = [...profileData.projects];

  // Filter by featured
  if (featured !== undefined) {
    const isFeatured = featured === 'true' || featured === '1';
    projects = projects.filter(p => p.featured === isFeatured);
  }

  // Filter by tag
  if (tag) {
    const tagLower = tag.toLowerCase();
    projects = projects.filter(p => 
      p.tags.some(t => t.toLowerCase().includes(tagLower))
    );
  }

  // Filter by category
  if (category) {
    const catLower = category.toLowerCase();
    projects = projects.filter(p => 
      p.category.toLowerCase().includes(catLower)
    );
  }

  // Search query in title, tagline, or description
  if (q) {
    const searchLower = q.toLowerCase();
    projects = projects.filter(p => 
      p.title.toLowerCase().includes(searchLower) ||
      p.tagline.toLowerCase().includes(searchLower) ||
      p.description.toLowerCase().includes(searchLower) ||
      p.tags.some(t => t.toLowerCase().includes(searchLower))
    );
  }

  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    count: projects.length,
    total: profileData.projects.length,
    filters: {
      ...(featured !== undefined && { featured }),
      ...(tag && { tag }),
      ...(category && { category }),
      ...(q && { q })
    },
    data: projects
  });
};

export const getProjectBySlug = (req, res) => {
  const { slug } = req.params;
  const project = profileData.projects.find(p => p.slug === slug || p.id === slug);

  if (!project) {
    return res.status(404).json({
      success: false,
      status: 404,
      error: 'Project Not Found',
      message: `No project found with slug or ID '${slug}'.`,
      availableProjects: profileData.projects.map(p => p.slug)
    });
  }

  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    data: project
  });
};
