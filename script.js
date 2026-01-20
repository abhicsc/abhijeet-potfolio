 // 1. DATA OBJECT (Simulating React State/Props)
 const resumeData = {
  experience: [
      {
          company: "Cybite",
          role: "Frontend Developer Intern",
          date: "Sep 2024 – Present",
          location: "Remote",
          details: [
              "Developed responsive UIs using HTML5, CSS3, and JavaScript ensuring cross-browser compatibility.",
              "Implemented modern architectures using React.js and Redux for state management.",
              "Translated UI/UX wireframes into high-quality, pixel-perfect code.",
              "Optimized web apps using code splitting and lazy loading, reducing page load times.",
              "Participated in code reviews and established coding standards."
          ]
      }
  ],
  projects: [
      {
          title: "Nike-Inspired E-Commerce Platform",
          tech: ["HTML5", "CSS3", "Vanilla JS"],
          desc: "A fully responsive e-commerce site with dynamic products, cart, and checkout. Features mobile-first design, interactive UI components like carousels and filters, optimized for performance via efficient DOM manipulation.",
          patternClass: "pattern-1"
      },
      {
          title: "Resume Builder Application",
          tech: ["JavaScript", "HTML5", "CSS3"],
          desc: "Interactive web app to create ATS-friendly resumes with real-time previews. Includes form validation, local storage persistence, and modular JS components for PDF export functionality.",
          patternClass: "pattern-2"
      },
      {
          title: "QR Code Scanner & Generator",
          tech: ["JS", "Canvas API", "WebRTC"],
          desc: "Web-based tool using Canvas API for generation and WebRTC for real-time camera scanning. Supports URLs, text, and contacts. Features an intuitive UI with error handling mechanisms.",
          patternClass: "pattern-3"
      }
  ]
};

// 2. RENDER FUNCTIONS (Component-like structure)

// Render Experience
function renderExperience() {
  const container = document.getElementById('experience-container');
  let html = '';

  resumeData.experience.forEach(exp => {
      let detailsHtml = exp.details.map(item => `<li>${item}</li>`).join('');
      
      html += `
          <div class="timeline-item">
              <div class="timeline-dot"></div>
              <span class="timeline-date">${exp.date}</span>
              <div class="timeline-content">
                  <h3>${exp.role}</h3>
                  <h4>${exp.company} | ${exp.location}</h4>
                  <ul>${detailsHtml}</ul>
              </div>
          </div>
      `;
  });

  container.innerHTML = html;
}

// Render Projects
function renderProjects() {
  const container = document.getElementById('projects-container');
  let html = '';

  resumeData.projects.forEach(proj => {
      let techHtml = proj.tech.map(t => `<span class="tech-pill">${t}</span>`).join('');

      html += `
          <div class="project-card">
              <div class="project-img ${proj.patternClass}">
                  <i class="fas fa-code"></i>
              </div>
              <div class="project-content">
                  <div class="project-tech">${techHtml}</div>
                  <h3 class="project-title">${proj.title}</h3>
                  <p class="project-desc">${proj.desc}</p>
                  <a href="#" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
              </div>
          </div>
      `;
  });

  container.innerHTML = html;
}

// 3. INITIALIZATION & ANIMATIONS
document.addEventListener('DOMContentLoaded', () => {
  renderExperience();
  renderProjects();

  // Scroll Animation Observer
  const observerOptions = {
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
  });
});

// Navbar Active State on Scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLi = document.querySelectorAll('.nav-links a');
  
  let current = '';
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 150) {
          current = section.getAttribute('id');
      }
  });

  navLi.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href').includes(current)) {
          a.classList.add('active');
      }
  });
});