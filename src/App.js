//import logo from "./logo.svg";
import "./App.css";
import { Card, Container } from "react-bootstrap/";
function App() {
  const email = "asmahumayoun24@gmail.com";
  const linkedinProfile = "https://www.linkedin.com/in/asma-humayoun-058760203";
  return (
    <Container className="body d-flex flex-column align-items-center text-center">
      <div className="upperBody">
        <h1 className="name">ASMA HUMAYOUN</h1>
        <h2 className="profession">Frontend Web Developer</h2>
        <div>
          <img className="img_mail" src="./mail_icon.png" />
          <a href={`mailto:${email}`} className="email">
            {email}
          </a>
          <img className="img_linkedin" src="./linkedin.png" />
          <a href={linkedinProfile} className="linkedin">
            {linkedinProfile}
          </a>
        </div>
      </div>
      <div className="leftBody  col-md-4">
        <h2 className="heading">PROFILE</h2>
        <p className="profile">
          As a dedicated student of Software Engineering, I am deeply passionate
          about coding and relish the art of problem-solving. Thriving under
          pressure, I have honed my skills as a detail-oriented learner who
          eagerly embraces challenges. My relentless pursuit of knowledge has
          equipped me with the tools and mindset necessary to excel in the
          fast-paced tech industry.
          <br></br>
          <br></br>
          Furthermore, my passion for frontend development has been a driving
          force in my journey as a learner. As a frontend developer, I am
          committed to crafting user-friendly and visually appealing interfaces
          that seamlessly merge design and functionality. I am excited to
          contribute my skills and continue my journey of learning and growth in
          the ever-evolving world of technology.
        </p>
        <h2 className="lang">LANGUAGES</h2>
        <ul className="list">
          <li>English</li>
          <li>Urdu</li>
        </ul>
      </div>
      <div className="vertical-line d-none d-md-block col-md-1"></div>
      <div className="rightBody col-md-7">
        <h2 className="education">EDUCATION</h2>
        <div className="edu_1">
          <p className="inst_name">PUNJAB GROUP OF COLLEGES</p>
          <p className="info">FSc</p>
          <p className="info">Marks: 907/1100</p>
          <p className="info">2020</p>
          <p className="inst_name">UNIVERSITY OF MANAGEMENT AND TECHNOLOGY</p>
          <p className="info">Software Engineering</p>
          <p className="info">Semester 6/8 CGPA 3.73</p>
        </div>
        <h2 className="head">SKILLS</h2>
        <div className="skills">
          <p className="skill-heading">
            Programming Languages:{" "}
            <span className="skill">C++, C#, Python, PHP</span>
          </p>

          <p className="skill-heading">
            Web Development:{" "}
            <span className="skill">
              HTML, CSS, JavaScript, Front-end framework (React)
            </span>
          </p>
          <p className="skill-heading">
            Database Management: <span className="skill">SQL</span>
          </p>
          <p className="skill-heading">
            Project Management Tool: <span className="skill">Trello</span>
          </p>

          <p className="skill-heading">
            Soft Skills:{" "}
            <span className="skill">
              Communication, teamwork, time management
            </span>
          </p>

          <p className="skill-heading">
            Version Control: <span className="skill">Git, GitHub</span>
          </p>

          <p className="skill-heading">Problem Solving</p>
          <p className="skill-heading">Video Editing</p>
        </div>
      </div>
    </Container>
  );
}

export default App;
