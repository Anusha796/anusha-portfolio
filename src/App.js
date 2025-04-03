import React from "react";
import "./styles.css";

const App = () => {
  const skills = [
    // Frontend
    "HTML5", "CSS3", "JavaScript", "TypeScript", "Bootstrap", "jQuery", "React", "Angular",

    // Backend
    "C#", "ASP.NET", "ASP.NET Core", "ASP.NET MVC", "Entity Framework Core", "RESTful APIs",

    // Database
    "SQL Server", "Stored Procedures",

    // DevOps / Tools
    "Git", "GitHub", "Postman", "Visual Studio", "Visual Studio Code",

    // Cloud
    "Azure App Services", "Azure Blob Storage", "Azure SQL Database",

    // Concepts & Methodologies
    "OOPS Concepts", "Agile", "Scrum"
  ];

  return (
    <div className="dark-theme">
      <nav className="navbar">
        <h1>Anusha Kanamarlapudi</h1>
        <div>
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

      <section className="skills">
        <h2>Skills</h2>
        <div className="skill-grid">
          {skills.map((skill, index) => (
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
            <h3>Aircraft Maintenance System</h3>
            <p>Enhanced performance and authentication in Airbus A220 tech data.</p>
          </div>
          <div className="project-card">
            <h3>Event Scheduling App</h3>
            <p>Built REST APIs for event management with .NET Core and Azure deployment.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Message" required></textarea>
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
