const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// --- Routes ---

// Serve the frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint (used by CI/CD pipeline)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Student Portal is running' });
});

// Get all students (mock data)
app.get('/api/students', (req, res) => {
  const students = [
    { id: 1, name: 'Saatyak', role: 'Foundation & Dockerisation', branch: 'CSE', year: 3 },
    { id: 2, name: 'Ram',     role: 'CI/CD Pipeline',             branch: 'CSE', year: 3 },
    { id: 3, name: 'Sachin',  role: 'Automated Testing',          branch: 'CSE', year: 3 },
    { id: 4, name: 'Pratik',  role: 'Deployment Engineer',        branch: 'CSE', year: 3 },
  ];
  res.status(200).json({ success: true, data: students });
});

// Get project info
app.get('/api/project', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      name: 'Automated CI/CD Pipeline for a Dockerized Student Portal',
      tech: ['Docker', 'GitHub Actions', 'Node.js', 'Express', 'Jest'],
      team: 4,
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Student Portal running on http://localhost:${PORT}`);
});

module.exports = app; // exported for testing by Sachin
