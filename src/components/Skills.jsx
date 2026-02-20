import React from 'react'

const skillsData = [
  {
    title: 'React & JavaScript',
    description: 'React, JavaScript ES6+, JSX, Hooks',
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    )
  },
  {
    title: 'SASS/CSS & HTML5',
    description: 'SASS, CSS3, HTML5, Responsive Design',
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  },
  {
    title: 'Node.js & Express',
    description: 'Node.js, Express, MongoDB, REST API',
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    )
  },
  {
    title: 'TypeScript',
    description: 'TypeScript, Typage statique, Interfaces',
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    title: 'WordPress & Faaster',
    description: 'WordPress, Hébergement, Gestion de contenu',
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    title: 'APIs & Intégrations',
    description: 'Stripe, EmailJS, REST APIs, JWT Auth',
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6m0 6v6m5.196-13.196l-4.243 4.243m0 6l-4.243 4.243m13.196-5.196l-6 0m-6 0l-6 0m13.196 5.196l-4.243-4.243m0-6l-4.243-4.243" />
      </svg>
    )
  },
  {
    title: 'Git & Déploiement',
    description: 'Git, GitHub, Netlify, GitHub Actions',
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
]

function Skills() {
  return (
    <section id="competences" className="skills">
      <div className="container">
        <h2 className="section-title">Mes Compétences</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
