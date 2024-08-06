import React from "react";
import Footer from "./Footer";
import educationAchievements from "../educationAcheivement";
import projects from "../project";
import extras from "../extra";
import Card from "./Card";

function App() {
  return (
    <div>
      <div id="header">
        <header>
          <button>
            <a href="#acheive">Achievements</a>
          </button>
          <button>
            <a href="#project">Projects</a>
          </button>
          <button>
            <a href="#extra">Extra Activities</a>
          </button>
        </header>
      </div>
      <h1 className="heading">Welcome to My Resume</h1>
      <hr />
      <div className="info">
        <p>Hi there, I am Sai Ganesh from Vizag, studying at IITM.</p>
        <p>Passionate about AI/ML systems and Web Development</p>
      </div>
      <div id="acheive">
        <h1 className="heading">Scholastic Achievements</h1>
        <hr />
        {educationAchievements.map((achievement) => (
          <Card
            key={achievement.id}
            name={achievement.name}
            description={achievement.description}
            img={achievement.img}
          />
        ))}
      </div>
      <div id="project">
        <h1 className="heading">Projects</h1>
      </div>
      <hr />
      {projects.map((project) => (
        <Card
          key={project.id}
          name={project.name}
          description={project.description}
          img={project.img}
        />
      ))}

      <h1 className="heading" id="extra">
        Extra Activities
      </h1>
      <hr />
      {extras.map((extra) => (
        <Card
          key={extra.id}
          name={extra.name}
          description={extra.description}
          img={extra.img}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
