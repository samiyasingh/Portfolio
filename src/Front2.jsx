import React from "react";
import "./Front2.css";

const Front2 = () => {
  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 🔹 Top Cards Grid */}
      <div className="resume-container">
        {/* Intro Section */}
        <div className="intro-card">
          <div className="text-section">
            <h1 className="name">Samiya Singh</h1>
            <p className="bio">
              Driven and passionate computer science student at Amity University,
              with a strong foundation in full-stack web development, UI/UX design,
              and database management. Skilled in the frontend, Python and SQL with
              a deep enthusiasm for crafting efficient, scalable, and user-centric
              websites.
            </p>
          </div>
          <img src="/sam.png" alt="Samiya" className="sam" />
        </div>

        {/* Resume Card */}
        <div
          className="resume-card"
          onClick={() => scrollToSection("resume-section" )}
        >
          <h1 className="resume">Resume</h1>
          <img src="/resume.png" alt="resume" className="resume-img" />
        </div>

        {/* UI/UX Card */}
        <div
          className="uiux-card"
          onClick={() => scrollToSection("uiux-section")}
        >
          <h1 className="uiux">UI/UX Designs</h1>
          <img src="/ui.png" alt="ui" className="ui" />
        </div>

        {/* Development Card */}
        <div
          className="development-card"
          onClick={() => scrollToSection("development-section")}
        >
          <h2 className="develop">Development</h2>
          <img src="/development.png" alt="dev" className="dev" />
        </div>

        {/* Skills Card */}
        <div
          className="skills-card"
          onClick={() => scrollToSection("skills-section")}
        >
          <h2 className="skills">Skills</h2>
          <img src="/skill.png" alt="skill" className="skill" />
        </div>

        {/* Contact Card */}
        <div
          className="contact-card"
          // onClick={() => scrollToSection("contact-section")}
        >
          <h2 className="contact">Contact</h2>
          <p>
            <img src="/linkedin.png" alt="linkedin" className="linkedin" />
            <a href="https://www.linkedin.com/in/samiya-singh-2568248b/">
              https://www.linkedin.com/in/samiya-singh-2568248b/
            </a>
            <br />
            <img src="/mail.png" alt="mail" className="mail" />
            <a href="sam.12.2004.11@gmail.com">sam.12.2004.11@gmail.com</a>
            <br />
            <img src="/git.png" alt="git" className="git" />
            <a href="https://github.com/samiyasingh">
              https://github.com/samiyasingh
            </a>
          </p>
        </div>
      </div>

      {/* 🔹 Full-Width Dummy Sections */}
      <section id="resume-section" className="dummy-section">
        <h1> RESUME </h1>
        <p className="resume-content">
          Driven and passionate computer science student at Amity University, with a strong foundation in full-stack web development, UI/UX design, and database management. Skilled in the frontend, Python and SQL with a deep enthusiasm for crafting efficient, scalable, and user-centric websites. Passionate and enthusiast for turning ideas into reality through innovative design, and seamless functionality. A fast learner and problem-solver, eager to explore new technologies and take on challenging projects that enhance user experience and system efficiency . Currently learning figma to bring my impactful and attractive ideas to users. Keen to learn more about designs .
        </p>
        <h1 className="education-content">Education</h1>
        <p className="resume-content">
          Amity University Lucknow 
          <br/>
          Bachelors in Computer Application 
          <br/>
          CGPA - 7
        </p>
      
      </section>

      <section id="uiux-section" className="dummy-section">
        <h1>UI/UX Designs </h1>
        <p className="uiux-content">
          <p className="resume-content">
          Some of the impactful designs and sites that I created using Figma , I’m still learning and working on designs . I’ve vision to make user centric , attractive , impactful and aesthetically pleasing designs. The urge to create such designs keeps my brain occupied in everything i see around.
          Here are a few links to my designs and websites I created using Figma :
        </p>
        </p>
        <h1 className="figma-content">Behance</h1>
        <a href="https://www.behance.net/samiyasingh-" className="resume-content">
          📌 My Designs using photoshop and figma ✿
        </a>
      </section>

      <section id="development-section" className="dev-section">
        <h1>Development </h1>
        <p className="resume-content">Bringing ideas to life through web projects built with HTML, CSS, React, and MongoDB.</p>
        <p className="resume-content">Here’s a glimpse of my journey in web development :</p>
        <p className="restaurant">Restaurant </p>
        <p className="resume-content">A romantic-themed single-page website offering a unique blend of food and flower delivery services. Designed for date nights, special occasions, or simply self-love, this project features an elegant UI, interactive menus, form handling, and a responsive layout.</p>

        <ul className="resume-content">
          Key Features:

          <li>🍕 Interactive food and flower menu cards</li>
          <li>🌸 Location-based delivery availability check</li>
          <li>💌 Feedback submission form with real-time display</li>
          <li>🎨 Custom styling with Google Fonts and Font Awesome icons</li>
          <li>📱 Fully responsive layout for mobile and desktop</li>
          <br></br>
          Tech Stack:
          <li>HTML</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Ideal for: A cafe, florist, or delivery startup looking for a cozy and elegant front-end template.</li>
        </ul>

        <a className= "link" href="https://github.com/samiyasingh/cupid">🔗Cupids cafe</a>

        <p className="cookbook">E-commerce Price Tracker</p>

      
        <p className="resume-content">A data-driven e-commerce price tracking web application designed to analyze and visualize historical product prices across multiple platforms. The project focuses on clean data modeling, interactive visualizations, and an intuitive user experience.</p>
        <ul className="resume-content">
        Key Features:

        <li>📦 Dynamic product selection with dropdown-based filtering</li>
        <li>📊 Interactive price trend visualization across platforms</li>
        <li>🗄️ Relational database design with products, platforms, and price history</li>
        <li>📈 Time-series analysis using Pandas and Matplotlib</li>
        <li>🌐 Deployed as a web dashboard using Streamlit</li>

        Tech Stack:
        <li>Python | SQL (MySQL) | Pandas | Matplotlib | Streamlit | Git/GitHub</li>

        Ideal For:
        Data analysis projects, price comparison systems, and showcasing SQL + Python integration in real-world applications.
        </ul>
        <a className= "link" href="https://priceetracker.streamlit.app/">🔗E-commerce Price Tracker</a>
      </section>

      <section id="skills-section" className="dummy-section">
        <h1>Skills</h1>
        <img src="/skill-photo.png" alt="skill-photo" className="skill-photo"></img>

        <ul className="skills-content">

          <p><strong>Frontend Development:</strong>
            <br/>
            HTML5, CSS3, JavaScript, Bootstrap, React.js
          </p>
          
          <p><strong>Backend Development:</strong>
          <br/>
          Node.js, Python, SQL, DBMS, MongoDB</p>
          <br/>
          <p><strong>Full-Stack Development:</strong>
          <br/>
          MERN Stack (MongoDB, Express.js, React.js, Node.js)</p>
          <br/>
          <p><strong>Design & UI/UX:</strong>
          <br/>
          UI/UX Design, Wireframing, Prototyping, Figma</p>
          <br/>
          <p><strong>Tools & Version Control:</strong>
          <br/>
          Git, GitHub</p>
          <br/>
          <p><strong>Other Technical Skills:</strong>
          <br/>
          Operating Systems</p>
        </ul>
      </section>

      
    </>
  );
};

export default Front2;
