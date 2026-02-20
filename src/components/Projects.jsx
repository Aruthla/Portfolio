import React from 'react'

const projectsData = [
  {
    title: 'Le Murmure des Runes',
    description: 'Plateforme de tirage de runes en ligne avec paiements Stripe, système de réservation Calendly et CMS intégré',
    tags: ['React', 'Node.js', 'Stripe', 'SASS'],
    link: 'https://github.com/Aruthla/tirage'
  },
  {
    title: 'Kasa - Location d\'appartements',
    description: 'Application web de location immobilière avec navigation React Router, carrousel d\'images et composants réutilisables',
    tags: ['React', 'React Router', 'SCSS'],
    link: 'https://github.com/Aruthla/Project7_Kasa'
  },
  {
    title: 'Hot Takes - API Sauces Piquantes',
    description: 'API REST sécurisée avec authentification JWT, upload d\'images et base de données MongoDB. Frontend Angular Material',
    tags: ['Angular', 'TypeScript', 'Node.js', 'MongoDB'],
    link: 'https://github.com/Aruthla/Project6_PIIQUANTE'
  },
  {
    title: 'Numérologie',
    description: 'Application web de calculs numérologiques avec interface interactive JavaScript',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    link: 'https://github.com/Aruthla/numerologie'
  },
  {
    title: 'Ohmyfood',
    description: 'Site web de réservation de restaurants avec animations CSS avancées et design mobile-first',
    tags: ['HTML5', 'CSS3', 'Animations'],
    link: 'https://github.com/Aruthla/Project3_Ohmyfood'
  },
  {
    title: 'Kanap - E-commerce',
    description: 'Site e-commerce avec panier dynamique, gestion de commandes et intégration API REST',
    tags: ['JavaScript', 'API REST', 'LocalStorage'],
    link: 'https://github.com/Aruthla/Project5_Kanap'
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
