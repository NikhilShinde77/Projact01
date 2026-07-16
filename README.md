# 🌐 Personal Portfolio Website

A fully responsive, modern personal portfolio website built with **HTML5, CSS3, and JavaScript (ES6+)** — showcasing my skills, projects, and journey as a developer.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222?style=for-the-badge&logo=github)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## 🔗 Live Demo

🚀 **[View Live Website](https://nikhilshinde77.netlify.app/#home)** &nbsp; | &nbsp; 📄 **[Download Resume](https://docs.google.com/document/d/1QI8PtJAFsjg97NlJeAREe5ygsgP3I38j29ccvW3I6AI/edit?usp=sharing)**

---

## 📸 Preview

| Desktop View | Mobile View |
|:---:|:---:|
| [View Website Screenshot](https://drive.google.com/file/d/1UNbQtT6TRC-mycXHXuofDrB3zi4m3Kbj/view?usp=drive_link) | [View Mobile Screenshot](https://drive.google.com/file/d/1pVQPtbnT5B-FHP8P2QkEY7FrxR0AT5so/view?usp=drive_link) |

> Screenshots are hosted on Google Drive. For a polished GitHub README, consider downloading these images and placing them inside an `assets/screenshots/` folder, then embedding them directly with `![Desktop Screenshot](assets/screenshots/desktop.png)` so they render inline instead of as links.

---

## ✨ Features

- 📱 **Responsive Navigation Bar** — collapses into a hamburger menu on smaller screens
- 🎯 **Hero Section** — eye-catching introduction with call-to-action buttons
- 👤 **About Me** — background, journey, and personal introduction
- 🛠️ **Skills Section** — visual representation of technical skills
- 💼 **Projects Showcase** — grid/card layout highlighting key projects with live links
- 📬 **Contact Form** — functional form to receive messages/enquiries
- 🔗 **Social Media Links** — quick access to LinkedIn, GitHub, Twitter, etc.
- 📄 **Resume Download Button** — one-click CV/resume download
- 🌙 **Dark Mode Toggle** *(Bonus)* — switch between light and dark themes, saved via `localStorage`
- 📐 **Fully Mobile Responsive** — built with Flexbox & CSS Grid for all screen sizes

---

## 🧰 Tech Stack

| Category | Technology |
|---|---|
| Markup | HTML5 (Semantic Elements) |
| Styling | CSS3, Flexbox, CSS Grid, Media Queries |
| Scripting | JavaScript (ES6+), DOM Manipulation |
| Version Control | Git & GitHub |
| Deployment | GitHub Pages / Vercel |
| Editor | VS Code |

---

## 📂 Folder Structure

```
personal-portfolio/
│
├── index.html              # Main HTML file
├── README.md               # Project documentation
│
├── css/
│   └── style.css           # All styles (layout, responsive, dark mode)
│
├── js/
│   └── script.js           # Navbar toggle, dark mode, counter app, form validation
│
├── assets/
│   ├── images/             # Profile picture, project thumbnails, icons
│   ├── resume/
│   │   └── resume.pdf      # Downloadable resume
│   └── screenshots/        # Website preview images for README
│
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- [VS Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/downloads)
- A GitHub account

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/personal-portfolio.git
cd personal-portfolio
```

### 2️⃣ Open in VS Code
```bash
code .
```

### 3️⃣ Run Locally
Simply open `index.html` in your browser, or use the **Live Server** extension in VS Code for auto-reload while editing.

---

## 🗂️ Git & GitHub Workflow (3-Day Plan)

A simple day-by-day guide for building, committing, and deploying this project using Git & GitHub.

### 📅 Day 1 — Setup & Structure
```bash
# Initialize Git in your project folder
git init

# Create your file structure (index.html, css/, js/, assets/)

# Stage and commit initial files
git add .
git commit -m "Initial commit: project structure and boilerplate HTML/CSS"

# Create a new repo on GitHub, then link it
git remote add origin https://github.com/your-username/personal-portfolio.git
git branch -M main
git push -u origin main
```
**Goal:** HTML skeleton + basic CSS reset pushed to GitHub.

### 📅 Day 2 — Build Core Sections
```bash
# After building Navbar, Hero, About, Skills, Projects sections
git add .
git commit -m "Add responsive navbar, hero, about, skills, and projects sections"
git push
```
**Goal:** All major sections styled and responsive using Flexbox/Grid.

### 📅 Day 3 — JavaScript, Polish & Deploy
```bash
# After adding contact form, dark mode toggle, counter app, and final polish
git add .
git commit -m "Add contact form, dark mode toggle, JS counter app, and final responsive fixes"
git push
```

**Then deploy:**

**Option A — GitHub Pages**
```bash
# Go to your repo on GitHub → Settings → Pages
# Under "Branch", select: main → /root → Save
# Your site will be live at:
# https://your-username.github.io/personal-portfolio/
```

**Option B — Vercel**
```bash
npm install -g vercel
vercel login
vercel
```
Follow the CLI prompts to deploy directly from your project folder.

**Goal:** Live, publicly accessible portfolio website. 🎉

---

## 🌙 Dark Mode Implementation (Quick Reference)

```javascript
const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// Load saved preference
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem(
    'theme',
    body.classList.contains('dark-mode') ? 'dark' : 'light'
  );
});
```

---

## 📚 Topics Covered

- Introduction to Web Development
- Internet & How the Web Works
- Frontend vs Backend
- HTML5 Fundamentals & Semantic HTML
- CSS3 Fundamentals
- Flexbox & CSS Grid
- Responsive Web Design
- JavaScript (ES6+) Basics
- DOM Manipulation & Events
- Git & GitHub Basics

---

## ✅ Hands-on Tasks Checklist

- [x] Set up VS Code, Git, and GitHub
- [x] Create first HTML webpage
- [x] Design a responsive landing page using HTML & CSS
- [x] Build a responsive navigation bar
- [x] Create responsive feature cards using Flexbox/Grid
- [x] Build a contact form with HTML & CSS
- [x] Develop a JavaScript Counter App
- [x] Implement a Dark Mode Toggle using JavaScript
- [x] Push all code to GitHub with a proper README
- [x] Deploy website using GitHub Pages or Vercel

---

## 🗺️ Roadmap / Future Improvements

- [ ] Add form submission backend (EmailJS / Formspree)
- [ ] Add scroll animations (AOS / Intersection Observer)
- [ ] Add project filtering by category/tech stack
- [ ] Add multi-language support
- [ ] Add blog section

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use it as a template for your own portfolio.

---

## 📬 Contact

**Your Name**
- 💼 LinkedIn: [linkedin.com/in/your-profile](#)
- 🐙 GitHub: [github.com/your-username](#)
- 🐦 Twitter/X: [@your-handle](#)
- ✉️ Email: your.email@example.com

---

<p align="center">⭐ If you like this project, consider giving it a star on GitHub!</p>
