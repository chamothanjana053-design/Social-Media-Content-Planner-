# Social Media Content Planner

## Group Information

| Student | ID | Role |
|---|---|---|
| Chamoth Anjana | ITBNM-2313-0003 | DevOps Engineer |
| Mindula Deenamulla | ITBNM-2313-0074 | Frontend Developer |
| Rasanga Bandara | ITBIN-2312-0002 | JavaScript / Backend Logic Developer |

---

## Project Description

The Social Media Content Planner is a web-based application designed to help users organize and schedule their social media posts efficiently. This project simulates a professional production environment by implementing industry-standard DevOps practices.

The system is built using HTML5, CSS3, and Vanilla JavaScript, ensuring a lightweight and fast user experience. It features automated CI/CD pipelines, containerization, and cloud deployment.

---

## Live Deployment

🔗 **Live URL:** [https://social-media-content-planner-ten.vercel.app/](https://social-media-content-planner-ten.vercel.app/)

---

## Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla JS)
- **Version Control:** Git & GitHub
- **CI/CD:** GitHub Actions
- **Containerization:** Docker & Docker Compose
- **Web Server:** Nginx (Production Stage)
- **Deployment:** Vercel & Docker Hub

---

## Features

- **Interactive Planner:** Plan and manage social media content easily.
- **Responsive Design:** Optimized for desktops, tablets, and mobile devices.
- **Real-time Logic:** JavaScript-driven functionality for a seamless experience.
- **Containerized Environment:** Guaranteed consistency across development and production using Docker.
- **Automated Workflows:** Fully integrated CI/CD for automated testing and deployment.

---

## Docker Setup

### Prerequisites

Ensure you have the following installed:
- [Docker Desktop](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

# 1. Clone the repository
git clone [https://github.com/chamothanjana053-design/Social-Media-Content-Planner-.git](https://github.com/chamothanjana053-design/Social-Media-Content-Planner-.git)
cd Social-Media-Content-Planner-

# 2. Build and start the container
docker compose up --build -d


---

### Building and Running with Docker Compose (Recommended)

This is the simplest way to run the containerised application.

bash
# Clone the repository


# Copy environment file
cp .env.example .env

# Build and start the container
docker compose up --build

# Run in detached (background) mode
docker compose up --build -d


The application will be accessible at: *http://localhost:8080*

---

### Stopping the Application

bash
# Stop and remove containers
docker compose down

# Stop, remove containers, and remove the built image
docker compose down --rmi local


---

### Building and Running Manually (without Docker Compose)

bash
# Build the Docker image
docker build -t unit-converter:latest .

# Run the container

Access at: **http://localhost:8080**

---








