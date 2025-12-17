# 🚀 Tanish — Full-Stack Web Developer Portfolio

A modern, production-ready personal portfolio built with **React, Tailwind CSS, shadcn/ui,Tailark and Firebase with Cloudinary**, showcasing projects, tools, and real-world development experience.

Live projects are managed dynamically via **Firestore**, with an **admin-only panel** for adding, updating, and deleting content.

---



## 🧩 Features

- ⚡ Modern UI using Tailwind CSS + shadcn/ui  
- 🌙 Dark mode with polished gradients and glassmorphism  
- 📂 Dynamic Projects Section (Firestore-backed)  
- 🔐 Admin Panel  
  - Login with Firebase Auth  
  - Add / Edit / Delete projects  
- 🖼️ Image support (local / storage-ready)  
- 📱 Fully responsive  
- 🎯 Clean component-based architecture  
- 📄 Resume download (served from public assets)  

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- shadcn/ui
- Tailark
- Lucide Icons
- React Router

### Backend / Services
- Firebase
  - Firestore (Projects data)
  - Authentication (Admin access)
- Firebase Storage (optional / configurable)

---

## 📁 Project Structure

```bash
src/
├── components/
│   ├── HeroSection.jsx
│   ├── ProjectsSection.jsx
│   ├── ProjectCard.jsx
│   ├── ContactSection.jsx
│   ├── AdminLogin.jsx
│   ├── UploadPanel.jsx
│   └── ...
├── hooks/
│   └── useProject.js
├── lib/
│   ├── firebase.js
│   └── projectActions.js
├── pages/
│   └── (routes)
├── App.jsx
└── main.jsx

public/
└── resume.pdf
