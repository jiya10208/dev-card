import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <body>
      <div className="card">
        <Header />
        <Main />
      </div>
    </body>
  );
}

function Header() {
  return <img src="jiya.png" alt="avatar" className="avatar" />;
}
const skills = [
  {
    skill: "HTML+ CSS",
    color: "yellow",
    emoji: "😍",
  },
  {
    skill: "Javascript",
    color: "teal",
    emoji: "😁",
  },
  {
    skill: "Web Design",
    color: "pink",
    emoji: "👍",
  },
  {
    skill: "React",
    color: "azure",
    emoji: "🙌",
  },
  {
    skill: "Bootstrap",
    color: "lavender",
    emoji: "😎",
  },
  {
    skill: "Git and Github",
    color: "#8affa1",
    emoji: "😎",
  },
];
function Skillset() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skills
          skill={skill.skill}
          color={skill.color}
          level={skill.emoji}
          key={skill.skill}
        />
      ))}
    </div>
  );
}
function Skills(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span> {props.skill}</span>
      <span> {props.emoji}</span>
    </div>
  );
}
function Main() {
  return (
    <div className="data">
      <h1>Jiya</h1>
      <p>
        A Full-stack web developer and a writer who has published two books.
        When not coding I am writing poems or stories. I like to learn new
        things or just read new books.{" "}
      </p>
      <>
        <Skillset />
      </>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
