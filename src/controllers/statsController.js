import os from 'os';
import { config } from '../config/config.js';
import profileData from '../data/profile.json' with { type: 'json' };

function formatUptime(seconds) {
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  const parts = [];
  if (d > 0) parts.push(`${d}d`);
  if (h > 0) parts.push(`${h}h`);
  if (m > 0) parts.push(`${m}m`);
  parts.push(`${s}s`);
  return parts.join(' ');
}

export const getStats = (req, res) => {
  const uptimeSeconds = process.uptime();
  const memUsage = process.memoryUsage();

  const totalSkills = Object.values(profileData.skills).flat().length;
  const totalProjects = profileData.projects.length;
  const featuredProjects = profileData.projects.filter(p => p.featured).length;

  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    data: {
      server: {
        name: config.appName,
        version: config.version,
        environment: config.nodeEnv,
        startedAt: config.startTime.toISOString(),
        uptime: formatUptime(uptimeSeconds),
        uptimeSeconds: Math.floor(uptimeSeconds),
        nodeVersion: process.version,
        platform: process.platform,
        architecture: process.arch,
        cpuCount: os.cpus().length,
        memoryUsage: {
          rss: `${(memUsage.rss / 1024 / 1024).toFixed(2)} MB`,
          heapTotal: `${(memUsage.heapTotal / 1024 / 1024).toFixed(2)} MB`,
          heapUsed: `${(memUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`
        }
      },
      portfolioMetrics: {
        totalSkills,
        skillCategories: Object.keys(profileData.skills).length,
        totalProjects,
        featuredProjects,
        totalExperienceEntries: profileData.experience.length,
        totalEducationEntries: profileData.education.length,
        socialChannelsCount: profileData.socials.length
      }
    }
  });
};
