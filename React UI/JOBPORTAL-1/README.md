# 🚀 JOB PORTAL

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-v18+-61DAFB.svg?logo=react)
![Tailwind](https://img.shields.io/badge/TailwindCSS-v3-38BDF8?logo=tailwindcss)
![Netlify](https://img.shields.io/badge/Hosted%20on-Netlify-00C7B7?logo=netlify)
![JSON Server](https://img.shields.io/badge/Mock%20API-JSON%20Server-green?logo=json)

A modern, responsive Job Portal UI built with **React.js**, **Vite**, **Tailwind CSS**, and a **mock backend using JSON Server**. The app is designed for performance and ease of customization, ideal for developers building job listing platforms or learning full-stack concepts.

---

## 📚 Table of Contents

- [🌟 Features](#-features)
- [🖥️ Demo](#️-demo)
- [📦 Tech Stack](#-tech-stack)
- [📁 Folder Structure](#-folder-structure)
- [🚀 Getting Started](#-getting-started)
- [⚙️ Scripts](#️-scripts)
- [🌐 Deployment](#-deployment)
- [📌 TODOs](#-todos)
- [🤝 Contribution](#-contribution)
- [📄 License](#-license)

---

## 🌟 Features

✅ Fast and optimized with **Vite**  
✅ Clean, responsive UI using **Tailwind CSS**  
✅ Modular **React components**  
✅ JSON Server mock backend for local data  
✅ API abstraction for easy integration  
✅ Netlify Functions support for serverless operations  
✅ Easily deployable to Netlify or Vercel  

---

## 🖥️ Demo

> 🚧 Live demo coming soon!  
> Alternatively, clone the repo and follow instructions below to run locally.

---

## 📦 Tech Stack

| Category       | Technology       |
|----------------|------------------|
| Frontend       | React 18, Vite    |
| Styling        | Tailwind CSS     |
| Backend (Mock) | JSON Server      |
| Deployment     | Netlify + Netlify Functions |
| Language       | JavaScript (ES6+) |

---

## 📁 Folder Structure
JOBPORTAL-1/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx
├── netlify/
│   └── functions/
│       └── jobs.cjs
├── package.json
├── vite.config.js
├── tailwind.config.js
└── netlify.toml

---

## 🚀 Getting Started

## 🔧 Prerequisites

- Node.js (v18 or higher)
- npm
- Netlify CLI (optional, for serverless functions)

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/GVHemanth1/Projects.git
cd Projects/React UI/JOBPORTAL-1

# Install frontend dependencies
npm install

# Start JSON Server (mock API)
npm run server

# Start React app
npm run dev
Access the app at: http://localhost:5173
JSON Server runs at: http://localhost:8000
```

## ⚙️ Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start development server         |
| `npm run build`   | Create production-ready build    |
| `npm run preview` | Preview production build locally |
| `npm run server`  | Run JSON Server for mock API     |


## 🌐 Deployment (Netlify)

## Step 1: Install Netlify CLI (if not installed)
```
npm install -g netlify-cli
```

## Step 2: Start Netlify dev server
```
netlify dev
```
This will serve the frontend along with Netlify serverless functions (```jobs.cjs```).

## Step 3: Deploy
```
netlify deploy --prod
```
## 📌 TODOs

- [x] Create base layout with navigation
- [x] Job listing and filtering UI
- [x] Integrate JSON Server for job data
- [ ] Add job detail and apply pages
- [ ] Admin panel for managing jobs
- [ ] Authentication (Firebase/Auth0)
- [ ] Integrate with real backend (Node.js/Express)


## 🤝 Contribution
Contributions are welcome!

```
# Fork the repo
# Create a new branch: git checkout -b feature-name
# Commit your changes
# Push to your branch
# Open a pull request
```
Please ensure your code adheres to project conventions and is well-documented.

## 📄 License
This project is licensed under the MIT License — see the LICENSE file for details.

## 💬 Feedback
If you find bugs or have suggestions, feel free to open an issue or reach out on LinkedIn.

## **🌟 Connect with Me**

<div align="left">
<a href="https://www.linkedin.com/in/venkata-hemanth-guddanti-249bb812a/"><img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="LinkedIn logo" /></a>
</div>
