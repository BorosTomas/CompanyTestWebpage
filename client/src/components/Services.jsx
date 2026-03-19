function Services() {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description:
        'Modern, responsive web applications built with React, Next.js, and Node.js for optimal performance.',
    },
    {
      icon: '🏢',
      title: 'Enterprise Solutions',
      description:
        'Scalable enterprise applications powered by C#, .NET, and cloud-native architectures.',
    },
    {
      icon: '☁️',
      title: 'Cloud Services',
      description:
        'Cloud-native solutions deployed on AWS, Azure, and GCP with DevOps best practices.',
    },
    {
      icon: '📱',
      title: 'API Development',
      description:
        'RESTful APIs and microservices architecture for seamless system integration.',
    },
  ]

  return (
    <section id="services" className="services-section">
      <span className="section-label">What We Do</span>
      <h2>Our Services</h2>
      <p className="section-description">
        We deliver end-to-end digital solutions tailored to your business needs,
        from concept to deployment and beyond.
      </p>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
