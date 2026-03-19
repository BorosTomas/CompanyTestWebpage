function About() {
  const technologies = [
    {
      name: 'React',
      emoji: '⚛️',
      description:
        'Building dynamic, component-driven user interfaces with the industry-leading front-end library.',
    },
    {
      name: 'Node.js',
      emoji: '🟢',
      description:
        'Powering fast, scalable server-side applications and APIs with JavaScript everywhere.',
    },
    {
      name: 'C# / .NET',
      emoji: '🔷',
      description:
        'Delivering robust enterprise solutions with Microsoft\u2019s powerful development platform.',
    },
  ]

  return (
    <section id="about" className="about-section">
      <span className="section-label">About Us</span>
      <h2>Technologies We Work With</h2>
      <p className="section-description">
        TechVision is a forward-thinking software consultancy that
        partners with businesses to design, build, and ship high-quality digital
        products. Our team combines deep technical expertise with a passion for
        clean architecture.
      </p>
      <div className="tech-cards">
        {technologies.map((tech) => (
          <div key={tech.name} className="tech-card">
            <span className="tech-emoji">{tech.emoji}</span>
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
