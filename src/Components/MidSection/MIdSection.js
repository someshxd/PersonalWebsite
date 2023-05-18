import React from "react";
import "./MidSection.css";

export default function MIdSection() {
  return (
    <div className="wrapper">
      <div className="section">
        <div className="left">
          <div className="text">
            <span className="title">
              React Web Developer <span className="wave"> 👋🏻</span>
            </span>
            <br />
            <span className="desc">
              Hi, I'm Somesh Verma. A passionate and skilled React Developer
              based in India. 📍
            </span>
          </div>
          <div className="git">
            <a href="https://github.com/someshxd" target="_blank">
              <img
                src="Assets/Skills/git.png"
                className="git-img"
                alt="github"
              />
            </a>
            <a href="https://www.instagram.com/someshvrma/" target="_blank">
              <img
                src="Assets/Skills/instagram.png"
                className="insta-img"
                alt="instagram"
              />
            </a>
          </div>
          <div className="p-img">
            <img className="profile" src="Assets/pro.jpg" alt="my-profile" />
          </div>
        </div>
        <div className="right">
          <div className="skills">
            <span className="s-text">Tech Stack |</span>
            <img
              className="s-img"
              src="Assets/Skills/js.png"
              alt="javascript"
            />
            <img className="s-img" src="Assets/Skills/react.png" alt="react" />
            <img className="s-img" src="Assets/Skills/html.png" alt="html" />
            <img className="s-img" src="Assets/Skills/css.png" alt="css" />
          </div>
        </div>
      </div>
    </div>
  );
}
