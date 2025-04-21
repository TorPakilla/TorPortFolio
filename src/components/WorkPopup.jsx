import React from "react";
import "./WorkPopup.css";

export default function WorkPopup({ image, title, subtitle, description, tech, github }) {
  return (
    <div className="work-popup">
      <img src={image} alt={title} className="work-popup-img" />
      <h3 className="work-popup-title">{title}</h3>
      <p className="work-popup-subtitle">{subtitle}</p>
      <p className="work-popup-desc">{description}</p>
      <ul className="work-popup-tech">
        {tech.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="work-popup-btn"
      >
        GitHub (Source)
      </a>
    </div>
  );
}
