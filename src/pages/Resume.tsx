import "./Page.css";
import "./Resume.css";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="resume-header-actions">
          <a href="#" onClick={handlePrint} className="print-link">
            Print Version
          </a>
        </div>
        <div className="resume">
          <header className="resume-header clearfix">
            <h2 className="resume-name">Evan Johnson</h2>
            <p className="resume-tagline">
              Front End Engineer with over a decade of experience delivering
              high-scale products at Amazon. Passionate about performance,
              scalability, and mentoring engineers to grow their careers.
            </p>
          </header>

          <div className="resume-main">
            <section className="resume-section experience-section">
              <h3 className="section-title">Experience</h3>

              <div className="job">
                <div className="job-header">
                  <div className="job-title-line">
                    <strong>Amazon</strong>,{" "}
                    <span className="location">Seattle, WA & New York, NY</span>{" "}
                    — <em>Senior Front End Engineer</em>
                  </div>
                  <div className="job-dates">2013 - PRESENT</div>
                </div>
                <div className="job-description">
                  <p>
                    Over 12 years at Amazon, I advanced from L4 Front-End
                    Engineer on International Expansion to L6 leading
                    initiatives across Ads DSP and Sponsored Brands. I helped
                    launch Amazon.in with a focus on latency optimization for
                    low-bandwidth networks, scaled Sponsored Brands—one of
                    Amazon's most visible ad placements—through double-digit
                    year-over-year growth.
                  </p>
                  <p>
                    Most recently, I lead efforts in DSP to improve code
                    quality, experimentation velocity, and deployment
                    confidence. Along the way, I serve as an interview bar
                    raiser, speak at internal conferences, and mentor peers
                    across teams.
                  </p>
                  <div className="key-projects">
                    <h5>Key Projects:</h5>
                    <ul>
                      <li>
                        <strong>Latency Program:</strong> Reduced client-side
                        latency from rich media ads by ~10% through asset and
                        network optimization.
                      </li>
                      <li>
                        <strong>UI Library:</strong> Built a shared UI library
                        with support for transpiling into different templating
                        languages, enabling reuse across four ad programs.
                      </li>
                      <li>
                        <strong>Client-Side Metrics:</strong> Created a metrics
                        logging library for Sponsored Brands, improving
                        visibility into ad performance.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="job">
                <div className="job-header">
                  <div className="job-title-line">
                    <strong>Ada Developers Academy</strong>,{" "}
                    <span className="location">Seattle, WA</span> —{" "}
                    <em>Industry Mentor</em>
                  </div>
                  <div className="job-dates">2017 - 2021</div>
                </div>
                <div className="job-description">
                  <p>
                    Mentored students transitioning into tech with project
                    feedback, career advice, and interview preparation.
                  </p>
                </div>
              </div>

              <div className="job">
                <div className="job-header">
                  <div className="job-title-line">
                    <strong>General Assembly</strong>,{" "}
                    <span className="location">Seattle, WA</span> —{" "}
                    <em>Part-Time Instructor</em>
                  </div>
                  <div className="job-dates">2015 - 2018</div>
                </div>
                <div className="job-description">
                  <p>
                    Taught workshops and classes on HTML, CSS, JavaScript, and
                    React to professionals and individuals transitioning into
                    tech.
                  </p>
                </div>
              </div>

              <div className="job">
                <div className="job-header">
                  <div className="job-title-line">
                    <strong>Create Inform</strong>,{" "}
                    <span className="location">Seattle, WA</span> —{" "}
                    <em>Co-Founder</em>
                  </div>
                  <div className="job-dates">2011 - 2013</div>
                </div>
                <div className="job-description">
                  <p>
                    Co-founded and scaled a digital ad agency from two to five
                    people, building and delivering ad campaigns for clients
                    ranging from local architects and colleges to large
                    corporations such as Amazon.
                  </p>
                </div>
              </div>
            </section>

            <aside className="skills-sidebar">
              <div className="skill-category">
                <h4>Languages</h4>
                <p>JavaScript (ES6+), TypeScript, HTML5, CSS3</p>
              </div>
              <div className="skill-category">
                <h4>Frameworks & Libraries</h4>
                <p>React, React Native, Next.js, Express, Expo</p>
              </div>
              <div className="skill-category">
                <h4>Tools & Platforms</h4>
                <p>Node.js, Docker, AWS (EC2, S3, Lambda), Vercel</p>
              </div>
              <div className="skill-category">
                <h4>Testing</h4>
                <p>Jest, React Testing Library, Cypress</p>
              </div>
              <div className="skill-category">
                <h4>Other</h4>
                <p>
                  Performance Optimization, Accessibility (A11y), Responsive
                  Design
                </p>
              </div>
              <div className="skill-category">
                <h4>Currently Learning</h4>
                <p>
                  Machine Learning University (Amazon), React Performance (Front
                  End Masters)
                </p>
              </div>
            </aside>
          </div>
        </div>

        {/* Print-only footer */}
        <div className="print-footer">
          <span>New York, NY</span>
          <span>hello@evblurbs.xyz</span>
          <span>www.linkedin.com/in/evblurbs</span>
          <span>www.github.com/evblurbs</span>
          <span>www.evblurbs.xyz</span>
        </div>
      </div>
    </div>
  );
};

export default Resume;
