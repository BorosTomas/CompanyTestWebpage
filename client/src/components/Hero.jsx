function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            IT Solutions Company
          </div>
          <h1>
            We Build <span className="highlight">Digital Products</span> That Drive Growth
          </h1>
          <p className="hero-subtitle">
            We help businesses transform their ideas into powerful digital solutions using cutting-edge technologies and modern development practices.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="cta-button">Get Started →</a>
            <a href="#services" className="cta-button-secondary">Our Services</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-graphic">
            <div className="hero-graphic-content">
              <span className="hero-graphic-icon">🚀</span>
              <p className="hero-graphic-text">
                Innovative solutions for modern businesses
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
