import { useEffect, useState } from "react";

export default function Skills() {
  const [extraClasses, setExtraClasses] = useState("");
  return (
    <section id="skills">
      <div className="center">
        <h2>Skills</h2>
        <div className={extraClasses + "skills-container"}>
          <div className="skill-box">
            <img src="/img/js.png" alt="" />
            <span>Javascript</span>
          </div>
          <div className="skill-box">
            <img src="/img/java.png" alt="" />
            <span>JAVA</span>
          </div>
          <div className="skill-box">
            <img src="/img/react.png" alt="" />
            <span>React</span>
          </div>
          <div className="skill-box">
            <img src="/img/nextjs.png" alt="" />
            <span>Next JS</span>
          </div>
          <div className="skill-box">
            <img src="/img/node.png" alt="" />
            <span>NodeJS</span>
          </div>

          <div className="skill-box">
            <img src="/img/spring.png" alt="" />
            <span>Spring Boot</span>
          </div>
          <div className="skill-box">
            <img src="/img/mongodb.png" alt="" />
            <span>MongoDB</span>
          </div>
          <div className="skill-box">
            <img src="/img/mysql.png" alt="" />
            <span>My SQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
