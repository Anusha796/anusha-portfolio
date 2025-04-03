// App.js
import React from "react";
import "./styles.css";

const App = () => {
  return (
    <div className="dark-theme">
      <nav className="navbar">
        <h1>Anusha Kanamarlapudi</h1>
        <div>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/Anusha796" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/anushakanamarlapudiudi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/AnushaK_.NetFullStack_ServingNP.pdf" className="btn small" download>Resume</a>
        </div>
      </nav>

      <section className="hero">
        <img src="/profile.jpg" alt="Anusha Kanamarlapudi" className="profile-pic" />
        <h1>Hi, I'm <span className="highlight">Anusha</span> 👋</h1>
        <p>Full Stack Developer | .NET | Angular | Azure</p>
        <a href="mailto:kanamarlapudianusha31@gmail.com" className="btn">Contact Me</a>
      </section>

      <section className="summary">
        <h2>Professional Summary</h2>
        <p>
          I am a passionate and detail-oriented .NET Full Stack Developer with hands-on experience building scalable web applications using technologies like C#, ASP.NET Core, Angular, SQL Server, and Azure. I deliver responsive UI, secure RESTful APIs, and complete solutions from design to deployment. Skilled in Agile, OOPS, and full-stack project ownership.
        </p>
      </section>

      <section id="experience" className="experience">
        <h2>Experience</h2>
        <div className="experience-card">
          <h3>Associate II Software Engineer – Capgemini Technology Services (June 2024 – Present)</h3>
          <ul>
            <li>Designed and implemented responsive UI components using Angular for aircraft maintenance dashboards.</li>
            <li>Developed scalable RESTful APIs using .NET Core and integrated with SQL Server databases.</li>
            <li>Worked with Azure App Services and Azure SQL for cloud-based deployments.</li>
            <li>Managed Git version control and CI/CD pipelines through Azure DevOps.</li>
            <li>Collaborated with cross-functional teams during Agile sprints to plan, review, and demo features.</li>
          </ul>
        </div>
        <div className="experience-card">
          <h3>Associate I Software Engineer – Capgemini (Oct 2022 – June 2024)</h3>
          <ul>
            <li>Contributed to the development of an Event Management System using .NET Core and SQL Server.</li>
            <li>Built secure authentication flows and dynamic event forms with server-side validation.</li>
            <li>Integrated third-party services and implemented RESTful API design.</li>
            <li>Conducted unit testing, debugging, and deployment for smooth release cycles.</li>
            <li>Maintained clear technical documentation and participated in peer reviews.</li>
          </ul>
        </div>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>

        <h3>Primary Skills</h3>
        <div className="skill-grid">
          {["C#", "ASP.NET Core", "ASP.NET MVC", "SQL Server", "Entity Framework Core", "Angular"].map((skill, index) => (
            <div key={index} className="skill-card">{skill}</div>
          ))}
        </div>

        <h3>Secondary Skills</h3>
        <div className="skill-grid">
          {["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap"].map((skill, index) => (
            <div key={index} className="skill-card">{skill}</div>
          ))}
        </div>

        <h3>Cloud & DevOps</h3>
        <div className="skill-grid">
          {["Azure", "Git", "GitHub", "Postman", "Visual Studio", "Visual Studio Code"].map((skill, index) => (
            <div key={index} className="skill-card">{skill}</div>
          ))}
        </div>

        <h3>Other Skills</h3>
        <div className="skill-grid">
          {["OOPS Concepts", "Agile", "Scrum", "Responsive Design", "Cross-Browser Compatibility"].map((skill, index) => (
            <div key={index} className="skill-card">{skill}</div>
          ))}
        </div>
      </section>

      <section className="video-resume">
        <h2>My Video Resume</h2>
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/YlrtTgdTaEM"
            title="Video Resume"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>PROJECT AERO – Aircraft Maintenance System</h3>
            <p>
              Developed and enhanced an enterprise-level web application for managing aircraft maintenance workflows. Used Angular for creating responsive UI components and .NET Core Web API for backend services. Managed Azure App Services deployment, Azure SQL integration, and implemented CI/CD pipelines with Azure DevOps. Improved overall system performance, user experience, and authentication modules.
            </p>
          </div>
          <div className="project-card">
            <h3>Event Management Application</h3>
            <p>
              Led the development of a console-based event scheduling tool using C Linux technologies. Built REST APIs using .NET Core and integrated frontend components for admin and user access control. This 15-day Agile sprint project was completed successfully and appreciated for its timely delivery and clean design.
            </p>
          </div>
        </div>
      </section>

      <section className="certifications skills">
        <h2>Certifications</h2>
        <div className="skill-grid">
          <div className="skill-card">
            <a href="https://learn.microsoft.com/en-us/users/anushakanamarlapudi-9494/credentials/be83719d45c3d920?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer">
              Microsoft Certified: Azure AI Fundamentals (AI-900)
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form action="https://formspree.io/f/xkgjqbka" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit" className="btn">Send</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2024 Anusha Kanamarlapudi | Built with React</p>
      </footer>
    </div>
  );
};

export default App;
