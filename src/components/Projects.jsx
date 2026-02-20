import React from 'react'

const projectsData = [
  {
    title: 'Le Murmure des Runes',
    description: 'Plateforme de tirage de runes en ligne avec paiements Stripe, système de réservation Calendly et CMS intégré',
    tags: ['React', 'Node.js', 'Stripe', 'SASS'],
    link: 'https://secretsdesrunes.com/',
    image: `${import.meta.env.BASE_URL}tirage-runes.jpg`
  },
  {
    title: 'Christine Borde - Tarologue',
    description: 'Site vitrine professionnel pour une tarologue, hébergé sur Faaster (anciennement ThemeCloud), une solution WordPress tout-en-un',
    tags: ['Faaster', 'WordPress', 'Hébergement'],
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
                {project.image && <img src={project.image} alt={project.title} />}
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
