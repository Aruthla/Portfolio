import React from 'react'

const projectsData = [
  {
    title: 'Le Murmure des Runes',
    description: 'Plateforme de tirage de runes en ligne avec paiements Stripe, système de réservation Calendly et CMS intégré',
    tags: ['React', 'Node.js', 'Stripe', 'SASS'],
    link: 'https://github.com/Aruthla/tirage'
  },
  {
    title: 'Christine Bordé - Graphiste & Illustratrice',
    description: 'Site vitrine professionnel créé avec Faaster (anciennement ThemeCloud) pour présenter le portfolio d\'une graphiste et illustratrice',
    tags: ['Faaster', 'ThemeCloud', 'No-Code'],
    link: 'https://christineborde.com/'
  }
]

function Projects() {
  return (
    <section id="projets" className="projects">
      <div className="container">
        <h2 className="section-title">Mes Projets</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    Voir le projet
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
