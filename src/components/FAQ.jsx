import React, { useState } from 'react'

const faqData = [
  {
    question: 'Comment se déroule la création du site ?',
    answer: `Vous prenez contact avec moi via mail et nous fixons ensemble une date pour une visio afin de déterminer ensemble votre projet. 

Une fois la visio terminée, nous reprenons rendez-vous une semaine plus tard afin que je vous remette le devis. Pendant cette semaine, vous pouvez me contacter à tout moment si vous souhaitez apporter des modifications majeures (ajout de pages, suppressions de pages, passage sur WordPress plutôt qu'une création complète ou vice-versa, etc.). 

Une fois le devis validé, un premier paiement sera demandé. Une fois le paiement reçu, je commence la création du site et je vous tiens informée tout au long du processus de création afin de vérifier que le site est bien conforme à vos attentes.`
  },
  {
    question: 'Puis-je payer en plusieurs fois ?',
    answer: 'Tout à fait.'
  }
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">Questions Fréquentes</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="faq-icon"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="faq-answer">
                {item.answer.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
