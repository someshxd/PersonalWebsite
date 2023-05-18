import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutme" id="aboutme">
      <div className="a-card">
        <div className="left">
          <img src="Assets/Skills/aboutme.jpg" alt="aboutme" />
        </div>
        <div className="right">
          <div className="desc">
            <p>
              <span className="a-m">ABOUT ME</span>
              <br />
              <br />

              <span className="a-desc">
                A dedicated React Developer based in India 📍
              </span>
              <br />
              <br />
              <span>
                As a React Developer, I have a passion for crafting engaging
                user interfaces and delivering seamless web experiences. With
                expertise in React and related technologies, I thrive in dynamic
                and collaborative environments where I can apply my skills to
                solve complex problems and deliver innovative solutions.
                <br /> I have experience developing responsive, scalable, and
                maintainable web applications that meet business requirements
                and user needs. My technical skills include proficiency in
                JavaScript, HTML, CSS, and related frameworks and libraries.
                <br />
                In addition to technical skills, I have excellent communication
                and collaboration abilities that allow me to work effectively
                with team members, stakeholders, and clients. My attention to
                detail, problem-solving skills, and commitment to quality ensure
                that I deliver solutions that meet or exceed expectations.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
