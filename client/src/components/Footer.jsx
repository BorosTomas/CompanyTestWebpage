function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-about">
            <p className="footer-brand">
              <span className="footer-brand-icon">⚡</span>
              TechVision
            </p>
            <p>
              Building innovative digital solutions that help businesses grow and succeed in the modern world.
            </p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Cloud Services</a></li>
              <li><a href="#services">API Development</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="#contact">Email Us</a></li>
              <li><a href="#contact">Support</a></li>
              <li><a href="#contact">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 TechVision Solutions. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#" className="footer-social-link" aria-label="GitHub">⌂</a>
            <a href="#" className="footer-social-link" aria-label="LinkedIn">in</a>
            <a href="#" className="footer-social-link" aria-label="Twitter">𝕏</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
