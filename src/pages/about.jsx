export default function About() {
  const team = [
  { name: "Vivek Kumar", role: "Developer & Designer", image: "/images/user.JPG" },
  ];

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="page-header">
        <div className="container">
          <p className="section-label">Who we are</p>
          <h1 className="page-title">About Click2Cart</h1>
        </div>
      </div>

      {/* ── ABOUT INTRO ── */}
      <section className="section">
        <div className="container about-intro">
          <div className="about-text">
            <p className="section-label">Our story</p>
            <h2 className="section-title">Made at VIT Vellore,<br />for VIT students</h2>
            <p className="about-desc">
              Click2Cart is a student e-commerce project built exclusively for the VIT Vellore
              community. Whether you're a first-year looking for essentials or a final-year
              stocking up before placement season — this store is made with you in mind.
            </p>
            <p className="about-desc">
              This project was developed as part of our academic coursework at
              <strong> Vellore Institute of Technology (VIT), Vellore</strong>. It showcases
              modern web development using React, Context API, React Router, and Vite —
              all built from scratch by VIT students.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">12+</span>
                <span className="stat-label">Products</span>
              </div>
              <div className="stat">
                <span className="stat-number">VIT</span>
                <span className="stat-label">Vellore</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Student Built</span>
              </div>
            </div>
          </div>
          <div className="about-img-wrap">
            <img src="/images/gallery-2.jpg" alt="About Click2Cart" className="about-img" />
          </div>
        </div>
      </section>

      {/* ── VIT BANNER ── */}
      <section className="section vit-banner-section">
        <div className="container vit-banner">
          <div className="vit-banner-text">
            <span className="hero-eyebrow">🎓 Academic Project</span>
            <h2>Built for VIT Vellore Students</h2>
            <p>
              This platform was created as part of a web development course at VIT Vellore.
              It is designed to help students practise online shopping in a safe, simulated
              environment — and to demonstrate real-world React development skills.
            </p>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <p className="section-label" style={{ textAlign: "center" }}>The people</p>
          <h2 className="section-title" style={{ textAlign: "center" }}>Meet the team</h2>
          <div className="team-grid">
            {team.map((member, i) => (
              <div className="team-card" key={i}>
                <div className="team-img-wrap">
                  <img src={member.image} alt={member.name} />
                </div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
                <span className="team-badge">VIT Vellore</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="section">
        <div className="container">
          <p className="section-label" style={{ textAlign: "center" }}>What we used</p>
          <h2 className="section-title" style={{ textAlign: "center" }}>Tech Stack</h2>
          <div className="tech-grid">
            {[
              { icon: "⚛️", name: "React",        desc: "Component-based UI" },
              { icon: "🔀", name: "React Router", desc: "Client-side routing" },
              { icon: "🗃️", name: "Context API",  desc: "Global state management" },
              { icon: "💾", name: "localStorage", desc: "Persistent cart data" },
              { icon: "⚡", name: "Vite",         desc: "Fast dev build tool" },
              { icon: "🎨", name: "CSS3",         desc: "Custom styling & animations" },
            ].map(t => (
              <div className="tech-card" key={t.name}>
                <span className="tech-icon">{t.icon}</span>
                <h4>{t.name}</h4>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>© 2026 Click2Cart. Built with ♥ by VIT Vellore students.</p>
      </footer>
    </>
  );
}
