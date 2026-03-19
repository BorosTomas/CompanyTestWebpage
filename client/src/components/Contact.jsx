import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus({ type: 'success', text: 'Message sent successfully!' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', text: 'Something went wrong. Please try again.' })
      }
    } catch {
      setStatus({ type: 'error', text: 'Network error. Please try again later.' })
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-layout">
        <div className="contact-info">
          <span className="section-label">Get In Touch</span>
          <h2>Let&apos;s Build Something Great Together</h2>
          <p>
            Have a project in mind? We&apos;d love to hear about it. Reach out and
            let&apos;s explore how we can help bring your vision to life.
          </p>
          <ul className="contact-details">
            <li>
              <span className="contact-details-icon">📧</span>
              hello@techvision.dev
            </li>
            <li>
              <span className="contact-details-icon">📍</span>
              San Francisco, CA
            </li>
            <li>
              <span className="contact-details-icon">📞</span>
              +1 (555) 123-4567
            </li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell us about your project..."
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-button">Send Message →</button>
          {status && (
            <p className={`form-status ${status.type}`}>{status.text}</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
