import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Resume from "../assets/img/Resume.pdf";

// ======================
// Data Section
// ======================

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { label: "JavaScript (ES6+), TypeScript", level: "100%" },
      { label: "React, Next.js, Vue.js", level: "100%" },
      { label: "HTML5, CSS3, Bootstrap, TailwindCSS", level: "98%" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { label: "Node.js | Express.js", level: "100%" },
      { label: "PHP (Laravel)", level: "98%" },
      { label: "Python (Django, Flask)", level: "91%" },
    ],
  },
  {
    category: "Database & Cloud",
    skills: [
      { label: "MongoDB, MySQL, PostgreSQL", level: "95%" },
      { label: "Firebase & AWS (EC2, S3)", level: "90%" },
    ],
  },
  {
    category: "Version Control & Tools",
    skills: [
      { label: "Git, GitHub, GitLab", level: "100%" },
      { label: "REST APIs, Postman, Swagger", level: "95%" },
      { label: "Docker & CI/CD (Basics)", level: "85%" },
    ],
  },
];

const educationData = [
  {
    icon: faGraduationCap,
    title: "Undergraduate Studies",
    time: "During Studies",
    institution: "Enugu State University of Science and Technology (ESUT)",
    description:
      "Bachelor’s Degree in Computer Science focused on algorithms, software design, and systems architecture. Built a strong foundation in software engineering and data structures.",
  },
  {
    icon: faGraduationCap,
    title: "Professional Training",
    time: "Training Period",
    institution: "Abia Tech Hub (ATH)",
    description:
      "Completed intensive full-stack development training, mastering modern tools like React, Node.js, and Laravel. Gained hands-on experience building scalable real-world applications.",
  },
];

const experienceData = [
  {
    icon: faBriefcase,
    title: "Full Stack Developer",
    time: "Present",
    description:
      "Design and implement full-stack web applications, optimizing both frontend performance and backend logic. Collaborate with cross-functional teams to deliver secure, responsive, and maintainable systems using React, Node.js, and MongoDB.",
  },
  {
    icon: faBriefcase,
    title: "Software Developer",
    time: "Present",
    description:
      "Build and deploy scalable software products using Laravel, Django, and Flask. Implement API-driven architectures and cloud integrations on AWS. Deliver solutions that balance performance, usability, and scalability.",
  },
];

// ======================
// Component
// ======================

function AboutSec({ borderBottom }) {
  return (
    <section className={`about-section px-md-2 ${borderBottom}`}>
      <h1 className="section-title">About</h1>

      <h2 className="intro-text">
        I’m{" "}
        <span className="fw-bold text-custom-color">Tochukwu Elekwachi</span>, a passionate{" "}
        <span className="fw-bold text-custom-color">Software Developer</span>.
      </h2>

      <p className="fs-5 about-description">
        I am a results-oriented <strong>Full Stack Software Developer</strong> dedicated to
        creating high-quality, scalable, and user-focused digital solutions. I specialize in
        developing interactive web applications, crafting robust backend architectures, and ensuring
        seamless integration between design and functionality.
        <br />
        <br />
        I enjoy working in collaborative environments that foster innovation and problem-solving.
        With a commitment to continuous learning, I actively explore emerging technologies to stay
        ahead in the evolving tech landscape. Let’s collaborate to build solutions that make a
        difference.
      </p>

      {/* ====================== Contact Details ====================== */}
      <div className="row my-4 contact-info">
        <div className="col-md-6">
          <ContactDetail label="Languages" value="English, Igbo" />
          <ContactDetail label="Mobile" value="+234 901 304 1098" />
          <ContactDetail label="Email" value="elekwachitochukwu117@gmail.com" />
          <ContactDetail
            label="Portfolio"
            value={
              <a href="https://protocodes.vercel.app" target="_blank" rel="noopener noreferrer">
                protocodes.vercel.app
              </a>
            }
          />
        </div>

        <div className="col-md-6">
          <ContactDetail label="Gender" value="Male" />
          <ContactDetail label="Location" value="Umuahia, Abia State, Nigeria" />
          <ContactDetail label="Nationality" value="Nigerian" />
        </div>
      </div>

      {/* ====================== Technical Skills ====================== */}
      <div className="technical-skills">
        <h3 className="section-subtitle text-custom-color fw-bold mb-4">Technical Skills</h3>

        {skillsData.map(({ category, skills }, i) => (
          <div key={i} className="mb-4">
            <h5 className="fw-semibold text-decoration-underline mb-3">{category}</h5>

            {skills.map(({ label, level }, j) => (
              <SkillProgress key={j} label={label} level={level} />
            ))}
          </div>
        ))}
      </div>

      {/* ====================== Call to Action ====================== */}
      <div className="d-flex gap-2 my-4">
        <a href={Resume} download="Tochukwu_Elekwachi_Resume" className="btn btn-custom-color fs-5">
          Download CV
        </a>
        <Link to="/contact" className="btn btn-outline-custom fs-5">
          Hire Me
        </Link>
      </div>

      {/* ====================== Education & Experience ====================== */}
      <div className="row">
        <Timeline title="Education" data={educationData} />
        <Timeline title="Experience" data={experienceData} />
      </div>
    </section>
  );
}

// ======================
// Subcomponents
// ======================

const ContactDetail = ({ label, value }) => (
  <p className="fs-5 mb-2">
    <strong>{label}:</strong> <span>{value}</span>
  </p>
);

const SkillProgress = ({ label, level }) => (
  <div className="mb-2">
    <div className="d-flex justify-content-between align-items-center">
      <h6 className="mb-1">{label}</h6>
      <span className="small text-muted">{level}</span>
    </div>
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped progress-bar-animated bg-custom"
        style={{ width: level }}
      />
    </div>
  </div>
);

const Timeline = ({ title, data }) => (
  <div className="col-md-6 mb-4">
    <h3 className="fw-bold">{title}</h3>
    <div className="timeline border rounded p-3 ps-5">
      {data.map(({ icon, title, institution, time, description }, index) => (
        <div key={index} className="timeline-item mb-3">
          <div className="circle-dot bg-custom-color rounded-circle"></div>
          <span className="small d-block mb-1">
            <FontAwesomeIcon icon={icon} /> {time || ""}
          </span>
          <h5 className="my-2">{title}</h5>
          {institution && <h6 className="fw-semibold">{institution}</h6>}
          <p className="timeline-text">{description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default AboutSec;
