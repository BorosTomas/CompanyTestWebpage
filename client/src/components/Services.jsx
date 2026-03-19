function Services() {
  const services = [
    {
      emoji: '🌐',
      title: 'Web Development',
      description:
        'Modern, responsive web applications built with React and Node.js',
    },
    {
      emoji: '🏢',
      title: 'Enterprise Solutions',
      description:
        'Scalable enterprise applications powered by C# and .NET',
    },
    {
      emoji: '☁️',
      title: 'Cloud Services',
      description:
        'Cloud-native solutions deployed on modern infrastructure',
    },
    {
      emoji: '📱',
      title: 'API Development',
      description:
        'RESTful APIs and microservices for seamless integration',
    },
  ]

  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <span className="service-emoji">{service.emoji}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
