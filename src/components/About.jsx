import React, { useEffect, useRef, useState } from 'react'

function About() {
  const [stats, setStats] = useState({ projects: 0, years: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateStats()
          setHasAnimated(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateStats = () => {
    const duration = 2000
    const targets = { projects: 13, years: 2 }
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      setStats({
        projects: Math.floor(targets.projects * progress),
        years: Math.floor(targets.years * progress)
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }

  return (
    <section id="apropos" className="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Passionnée par le développement web, je crée des expériences digitales uniques et performantes.</p>
            <p>Mon objectif est de transformer vos idées en solutions web innovantes, alliant esthétique et fonctionnalité.</p>
            <p>Avec une expertise en développement front-end et back-end, je propose des solutions complètes adaptées à vos besoins.</p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3 className="stat-number">{stats.projects}</h3>
              <p>Projets réalisés</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">{stats.years}</h3>
              <p>Années d'expérience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
