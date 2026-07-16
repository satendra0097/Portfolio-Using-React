import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/portfolio.css';

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isWhiteMode, setIsWhiteMode] = useState(false); // Default light mode

  const resumeFile = 'Satendra_Baghel_Resume.pdf';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact', 'message'];
      let current = 'home';
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  const toggleWhiteMode = () => {
    setIsWhiteMode(!isWhiteMode);
    if (isWhiteMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Satendra_Baghel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button className="theme-toggle" onClick={toggleWhiteMode}>
        {isWhiteMode ? (
          <img
            src="https://cdn-icons-png.flaticon.com/512/17110/17110326.png"
            alt="Dark Mode"
            className="theme-icon"
          />
        ) : (
          <img
            src="https://cdn-icons-png.flaticon.com/512/4520/4520032.png"
            alt="Light Mode"
            className="theme-icon"
          />
        )}
      </button>

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <div className="logo-icon">S</div>
            <div>
              <div className="logo-text">Satendra Baghel</div>
              <div className="logo-sub">Full Stack Developer</div>
            </div>
          </div>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-social">
            <a href="https://github.com/satendra0097" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/satendra-baghel-201a97333" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:baghelsatendra524@gmail.com">
              <FaEnvelope />
            </a>
            <a href="tel:+917581937175">
              <FaPhone />
            </a>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.label}
            </button>
          ))}
          <div className="mobile-social">
            <a href="https://github.com/satendra0097" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/satendra-baghel-201a97333" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:baghelsatendra524@gmail.com">
              <FaEnvelope />
            </a>
            <a href="tel:+917581937175">
              <FaPhone />
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section id="home" className="hero">
        <div className="container" style={{ maxWidth: '100%' }}>
          <div className="hero-wrapper" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '60px 0 40px 0',
            gap: '50px',
            flexWrap: 'wrap'
          }}>
            {/* Left Content */}
            <div className="hero-content" style={{
              flex: '1',
              minWidth: '300px',
              textAlign: 'left'
            }}>
              <p style={{
                fontSize: 'clamp(18px, 2vw, 24px)',
                marginBottom: '8px',
                fontWeight: '400',
                letterSpacing: '1px',
                color: 'var(--text-secondary)'
              }}>
                Hi I am
              </p>

              <h1 style={{
                fontSize: 'clamp(42px, 6vw, 68px)',
                margin: '5px 0',
                fontWeight: '700',
                letterSpacing: '-1px',
                color: 'var(--text-primary)',
                lineHeight: '1.1'
              }}>
                Satendra Baghel
              </h1>

              <h2 style={{
                fontSize: 'clamp(22px, 2.8vw, 32px)',
                fontWeight: '400',
                margin: '12px 0 30px 0',
                color: 'var(--text-secondary)',
                lineHeight: '1.3'
              }}>
                IT / Full Stack Developer
              </h2>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  downloadFile();
                }}
                className="download-cv-btn"
                style={{
                  display: 'inline-block',
                  padding: '14px 45px',
                  border: '2px solid var(--border-color)',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  fontWeight: '500',
                  background: 'transparent',
                  transition: 'all 0.3s ease',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--primary-color)';
                  e.target.style.color = '#ffffff';
                  e.target.style.borderColor = 'var(--primary-color)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'var(--text-primary)';
                  e.target.style.borderColor = 'var(--border-color)';
                }}
              >
                Download CV
              </a>
            </div>

            {/* Right - Profile Image */}
            <div className="hero-image" style={{
              flex: '1',
              minWidth: '250px',
              textAlign: 'center'
            }}>
              <div style={{
                width: 'clamp(220px, 22vw, 320px)',
                height: 'clamp(220px, 22vw, 320px)',
                margin: '0 auto',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-secondary)'
              }}>
                <img
                  src='photo.png'
                  alt="Satendra Baghel"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '35px 0 20px 0',
            borderTop: '1px solid var(--border-color)',
            marginTop: '10px',
            flexWrap: 'wrap',
            gap: '60px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: 'clamp(30px, 3vw, 40px)',
                margin: 0,
                fontWeight: '700',
                color: 'var(--text-primary)',
                lineHeight: '1.2'
              }}>
                6
              </h3>
              <p style={{
                margin: '5px 0 0 0',
                fontSize: '15px',
                color: 'var(--text-secondary)',
                fontWeight: '400',
                letterSpacing: '0.5px'
              }}>
                Months Experience
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: 'clamp(30px, 3vw, 40px)',
                margin: 0,
                fontWeight: '700',
                color: 'var(--text-primary)',
                lineHeight: '1.2'
              }}>
                5+
              </h3>
              <p style={{
                margin: '5px 0 0 0',
                fontSize: '15px',
                color: 'var(--text-secondary)',
                fontWeight: '400',
                letterSpacing: '0.5px'
              }}>
                Project done
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: 'clamp(30px, 3vw, 40px)',
                margin: 0,
                fontWeight: '700',
                color: 'var(--text-primary)',
                lineHeight: '1.2'
              }}>
                10+
              </h3>
              <p style={{
                margin: '5px 0 0 0',
                fontSize: '15px',
                color: 'var(--text-secondary)',
                fontWeight: '400',
                letterSpacing: '0.5px'
              }}>
                Happy Clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="section-underline"></div>
          <p className="about-text">
            IT student with strong skills in web development, programming, and databases.
            Currently interning at Sachiva Web and Security, working on live projects using
            React.js and Tailwind CSS. Proficient in RESTful API development, CRUD operations,
            and frontend optimization using React.js, Node.js, Express.js, and Next.js.
            Experienced in building responsive user interfaces, implementing secure authentication (JWT),
            and working with MySQL and MongoDB databases. Seeking an entry-level IT role to apply
            technical knowledge and grow professionally.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Internships</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6</div>
              <div className="stat-label">Months Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">B.Tech</div>
              <div className="stat-label">Education</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="section skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-underline"></div>

          <div className="skills-grid-cards">
            <div className="skill-card-custom">
              <h3>Frontend</h3>
              <div className="skill-items-custom">
                <span className="skill-item-custom">React.js</span>
                <span className="skill-item-custom">Next.js</span>
                <span className="skill-item-custom">Redux</span>
                <span className="skill-item-custom">JavaScript (ES6+)</span>
                <span className="skill-item-custom">HTML5</span>
                <span className="skill-item-custom">CSS3</span>
                <span className="skill-item-custom">Bootstrap</span>
                <span className="skill-item-custom">Material UI</span>
                <span className="skill-item-custom">Tailwind CSS</span>
              </div>
            </div>

            <div className="skill-card-custom">
              <h3>Backend</h3>
              <div className="skill-items-custom">
                <span className="skill-item-custom">Node.js</span>
                <span className="skill-item-custom">Express.js</span>
                <span className="skill-item-custom">REST APIs</span>
                <span className="skill-item-custom">JWT Auth</span>
                <span className="skill-item-custom">MVC</span>
              </div>
            </div>

            <div className="skill-card-custom">
              <h3>Database</h3>
              <div className="skill-items-custom">
                <span className="skill-item-custom">MySQL</span>
                <span className="skill-item-custom">MongoDB</span>
              </div>
            </div>

            <div className="skill-card-custom">
              <h3>Tools</h3>
              <div className="skill-items-custom">
                <span className="skill-item-custom">VS Code</span>
                <span className="skill-item-custom">Git</span>
                <span className="skill-item-custom">GitHub</span>
                <span className="skill-item-custom">Dev-C++</span>
              </div>
            </div>

            <div className="skill-card-custom">
              <h3>Programming</h3>
              <div className="skill-items-custom">
                <span className="skill-item-custom">C</span>
                <span className="skill-item-custom">JavaScript</span>
              </div>
            </div>

            <div className="skill-card-custom">
              <h3>Concepts</h3>
              <div className="skill-items-custom">
                <span className="skill-item-custom">CRUD Operations</span>
                <span className="skill-item-custom">REST APIs</span>
                <span className="skill-item-custom">JWT Auth</span>
                <span className="skill-item-custom">MVC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="section experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="section-underline"></div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-header">
                <div>
                  <div className="timeline-title">Software Development Intern</div>
                  <div className="timeline-company">Sachiva Web and Security</div>
                </div>
                <span className="timeline-date">March 2026 - Present</span>
              </div>
              <div className="timeline-location">Gwalior, MP</div>
              <ul className="timeline-list">
                <li>Working on live web development projects using React.js and Tailwind CSS</li>
                <li>Implementing responsive UI designs</li>
                <li>Collaborating with senior developers</li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="timeline-header">
                <div>
                  <div className="timeline-title">Full Stack Developer Intern</div>
                  <div className="timeline-company">PS Softech</div>
                </div>
                <span className="timeline-date">Sept 2025 - Feb 2026</span>
              </div>
              <div className="timeline-location">Remote</div>
              <ul className="timeline-list">
                <li>Built web applications using React.js, Next.js, Express.js, and Node.js</li>
                <li>Developed RESTful APIs and integrated MySQL and MongoDB databases</li>
                <li>Built responsive, cross-browser user interfaces using HTML, CSS, and JavaScript</li>
                <li>Collaborated on debugging, code reviews, and deploying MERN/Next.js features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-underline"></div>
          <p className="projects-subtitle">
            Production-grade applications demonstrating full-stack expertise
          </p>

          <div className="projects-featured-grid">
            <div className="project-featured-card">
              <div className="project-featured-header">
                <h3>Hunger Buddy</h3>
                <span className="project-featured-status">Full Stack</span>
              </div>

              <p className="project-featured-description">
                Full-stack food ordering marketplace application with authentication and payment gateway integration.
                Built responsive UI improving user engagement and usability. Features include user authentication,
                restaurant listings, food ordering, cart management, and payment processing.
              </p>

              <div className="project-featured-features">
                <h4>Key Features</h4>
                <ul>
                  <li>User authentication &amp; authorization</li>
                  <li>Restaurant &amp; food listings</li>
                  <li>Shopping cart management</li>
                  <li>Payment gateway integration</li>
                  <li>Order tracking &amp; history</li>
                  <li>Responsive UI design</li>
                </ul>
              </div>

              <div className="project-featured-tech">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>REST APIs</span>
              </div>

              <a
                href="https://github.com/satendra0097/HungryBuddy"
                target="_blank"
                rel="noopener noreferrer"
                className="project-featured-link"
              >
                View on GitHub →
              </a>
            </div>

            <div className="project-featured-card">
              <div className="project-featured-header">
                <h3>Employee Management System</h3>
                <span className="project-featured-status">Full Stack</span>
              </div>

              <p className="project-featured-description">
                Dynamic web app using Node.js and Express with MVC architecture and EJS templating.
                Configured middleware for logging, body parsing, and robust error handling.
                Features employee CRUD operations, department management, and attendance tracking.
              </p>

              <div className="project-featured-features">
                <h4>Key Features</h4>
                <ul>
                  <li>MVC architecture implementation</li>
                  <li>Employee CRUD operations</li>
                  <li>Department management</li>
                  <li>Middleware configuration</li>
                  <li>EJS templating engine</li>
                  <li>Error handling &amp; logging</li>
                </ul>
              </div>

              <div className="project-featured-tech">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>EJS</span>
                <span>MVC</span>
                <span>MySQL</span>
              </div>

              <a
                href="https://github.com/satendra0097"
                target="_blank"
                rel="noopener noreferrer"
                className="project-featured-link"
              >
                View on GitHub →
              </a>
            </div>

            <div className="project-featured-card">
              <div className="project-featured-header">
                <h3>Netflix Clone</h3>
                <span className="project-featured-status">Full Stack</span>
              </div>

              <p className="project-featured-description">
                Full-stack web app with user authentication, admin panel, and CRUD operations for movies,
                users, and content management with data tables. Features include movie browsing,
                watchlist, user profiles, and content management dashboard.
              </p>

              <div className="project-featured-features">
                <h4>Key Features</h4>
                <ul>
                  <li>User authentication &amp; profiles</li>
                  <li>Admin panel for content management</li>
                  <li>Movie CRUD operations</li>
                  <li>Watchlist functionality</li>
                  <li>Data tables with sorting &amp; filtering</li>
                  <li>Responsive design</li>
                </ul>
              </div>

              <div className="project-featured-tech">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MySQL</span>
                <span>EJS</span>
                <span>Bootstrap</span>
              </div>

              <a
                href="https://github.com/satendra0097"
                target="_blank"
                rel="noopener noreferrer"
                className="project-featured-link"
              >
                View on GitHub →
              </a>
            </div>

            <div className="project-featured-card">
              <div className="project-featured-header">
                <h3>Biography Website</h3>
                <span className="project-featured-status">React</span>
              </div>

              <p className="project-featured-description">
                Responsive personal biography website with React, inline CSS, and interactive UI features
                including image overlays, view/download functionality, and smooth scroll navigation.
                Features include about section, skills showcase, portfolio gallery, and contact form.
              </p>

              <div className="project-featured-features">
                <h4>Key Features</h4>
                <ul>
                  <li>Responsive React components</li>
                  <li>Inline CSS styling</li>
                  <li>Image overlays &amp; effects</li>
                  <li>View &amp; download functionality</li>
                  <li>Smooth scroll navigation</li>
                  <li>Contact form integration</li>
                </ul>
              </div>

              <div className="project-featured-tech">
                <span>React.js</span>
                <span>CSS</span>
                <span>Hooks</span>
                <span>JavaScript (ES6+)</span>
              </div>

              <a
                href="https://github.com/satendra0097"
                target="_blank"
                rel="noopener noreferrer"
                className="project-featured-link"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section id="education" className="section education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="section-underline"></div>
          <div className="edu-list">
            <div className="edu-item">
              <h4>B.Tech in Computer Science</h4>
              <p>ShriRam Group of College, RGPV University</p>
              <span className="year">2022 - 2026</span>
            </div>
            <div className="edu-item">
              <h4>Class 12th</h4>
              <p>Shri Govardhan School, MP Board</p>
            </div>
            <div className="edu-item">
              <h4>Class 10th</h4>
              <p>N.V.M School, MP Board</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-underline"></div>

          <div className="contact-simple">
            <p className="contact-description">
              Have a project opportunity or want to discuss collaboration? Feel free to reach out.
            </p>

            <hr className="contact-divider-simple" />

            <div className="contact-cards-simple">
              <div className="contact-card-simple">
                <div className="contact-icon-simple">
                  <FaEnvelope />
                </div>
                <h4>Email</h4>
                <p>
                  <a
                    href="mailto:baghelsatendra524@gmail.com"
                    className="contact-link-simple"
                  >
                    baghelsatendra524@gmail.com
                  </a>
                </p>
              </div>
              <div className="contact-card-simple">
                <div className="contact-icon-simple">
                  <FaPhone />
                </div>
                <h4>Phone</h4>
                <p>
                  <a
                    href="tel:+917581937175"
                    className="contact-link-simple"
                  >
                    +91 75819 37175
                  </a>
                </p>
              </div>


              <div className="contact-card-simple">
                <div className="contact-icon-simple">
                  <FaMapMarkerAlt />
                </div>
                <h4>Location</h4>
                <p>India</p>
              </div>

              <div className="contact-card-simple">
                <div className="contact-icon-simple">
                  <FaLinkedin />
                </div>
                <h4>LinkedIn</h4>
                <p>
                  <a
                    href="https://linkedin.com/in/satendra-baghel-201a97333"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link-simple"
                  >
                    satendra-baghel
                  </a>
                </p>
              </div>

              <div className="contact-card-simple">
                <div className="contact-icon-simple">
                  <FaGithub />
                </div>
                <h4>GitHub</h4>
                <p>
                  <a
                    href="https://github.com/satendra0097"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link-simple"
                  >
                    satendra0097
                  </a>
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ===== FORM SECTION ===== */}
      <section id="message" className="section form-section">
        <div className="container">
          <h2 className="section-title">Send Me a Message</h2>
          <div className="section-underline"></div>
          <p className="form-subtitle">
            Have questions or want to work together? Fill out the form below and I'll get back to you within 24 hours.
          </p>

          <div className="form-wrapper">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter your email" />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="What's this about?" />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell me about your project, opportunity, or any questions..." rows="6"></textarea>
              </div>

              <button type="submit" className="btn-submit">
                <FaEnvelope style={{ marginRight: '10px' }} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 Satendra Baghel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;