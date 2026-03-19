function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-brand">
          <span className="navbar-brand-icon">⚡</span>
          TechVision
        </a>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact" className="navbar-cta">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
