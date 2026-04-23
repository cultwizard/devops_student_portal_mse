# 🎓 Automated CI/CD Pipeline for a Dockerized Student Portal

![CI/CD Pipeline](https://img.shields.io/github/actions/workflow/status/cultwizard/devops_student_portal_mse/ci-cd.yml?label=CI%2FCD%20Pipeline&style=flat-square)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=flat-square&logo=docker)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=flat-square&logo=node.js)

---

## 📌 Project Overview

This project demonstrates a fully automated **CI/CD pipeline** for a Dockerized Student Portal application. The primary focus is on **DevOps practices** including containerization, continuous integration, automated testing, and cloud deployment.

> **MSE2 Group DevOps Project**

---

## 🏗️ Architecture

```
Developer Push
     ↓
GitHub Repository
     ↓
GitHub Actions CI/CD Pipeline
     ├── Install Dependencies
     ├── Run Automated Tests
     ├── Build Docker Image
     ├── Push to Docker Hub
     └── Deploy to Cloud
          ↓
     Live Application (Render/Railway)
```

---

## 👥 Team Members & Contributions

| Student | Role | Contribution |
|---------|------|-------------|
| Saatyak | Foundation & Dockerisation | Repo setup, App foundation, Docker & Docker Compose |
| Ram | DevOps Engineer | GitHub Actions CI/CD Pipeline |
| Sachin | QA Engineer | Automated Testing (Jest + Supertest) |
| Pratik | Deployment Engineer | Cloud Deployment & Scripts |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Node.js + Express.js |
| Containerization | Docker + Docker Compose |
| CI/CD | GitHub Actions |
| Container Registry | Docker Hub |
| Deployment | Render / Railway |
| Testing | Jest + Supertest |

---

## 🚀 Getting Started

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed
- [Node.js](https://nodejs.org/) (v18+)
- [Git](https://git-scm.com/)

### Run Locally with Docker (Recommended)

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/devops-student-portal.git
cd devops-student-portal

# 2. Start with Docker Compose
docker-compose up --build

# 3. Open in browser
# http://localhost:3000
```

### Run Locally without Docker

```bash
# 1. Install dependencies
cd app
npm install

# 2. Start the server
npm start

# 3. Visit http://localhost:3000
```

---

## 🔁 CI/CD Pipeline

The pipeline triggers automatically on every **push** or **pull request** to `main`.

### Pipeline Stages:

```
Push to GitHub
     ↓
[1] Checkout Code
     ↓
[2] Install Dependencies
     ↓
[3] Run Tests (Jest)
     ↓
[4] Build Docker Image
     ↓
[5] Push to Docker Hub
     ↓
[6] Deploy to Cloud
```

Pipeline configuration: `.github/workflows/ci-cd.yml`

---

## 🧪 Running Tests

```bash
cd app
npm test
```

Tests cover:
- ✅ `GET /` — serves the student portal page
- ✅ `GET /api/students` — returns student data
- ✅ `GET /health` — health check endpoint

---

## 🐳 Docker Commands

```bash
# Build the image
docker build -t student-portal .

# Run the container
docker run -p 3000:3000 student-portal

# Using Docker Compose
docker-compose up --build     # Start
docker-compose down           # Stop
```

---

## 🌐 Live Deployment

🔗 **Live URL**: `https://YOUR_APP.onrender.com` *(updated after deployment)*

---

## 📁 Project Structure

```
devops-student-portal/
├── app/
│   ├── index.html          # Student Portal frontend
│   ├── server.js           # Express.js backend
│   └── package.json        # Node.js dependencies & scripts
├── tests/
│   └── app.test.js         # Automated test suite
├── scripts/
│   └── deploy.sh           # Deployment script
├── .github/
│   └── workflows/
│       └── ci-cd.yml       # GitHub Actions pipeline
├── Dockerfile              # Container build instructions
├── docker-compose.yml      # Multi-container orchestration
├── .dockerignore           # Files excluded from Docker build
└── README.md               # This file
```

---

## 🤝 Contributing (For Team Members)

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/devops-student-portal.git

# 2. Create your feature branch
git checkout -b feature/your-task-name

# 3. Make your changes and commit
git add .
git commit -m "feat: describe your changes"

# 4. Push your branch
git push origin feature/your-task-name

# 5. Open a Pull Request on GitHub
```

---

## 📄 License

This project is for educational purposes — MSE2 Group DevOps Assignment.
