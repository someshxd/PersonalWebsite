import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <div className="service" id="services">
      <p className="s-head">Services</p>
      <div className="services">
        <div className="ser1">
          <img className="ser-img" src="Assets/Skills/react.jpg" />
          <p className="s-title">React web application development</p>
          <br />
          <p className="s-desc">
            I can offer to build web applications using React, either from
            scratch or by extending existing applications.
          </p>
        </div>
        <div className="ser2">
          <img className="ser-img" src="Assets/Skills/main.jpg" />
          <p className="s-title">Maintenance and support</p>
          <br />
          <p className="s-desc">
            I can provide maintenance and support services to ensure that React
            applications are up-to-date and running smoothly.
          </p>
        </div>
        <div className="ser3">
          <img className="ser-img" src="Assets/Skills/api.png" />
          <p className="s-title">API integration</p>
          <br />
          <p className="s-desc">
            I can integrate third-party APIs with your React application to add
            additional functionality or data.
          </p>
        </div>
      </div>
      <div className="bottom-m"></div>
    </div>
  );
}
