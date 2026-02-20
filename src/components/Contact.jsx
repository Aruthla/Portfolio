import React from 'react'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contactez-moi</h2>
        <div className="contact-content">
          <div className="contact-intro">
            <h3>Travaillons ensemble</h3>
            <p>Vous avez un projet en tête ? N'hésitez pas à me contacter, je serais ravie d'en discuter avec vous.</p>
          </div>
          <div className="contact-cta">
            <a href="mailto:laetitia.cli@live.fr" className="btn btn-primary btn-large">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>laetitia.cli@live.fr</span>
            </a>
            <p className="contact-note">Cliquez pour m'envoyer un email</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
