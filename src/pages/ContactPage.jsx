import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, open a mailto link. Replace with API endpoint later.
    const mailtoLink = `mailto:hello@tootriv.com?subject=${encodeURIComponent(form.subject || 'Website Enquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.open(mailtoLink, '_blank')
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have questions about TooTriv? We'd love to hear from you."
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="contact-form-card">
                <h2>Send Us a Message</h2>
                {submitted ? (
                  <div className="contact-success">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                    <h3>Thank you!</h3>
                    <p>Your email client should have opened. If it didn't, please email us directly at <a href="mailto:hello@tootriv.com">hello@tootriv.com</a>.</p>
                    <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send Another</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <select id="subject" name="subject" value={form.subject} onChange={handleChange} required>
                        <option value="">Select a topic</option>
                        <option value="Employer Partnership">Employer Partnership</option>
                        <option value="Employee Enquiry">Employee Enquiry</option>
                        <option value="Investment">Investment</option>
                        <option value="Press & Media">Press & Media</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows="5" placeholder="Tell us how we can help…" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-full">Send Message</button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <div className="contact-info-stack">
              <ScrollReveal delay={150}>
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <h3>Email</h3>
                  <a href="mailto:hello@tootriv.com">hello@tootriv.com</a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <h3>Office</h3>
                  <p>2 Ibidapo Shobowale Street,<br />Shofunwa Estate, Ikorodu,<br />Lagos, Nigeria</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={450}>
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                  </div>
                  <h3>Company</h3>
                  <p>TooTriv Finance Limited<br />RC 9392905<br />Founded 2025</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </div>
                  <h3>Follow Us</h3>
                  <a href="https://www.linkedin.com/company/tootriv" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
