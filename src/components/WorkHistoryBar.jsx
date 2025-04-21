import React, { useState } from "react";
import "./WorkHistoryBar.css";
import { markersData } from "./mapMarkers";
import { FaBriefcase, FaFolderOpen } from "react-icons/fa";

export default function WorkHistoryBar({ onSelect }) {
  const [category, setCategory] = useState(null);

  const cats = [
    { type: "work",    icon: <FaBriefcase />, label: "Work Experience" },
    { type: "project", icon: <FaFolderOpen />,  label: "Projects" },
  ];

  const onIconClick = (e, type) => {
    e.stopPropagation();         
    setCategory(category === type ? null : type);
  };

  return (
    <>
      <div className="work-history-bar">
        <div className="history-header">Data Experience</div>
        {cats.map(({ type, icon, label }) => (
          <div key={type} className="work-history-item">
            <div
              className="icon-btn"
              onClick={(e) => onIconClick(e, type)}
              title={label}
            >
              {icon}
            </div>
            <div className="icon-label">{label}</div>
          </div>
        ))}
      </div>

      {category && (
        <div
          className="work-history-dropdown"
          style={{
            position: "fixed",

            top: document
              .querySelector(`.work-history-item:nth-child(${
                cats.findIndex(c => c.type === category) + 2
              }) .icon-btn`)
              .getBoundingClientRect().top
              + 20,
            left: document
              .querySelector(".work-history-bar")
              .getBoundingClientRect().right
              + 8,
            transform: "translateY(-50%)",
            zIndex: 9999,
          }}
        >
          {markersData
            .filter(m => m.type === category)
            .map(({ id, title, date }) => (
              <div
                key={id}
                className="dropdown-item"
                onClick={() => onSelect(id)}
              >
                <strong>{title}</strong>
                <div className="date">{date}</div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}
