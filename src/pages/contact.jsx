import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  }

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="page-header">
        <div className="container">
          <p className="section-label">Get in touch</p>
          <h1 className="page-title">Contact Us</h1>
        </div>
      </div>

      <section className="section">
        <div className="container contact-container">

          {/* ── INFO CARDS ── */}
          <div className="contact-info">
            <p className="section-label">Reach out</p>
            <h2 className="section-title">We'd love to<br />hear from you</h2>
            <p className="contact-desc">
              Have a question, suggestion, or just want to say hi? Fill out the form
              and we'll get back to you as soon as possible.
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Vellore, Tamil Nadu, India</p>
                </div>
              </div>
              <div className="contact-card">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>vicku.cpr@gmail.com</p>
                </div>
              </div>
              <div className="contact-card">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 90652 12170</p>
                </div>
              </div>
              <div className="contact-card">
                <span className="contact-icon">🕐</span>
                <div>
                  <h4>Hours</h4>
                  <p>Mon – Fri, 9am – 6pm IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── FORM ── */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <span className="success-icon">✅</span>
                <h3>Message Sent!</h3>
                <p>Thanks, <strong>{form.name}</strong>! We'll reply to <strong>{form.email}</strong> soon.</p>
                <button className="btn-primary" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Send a Message</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your email address"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%" }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>© 2026 Click2Cart. Built with ♥ as an academic project.</p>
      </footer>
    </>
  );
}
