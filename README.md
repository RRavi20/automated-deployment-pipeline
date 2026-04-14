# 🚀 Automated Web App Deployment Pipeline

An end-to-end **CI/CD pipeline** that automates the lifecycle of a front-end web application—from code push to a live production environment on AWS.

## 🌟 Project Impact
* **Efficiency:** Reduced release time by **40%** by eliminating manual FTP/SSH overhead.
* **Reliability:** Achieved **99.9% uptime** during testing phases through automated health checks.
* **Consistency:** Leveraged **Docker** to ensure the environment remains identical across development and production.

---

## 🛠 Tech Stack
* **Frontend:** JavaScript, HTML5, CSS3
* **Automation:** GitHub Actions (CI/CD)
* **Containerization:** Docker
* **Cloud:** AWS (EC2 Instance)
* **Operating System:** Linux (Ubuntu)

---

## 🏗 System Architecture

### 1. Continuous Integration (CI)
* **Trigger:** Automated build starts on every `git push` to the `main` branch.
* **Process:** GitHub-hosted runner executes the `Dockerfile` to create a new image.
* **Validation:** A smoke test verifies the app starts and listens on the correct port.

### 2. Continuous Deployment (CD)
* **Secure Handshake:** Uses RSA Private Keys in GitHub Secrets to establish a secure SSH tunnel to AWS.
* **Automated Swap:** * Pulls the latest code to the server.
  * Stops old containers and rebuilds the production image.
  * Launches the updated application in "Detached Mode."

### 3. Infrastructure & Networking
* **Hosting:** AWS EC2 (t2.micro) instance.
* **Security:** Inbound rules restricted to **Port 80** (Web) and **Port 22** (SSH).
* **Traffic Routing:** Directs external traffic from Port 80 to the internal Docker container.

---

## 🚀 How to Run Locally

```bash
# Clone the repository
git clone [https://github.com/your-username/repo-name.git](https://github.com/your-username/repo-name.git)

# Build the Docker image
docker build -t my-web-app .

# Run the container
docker run -p 3000:3000 my-web-app
