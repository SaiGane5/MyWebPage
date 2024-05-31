import React from "react";
import EducationAcheivements from "./EducationAcheivement";
import Projects from "./Project";
import Extras from "./Extra";
import Footer from "./Footer";
import educationAcheivement from "../educationAcheivement";
import project from "../project";
import extra from "../extra";

// function smoothScroll(){
//     document.querySelector('').scrollIntoView({
//         behavior: 'smooth'
//     });
// }
// function displayDescription() {
//     return
// }

function createEducationAcheivement() {
  return (
    <EducationAcheivements
        key={educationAcheivement.id}
        name={educationAcheivement.name}
        description={educationAcheivement.description}
        img={educationAcheivement.img}
        />
  );
}
function createProject() {
  return (
    <Projects 
        key={project.id}
        name={project.name}
        description={project.description}
        img={project.img}
        />
  );
}
function createExtra() {
  return (
    <Extras 
        key={extra.id}
        name={extra.name}
        description={extra.description}
        img={extra.img}
        />
  );
}

function App() {
  return(
    <div>
      <h1 className="heading">Welcome to My Resume</h1>
      <h1 className="heading">Scholastic Achievements</h1>
      {educationAcheivement.map(createEducationAcheivement)}
      <h1 className="heading">Projects</h1>
      {project.map(createProject)}
      <h1 className="heading">Extra Activities</h1>
      {extra.map(createExtra)}
      <Footer />
    </div>
  );
}

export default App;
